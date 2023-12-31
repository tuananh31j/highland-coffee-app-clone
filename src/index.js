
const express = require('express');
require('dotenv').config();
const db = require('./app/config/db/index.js');
const routesApi = require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
// const HOST_NAME = process.env.HOST_NAME
// connect mongodb
app.use(cors());

db.connect();

app.use(express.json());

// console log rep
// app.use(morgan("combined"))

// midleware for form data

app.use(express.urlencoded({
    extended: true
}))

// config view engine
// configViewEngne(app)

// route web server side
// routeWeb(app);

// router api client side
app.use('/api', routesApi)

// start server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

module.exports = app;