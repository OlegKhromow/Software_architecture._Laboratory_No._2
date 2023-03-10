//start.js
const app = require('./server.js');
const config = require('./config');

app.listen(config.get('port'), () => {
    console.log('Server start at localhost:' + config.get('port'));
});