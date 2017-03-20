

module.exports = function(server){
    
    var io = require('socket.io')(server);
    // Send current time to all connected clients
    function sendTime() {
        io.emit('time', { time: new Date().toJSON() });
    }

    // Send current time every 10 secs
    setInterval(sendTime, 10000);

    // Emit welcome message on connection
    io.on('connection', function(socket) {
        // Use socket to communicate with this particular client only, sending it it's own id
        socket.emit('welcome', { message: 'Welcome!', id: socket.id });

        socket.on('i am client', console.log);
    });

    return io;
}