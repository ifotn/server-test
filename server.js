var http = require('http');

// const hostname = '127.0.0.1';
var port = process.ENV.port || 1337;

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, function() {
  console.log(`Server running at port:${port}/`);
});
