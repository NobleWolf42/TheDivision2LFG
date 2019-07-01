var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;
var people = {};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", function (client) {

    client.on("join", function (name) {
        people[client.id] = name;
        client.emit("update", "You have connected to the server.");
        io.emit("update", name + " has joined the server.")
        io.emit("update-people", people);
    });

    client.on("send", function (msg) {
        io.emit("chat", people[client.id], msg);
    });

    client.on("disconnect", function () {
        io.emit("update", people[client.id] + " has left the server.");
        delete people[client.id];
        io.emit("update-people", people);
    });
    
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});