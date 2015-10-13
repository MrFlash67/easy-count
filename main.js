//requires
var http = require('http');
var url = require('url');
var fs = require('fs');
//making vars
var i = 0;
var port = process.env.PORT || 3000;
//reading files & making functions
fs.readFile('style.css', 'utf8', function (err,data) {
	console.log("fetching css");
    if (err) {
        return console.log("css err " + err);
    }
	css = data;
});
fs.readFile('zepto.min.js', 'utf8', function (err,data) {
	console.log("fetching js");
	if (err) {
		return console.log("js err " + err);
	}
	zepto = data;
});
fs.readFile('template.html', 'utf8', function (err,data) {
	console.log("fetching html");
	if (err) {
		return console.log("html err " + err);
	}
	html = data;
});
var inc = function() {
	i++;
}
//main stuff
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
        res.end(html);
		inc();
    } else if (info.pathname == '/style.css') {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.end(css);
	} else if (info.pathname == '/zepto.min.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end(zepto)
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(i + "\n");
		inc();
    }
})
server.listen(port);
