var http = require('http');
var i = 0;
console.log("hey");
var server = http.createServer(function (req, res) {
    console.log("more hey");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(i + "\n\n\n\nReload to increment.\nResets often\n" + '\n');
    i++;
})
//server.listen(80);
server.on('error', function (e) {
  console.log(e);
});
