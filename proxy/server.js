//server.js
const express = require('express');
const app = express();
const config = require('./config');
const axios = require('axios');

app.use("/", async (req, res) => {
    const { data } = await axios.get(`${config.get('apiUrl')}/`);
    res.send(data);
});

module.exports = app;