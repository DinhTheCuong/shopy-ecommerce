const authRouter = require('express').Router();
const userService = require('../service/userService');
const authController = require('../controller/authController');
const userController = require('../controller/userController');

authController(authRouter, userService);
userController(authRouter, userService);

module.exports = authRouter;
