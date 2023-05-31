const jwt = require("jsonwebtoken");
const { SERVICE_CONFIG } = require("../config/constants");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });

  console.log(123);
  try {
    const decoded = jwt.verify(token, SERVICE_CONFIG.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
