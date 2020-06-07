const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
var favicon = require('serve-favicon')

const app = express();
app.use(favicon(__dirname + '/public' + '/favicon.png'))

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('.hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./libs/handlebars')
}));
app.set('view engine', '.hbs');

// middlewares
// app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index.routes'))

// static files
app.use(express.static(__dirname + '/public'))


module.exports = app;
