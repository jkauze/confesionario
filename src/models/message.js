const { Schema, model } = require('mongoose');

const message = new Schema({
    text: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        default: "Anonimo"
    },
},{
    timestamps: true
    }
);

module.exports = model('message', message);
