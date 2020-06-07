const timeago = require('timeago.js')
const { es } = require('timeago.js/lib/lang/')

timeago.register('es_ES', es)

module.exports = {
    timeago: (date) => {
        return timeago.format(date, 'es_ES');

    }
}