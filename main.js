var http = require('http');
var i = 0;
var port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (info.pathname == '/v') {
      res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    } else {
      res.end(i + "\n");
    }
    i = i + 0.5;
})
server.listen(port);
