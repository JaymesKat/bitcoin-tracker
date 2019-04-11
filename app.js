var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log("New connection made");
})

server.listen(port, function() {
  console.log("Listening on port " + port);
});
