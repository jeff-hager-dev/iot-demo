var userData = require('../apiRoutes/users.data');

module.exports = function(server){
    var socketHandler = {};
    var io = require('socket.io')(server);

    io.on('connection', function(socket) {
        socket.emit('welcome', { message: 'Welcome!', id: socket.id});
        io.emit('checkin', userData.getAll());
    });
    
    socketHandler.checkin = function(data){
        io.emit('checkin', data);
    };

    socketHandler.setColor = function(data){
        io.emit('setColor', data);
    };

    socketHandler.stand = function(data){
        io.emit('stand', data);
    };

    socketHandler.reaction = function(data){
        io.emit('reaction', data);
    };

    return socketHandler;
}