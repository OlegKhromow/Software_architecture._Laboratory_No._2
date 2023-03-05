//start.js
const app = require('./server.js');
const config = require('./config');

const server = app.listen(config.get('port'), () => {
    console.log('Server start at localhost:' + server.address().port);
});