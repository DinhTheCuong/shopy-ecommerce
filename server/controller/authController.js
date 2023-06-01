const jwt = require("jsonwebtoken");
const { SERVICE_CONFIG } = require("../config/constants");

const authController = (router, service) => {
  const userService = service;

  router.post("/login", async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || (!password && email.length === 0) || password.length === 0) {
      res.json({
        message: "Not found User",
      });
    }

    try {
      const checkPassword = password;
      const user = await userService.validateUserPasswordByEmail(
        email,
        checkPassword,
      );
      if (!user) {
        res.status(400).json({
          message: "Validate user error: Email or Password invalid",
        });
      } else {
        res.json({
          _id: user.id,
          email: user.email,
          roles: user.roles,
          access_token: jwt.sign(
            {
              id: user.id,
              roles: user.roles,
            },
            SERVICE_CONFIG.SECRET_KEY,
            {
              expiresIn: SERVICE_CONFIG.TOKEN_EXPIRED_TIME,
            },
          ),
        });
        console.log("Logged in successfully!");
      }
    } catch (error) {
      res.json({
        message: "Login Failed!!!",
      });
    }
  });

  return router;
};

module.exports = authController;
