const { Router } = require('express');
const router = Router();

const { indexController, postMessage, filterbar} = require('../controllers/index.controller')

// Main
router.get('/', indexController)

// Send an message
router.post('/send-message', postMessage)

router.get('/prueba', filterbar)

module.exports = router;