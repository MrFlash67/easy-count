var http = require('http');
var url = require('url');
var i = 0;
var port = process.env.PORT || 3000;
var server = http.createServer(function (req, res) {
    var info = url.parse(req.url, true);

    if (info.pathname == '/v') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    } else if (info.pathname == "/api/json") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({"number":i}));
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n");
    }
    i++;
})
server.listen(port);
