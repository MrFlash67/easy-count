var http = require('http');
var url = require('url');
var i = 0;
var port = process.env.PORT || 3000;
var server = http.createServer(function (req, res) {
    var info = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (info.pathname == '/v') {
      res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    } else {
      res.end(i + "\n");
    }
    i = i++;
})
server.listen(port);
