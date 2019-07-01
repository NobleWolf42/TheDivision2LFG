var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
users = {};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
  socket.on('new user', function(data, callback) {
    if (data in users) {
      callback(false);
    }
    else {
      callback(true);
      socket.nickname = data;
      users[socket.nickname] = socket;
      updateNicknames();
    }
  })
});

function updateNicknames() {
  io.socket.emit('usernames', Object.keys(users));
};

io.socket.on('send message', function(data){
  io.sockets.emi('new message', {msg: data, nick: socket.nickname})
});

socket.on('disconnect', function(data){
  if (!socket.nickname) return;
  delete users[socket.nickname];
  updateNicknames();
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
