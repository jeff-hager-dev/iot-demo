module.exports = function(server){
    var socketHandler = {};
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        socket.emit('welcome', { message: 'Welcome!', id: socket.id });
        socket.on('Welcome', console.log);
    });
    
    socketHandler.checkin = function(data){
        io.emit('checkin', { message: 'Checked In' });
    };

    socketHandler.setColor = function(data){
        io.emit('setColor', { message: 'Color Set' });
    };

    socketHandler.stand = function(data){
        io.emit('stand', data);
    }

    socketHandler.reaction = function(data){
        io.emit('reaction', data);
    }

    return socketHandler;
}