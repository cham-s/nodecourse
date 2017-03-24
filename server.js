var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    // if (req.url === '/') {

    // }
    if (req.url === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        var user = {
            firstname: 'John',
            lastname: 'Doe',
            day: 'monday'
        }
        res.end(JSON.stringify(user))
    }
    
}).listen(1337, '127.0.0.1');