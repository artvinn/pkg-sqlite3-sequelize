const http = require('http');

module.exports = function startServer(app) {
  // const port = parseInt(process.env.PORT, 10) || 8000;
  const port = 8000;
  const server = http.createServer(app);
  app.set('port', port);
  server.listen(port);
}