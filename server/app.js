const express = require('express');
const rootRoutes = require('./routes');
const { SERVICE_CONFIG } = require('./config/constants');
const app = express();
const CORS = require('cors');

app.use(CORS({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rootRoutes);

const { connectUserDB } = require('./usersDB');
connectUserDB();

app.listen(SERVICE_CONFIG.SERVICE_PORT, () => {
  console.log(`Server is running on port: ${SERVICE_CONFIG.SERVICE_PORT}`);
});
