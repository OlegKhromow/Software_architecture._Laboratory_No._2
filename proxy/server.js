//server.js
const express = require('express');
const app = express();
const config = require('./config')

app.use("/", (req, res) => {
    res.redirect(config.get('apiUrl'));
});

module.exports = app;