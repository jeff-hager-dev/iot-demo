module.exports = function(server){
    var socketHandler = {};
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        socket.emit('welcome', { message: 'Welcome!', id: socket.id });
        socket.on('Welcome', console.log);
    });
    
    socketHandler.checkin = function(data){
        io.emit('checkin', { message: 'Checked In' });
        socket.on('Check in', console.log);
    };

    socketHandler.setColor = function(data){
        io.emit('setColor', { message: 'Color Set' });
        socket.on('set color', console.log);
    };

    socketHandler.stand = function(data){
        io.emit('stand', data);
        socket.on('stand', console.log);
    }

    socketHandler.reaction = function(data){
        io.emit('reaction', data);
        socket.on('reaction', console.log);
    }

    return socketHandler;
}