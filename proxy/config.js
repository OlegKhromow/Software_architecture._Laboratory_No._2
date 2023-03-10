require('dotenv').config();
const convict = require("convict");

const config = convict({
    apiUrl:{
        doc: 'The url application \"api\".',
        format: String,
        default: 'http://localhost:3000/',
        env: 'APIURL'
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 3001,
        env: 'PORT',
        arg: 'port'
    }
});

config.validate({ allowed: 'strict' }); // виконувати перевірку параметрів

module.exports = config;
