var http = require('http');
var url = require('url');
var fs = require('fs');
var i = 0;
var html = undefined;
var css = undefined;
var port = process.env.PORT || 3000;

var inc = function() {
	i++;
}

var server = http.createServer(function (req, res) {
    var info = url.parse(req.url, true);

    if (info.pathname == '/v') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
		inc();
    } else if (info.pathname == "/api/json") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({"number":i}));
    } else if (info.pathname == "/api/plaintext") {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n");
    } else if (info.pathname == '/h') {
        res.writeHead(200, {'Content-Type': 'text/html'});
		fs.readFile('template.html', 'utf8', function (err,data) {
            if (err) {
            return console.log(err);
        }
            html = data;
        });
        res.end(html);
		inc();
    } else if (info.pathname == '/style.css') {
		res.writeHead(200, {'Content-Type': 'text/css'});
		fs.readFile('style.css', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			}
			css = data;
		});
		res.end(css);
	} else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n");
		inc();
    }
})
server.listen(port);
