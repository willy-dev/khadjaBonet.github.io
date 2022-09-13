// Import the Node.js http module
var http = require('http'); 
var fs = require('fs');
// req is the request object which is
// coming from the client side
// res is the response object which is going
// to client as response from the server
  
// Create a server object
http.createServer(function (req, res) {
  
// 200 is the status code which means
// All OK and the second argument is
// the object of response header.
    res.writeHead(200, {'Content-Type': 'text/html'}); 
  
    // Write a response to the client
    fs.readFile('./index.html', null, function(error, data) {
        if(error) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        // End the response
        res.end();
    });
  
  
}).listen(8081); // Server object listens on port 8081
  
console.log('Node.js web server at port 8081 is running..')