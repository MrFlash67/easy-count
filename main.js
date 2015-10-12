var http = require('http');
var i = 0;
var port = process.env.PORT || 3000;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    i = i + 0.5;
})
server.listen(port);
