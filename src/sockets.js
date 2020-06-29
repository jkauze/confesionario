const Message = require('./models/message');
const socketIO = require('socket.io');

let socket;

/*
    io se encargara de escuchar y enviar las notificaciones de eventos
    cuando una notificacion llega desde el public js al darle dal boton
    send, ese emite una notificacion al socket del servidor (este) que
    se encuentra en la escucha. Lo recibe, lo procesa en la BD, emite ese
    mismo mensaje que recibio a los sockets conectados y listo
*/

const connection = server => {
    const io = socketIO.listen(server);
    io.on('connection', newSocket => {
        newSocket.on('New message', async (data) => {
            newMessage = await Message.create({ text: data })
            io.sockets.emit('New message', newMessage);
        })
        socket = newSocket;
    })

}
const getSocket = () => socket
module.exports = { connection, getSocket }
