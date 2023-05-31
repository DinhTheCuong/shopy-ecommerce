const jwt = require("jsonwebtoken");
const userService = require("../service/userService");
const { SERVICE_CONFIG } = require("../config/constants");

const loadLoginMdw = async (req, _, next) => {
  if (req.headers.hasOwnProperty("authorization")) {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      const claims = jwt.verify(token, SERVICE_CONFIG.SECRET_KEY);
      const loginUser = await userService.getUserById(claims.id);
      req.user = loginUser;
    } catch (error) {
      console.log(error.message);
    }
  }
  next();
};

module.exports = loadLoginMdw;
