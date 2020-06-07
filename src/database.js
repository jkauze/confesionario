const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/confesionario', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(db => console.log("DB connected at 27017"))
.catch(err => console.log(err))