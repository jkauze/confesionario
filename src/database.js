require('dotenv').config();
const mongoose = require('mongoose');

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;

mongoose.connect(`mongodb://${host}:${port}/confesionario`, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(db => console.log(`DB connected at ${port}`))
.catch(err => console.log(err))
