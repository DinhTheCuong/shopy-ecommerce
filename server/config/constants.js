module.exports = {
  SERVICE_CONFIG: {
    TOKEN_EXPIRED_TIME:
      process.env.TOKEN_EXPIRED_TIME || 60 * 60,
    SECRET_KEY: process.env.JWT_KEY || '7Jw94Mat3rxRQDn7',
    SERVICE_PORT: process.env.SERVICE_PORT || 3002,
  },

  DB_CONFIG: {
    DB_USERNAME: process.env.DB_USERNAME || 'dinhthecuong',
    DB_PASSWORD: process.env.DB_PASSWORD || '123123123',
    CLUSTER:
      process.env.CLUSTER || 'web67.iexy3j8.mongodb.net',
    DB_NAME: process.env.DB_NAME || 'e-commerce',
    COLLECTION_USER: process.env.COLLECTION_USER || 'users',
  },
};
