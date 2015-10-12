var http = require('http');
var i = 0;
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(1 + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    i++;
})
server.listen(8082);
server.on('error', function (e) {
  // Handle your error here
  console.log(e);
});

