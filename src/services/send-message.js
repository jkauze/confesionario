const config = require('../config');
// const client = require('twilio')(config.accountSid, config.authToken);

/**
 * Send a sms message
 * @param {String} body - The message body
 * @param {String} phone  - phone number to send message
 */

// async function sendMessage(body, phone) {
//     try {
//         const message = await client.messages.create({
//             to: phone,
//             from: '+12087798334',
//             body: body
//         })
//         return message;
//     } catch (error) {
//         console.log(error)
//     }

// }

// module.exports = {sendMessage}