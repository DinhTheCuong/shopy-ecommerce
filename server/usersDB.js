const mongoose = require('mongoose');
const { DB_CONFIG } = require('./config/constants');
const url = `mongodb+srv://${DB_CONFIG.DB_USERNAME}:${DB_CONFIG.DB_PASSWORD}@${DB_CONFIG.CLUSTER}/${DB_CONFIG.DB_NAME}`;

const connectUserDB = async () => {
  try {
    await mongoose.connect(url, {
      ssl: true,
    });
    console.log('Server connected successfully to database');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectUserDB };
