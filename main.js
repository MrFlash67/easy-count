//requires
var http = require('http');
var url = require('url');
var fs = require('fs');
//making vars
var i = 0;
var port = 8080;
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
fs.readFile('verbose.html', 'utf8', function (err,data) {
	console.log("fetching verbose");
	if (err) {
		return console.log("verbose err " + err);
	}
	verbose = data;
});
fs.readFile('mobile.html', 'utf8', function (err,data) {
	console.log("fetching mobile");
	if (err) {
		return console.log("mobile err " + err);
	}
	mobile = data;
});
fs.readFile('favicon.ico', function (err,data) {
	console.log("fetching favicon");
	if (err) {
		return console.log("favicon err " + err);
	}
	console.log(data);
	favicon = data;
});
var inc = function() {
	i++;
}
//main stuff
var server = http.createServer(function (req, res) {
    var info = url.parse(req.url, true);
	console.log("200 OK");
    if (info.pathname == '/v') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(verbose);
		inc();
    } else if (info.pathname == "/api/json") {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        res.end(JSON.stringify({"number":i}));
    } else if (info.pathname == "/api/plaintext") {
        res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
        res.end(i + "\n");
	} else if (info.pathname == "/api/json/inc") {
		res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
		res.end(JSON.stringify({"number":i}));
		inc();
	} else if (info.pathname == "/api/plaintext/inc") {
		res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
		res.end(i + "\n");
		inc();
    } else if (info.pathname == '/p') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(i + "\n");
		inc();
    } else if (info.pathname == '/style.css') {
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.end(css);
	} else if (info.pathname == '/zepto.min.js') {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end(zepto);
	} else if (info.pathname == '/m') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(mobile);
		inc();
	} else if (info.pathname == '/favicon.ico') {
			res.writeHead(200, {'Content-Type': 'image/png'});
			res.end(favicon);
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(html);
		inc();
    }
})
server.listen(port);
