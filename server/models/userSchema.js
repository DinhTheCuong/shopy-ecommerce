const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email entry required!'],
      unique: true,
    },
    username: {
      type: String,
      required: [false, 'Requires entering username!'],
    },
    hashed_password: {
      type: String,
      required: [true, 'Requires entering password!'],
      minlength: 6,
    },
    roles: {
      type: [String],
      required: false,
    },
  },
  { versionKey: false }
);

userSchema.methods = {
  authenticate: async function (password) {
    return bcrypt.compareSync(password, this.hashed_password);
  },

  encryptPassword: function (password) {
    if (!password) return '';

    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },
};

userSchema
  .virtual('confirmPassword')
  .set(function (value) {
    this._confirmPassword = value;
  })
  .get(function () {
    return this._confirmPassword;
  });

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.path('hashed_password').validate(function () {
  if (this._confirmPassword && !this.authenticate(this._confirmPassword)) {
    this.invalidate('confirmPassword', 'Password confirmation does not match');
  }
  return true;
});

userSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(error);
  } else {
    next(error);
  }
});

module.exports = userSchema;
