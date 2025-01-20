// Create web server
// Use express framework
var express = require('express');
var app = express();
app.use(express.static('public'));
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

// Listen to port 3000
server.listen(3000, function() {
    console.log('Server listening at port 3000');
});