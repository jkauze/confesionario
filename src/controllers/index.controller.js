const Message = require('../models/message');

const { getSocket } = require('../sockets');

// Main/Inicio muestra los mensajes almacenados en la BD
const indexController = async (req, res) => {
    // con lean permite convertir el objecto de json a javascript para que el hbs lo entienda al recibirlo
    const messages = await Message.find().sort('-createdAt').lean();
    res.render('index', { messages })
}


const postMessage = async (req, res) => {
    const { message } = req.body
    try {
        if (!message) {
            return res.redirect('/');
        }
        // newMessage = await Message.create({ text: message })
        // getSocket().emit('New message', newMessage);
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
};

const filterbar = async (req, res) => {
    const busqueda = req.query.text
    const allMessages = await Message.find().sort('-createdAt').lean();
    let messages = []

    if (busqueda != '') {
        messages = allMessages.filter(function (especificMessage) {
            if (especificMessage.text === busqueda) {
                return especificMessage;
            }
        });
    } else {
        res.redirect('/');
    }
    console.log(messages)
    res.render('index', { messages })
}

module.exports = {
    indexController,
    postMessage,
    filterbar
}