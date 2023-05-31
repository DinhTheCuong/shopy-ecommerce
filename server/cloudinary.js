const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { UPLOAD_CONFIG } = require("./config/constants");

// Configuration
cloudinary.config({
  cloud_name: UPLOAD_CONFIG.CLOUDINARY_NAME,
  api_key: UPLOAD_CONFIG.CLOUDINARY_API_KEY,
  api_secret: UPLOAD_CONFIG.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".png");
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;
