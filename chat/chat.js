var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var connectedUsers = {};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    connectedUsers['username'] = socket;
    socket.emit("isConnected", { 'username' });
    socket.on('chat message', function (msg) {
        io.emit('chat message', 'username' + '<b>' + msg + '</b>');
    });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});