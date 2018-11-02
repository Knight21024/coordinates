var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>You made it to coords.azurewebapps.com!</h1>');
    res.end('<h1>You made it to BowKnight.com!</h1>');
    
}).listen(process.env.PORT);