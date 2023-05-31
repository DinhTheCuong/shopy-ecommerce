module.exports = {
  SERVICE_CONFIG: {
    TOKEN_EXPIRED_TIME: process.env.TOKEN_EXPIRED_TIME || 60 * 60,
    SECRET_KEY: process.env.JWT_KEY || "7Jw94Mat3rxRQDn7",
    SERVICE_PORT: process.env.SERVICE_PORT || 8000,
  },

  DB_CONFIG: {
    DB_USERNAME: process.env.DB_USERNAME || "dinhthecuong",
    DB_PASSWORD: process.env.DB_PASSWORD || "123123123",
    CLUSTER: process.env.CLUSTER || "web67.iexy3j8.mongodb.net",
    DB_NAME: process.env.DB_NAME || "e-commerce",
    COLLECTION_USER: process.env.COLLECTION_USER || "users",
  },

  UPLOAD_CONFIG: {
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || "dvm4hxddk",
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "979872868991787",
    CLOUDINARY_API_SECRET:
      process.env.CLOUDINARY_API_SECRET || "a-xJyTlUpLZO1Uv8pXBzIG8NLHw",
    CLOUDINARY_IMAGES_FOLDER: process.env.CLOUDINARY_IMAGES_FOLDER || "shoppy",
    INCLUDE_MIMETYPE: process.env.INCLUDE_MIMETYPE || ["jpg", "jpeg", "png"],
    MAX_UPLOAD_SIZE: process.env.MAX_UPLOAD_SIZE || 1024 * 1024 * 2, // Giới hạn tệp tải lên đến 2 MB
  },
};
