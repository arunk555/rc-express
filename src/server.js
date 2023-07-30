const app = require('./app');
const { PORT } = require('./config');
const mongodb = require('./utills/mongodb_connect');

const API_PORT = PORT || 4000;

app.listen(API_PORT, function (req, res) {
    mongodb();
    console.log(`The server listern to the port %d in the %s mode!`, this.address().port, app.settings.env);
});
