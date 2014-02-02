var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

app.use(express.static(__dirname+"/app/"));


var main = require('./app/main.js');
main(app);
server.listen(3000);

io.sockets.on('connection', function (socket) {

	socket.on('message', function(data) {

		if( typeof data.room != "undefined"){
			io.sockets.in(data.room).emit('message', data.message);
			socket.broadcast.to(data.room).emit('message', data.message)
		}else{
			socket.broadcast.emit('message', { message: data.message });
		}

	});

	socket.on('disconnect', function () { });

});

module.exports = io;