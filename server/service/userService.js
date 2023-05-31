const userModel = require("../models/userModel");
const userService = {};

userService.getUserByUsername = async (reqUserName) => {
  const user = await userModel.findOne({ reqUserName });
  if (!user) {
    console.log("Get user by username error: User Not Found!");
  }
  return user.toObject();
};

userService.getUserByEmail = async (reqUserEmail) => {
  const user = await userModel.findOne({ email: reqUserEmail });
  if (!user) {
    console.log("Get user by email error: User Not Found!");
  }
  return user.toObject();
};

userService.getUserById = async (reqUserId) => {
  const user = await userModel.findById({ _id: reqUserId });
  if (!user) {
    console.log("Get user by id error: User Not Found!");
  }
  return user.toObject();
};

userService.createUser = async (userPayload) => {
  const newUser = await userModel.create(userPayload);
  return newUser.toObject();
};

userService.deleteUserById = async (reqUserId) => {
  const result = await userModel.deleteOne({ _id: reqUserId });
  return result.deletedCount > 0;
};

userService.validateUserPasswordByEmail = async (email, checkPassword) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    console.log("Validate user error: User Not Found!");
  }
  if (!user.authenticate(checkPassword)) {
    console.log("Validate user error: Password Not Match");
  }
  return user.toObject();
};

module.exports = userService;
