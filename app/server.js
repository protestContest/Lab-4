var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    client.mget(['awesome', 'cool', 'rad', 'gnarly', 'groovy'], function(err, values) {
    	var awesome = values[0] || '0';
    	var cool = values[1] || '0';
    	var rad = values[2] || '0';
    	var gnarly = values [3] || '0';
    	var groovy = values[4] || '0';

    	res.end('Awesome:\t' + awesome + '\n' +
    			'Cool:\t\t' + cool + '\n' +
    			'Rad:\t\t' + rad + '\n' +
    			'Gnarly:\t\t' + gnarly + '\n' +
    			'Groovy:\t\t' + groovy
    	);
    });

}).listen(3000);

console.log('Server running on port 3000');