const Message = require('./models/message');
const socketIO = require('socket.io');

let socket;
const connection = server => {
    // io se encargara de enviar las notificaciones de eventos
    const io = socketIO.listen(server);

    // escuchara una nueva coneccion para ponerla en nuevo socket
    io.on('connection', newSocket => {
        // console.log('hubo una coneccion', newSocket.id);
        newSocket.on('New message', async (data) => {
            newMessage = await Message.create({ text: data })
            io.sockets.emit('New message', newMessage);
        })
        socket = newSocket;
    })

}
const getSocket = () => socket
module.exports = { connection, getSocket }
