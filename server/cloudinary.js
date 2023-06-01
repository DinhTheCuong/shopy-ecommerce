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
  cloudinary: cloudinary,
  params: {
    folder: UPLOAD_CONFIG.CLOUDINARY_IMAGES_FOLDER,
    allowedFormats: UPLOAD_CONFIG.INCLUDE_MIMETYPE,
    filename: (req, file) => {
      const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
      file.originalname = uniqueName;
    },
  },
});

const uploadCloud = multer({
  storage: storage,
  limits: {
    fileSize: UPLOAD_CONFIG.MAX_UPLOAD_SIZE,
  },
});

module.exports = uploadCloud;
