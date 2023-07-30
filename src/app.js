require('dotenv').config();
const express = require('express');
const errorhandler = require('./middlewares/errorhandler');
const morgan_middleware = require('./middlewares/morgan');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(morgan_middleware);
app.use(router)

app.get('/health', (_, res) => {
    res.status(200).json({
        success: true,
        message: 'Site up and running!'
    });
});

app.get('*', (_, res) => {
    res.status(404).json({
        success: false,
        message: 'Requested Url not found'
    });
});
/* This error handling middleware should be defined last */
app.use(errorhandler);

module.exports = app;
