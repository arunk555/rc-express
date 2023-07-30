require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

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

module.exports = app;
