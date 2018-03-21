const http = require('http');
const app = require('./app');

module.exports = function startServer(app) {
    // const port = parseInt(process.env.PORT, 10) || 8000;
    const port = 8000;
    const server = http.createServer(app);
    app.set('port', port);
    server.listen(port);
}