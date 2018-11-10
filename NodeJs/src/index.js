var http = require('http');
var settings = require('./settings.js');
var msg;

var server = http.createServer();
server.on('request', function(req, res){
    switch(req.url) {
        case '/about':
            msg = "about";
            break;
        case '/blog':
            msg = "blog";
            break;
        default:
            msg = "another";
            break;
    }
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('request is ' + msg);
    res.end();
});
server.listen(settings.port);
console.log('server listening ... ');