const socket = io()

Notification.requestPermission().then(function (result) {});

function notifyMe(message = 'Hi there') {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification(message);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification(message);
            }
        });
    }
}

let btn = document.getElementById('send')
let texto = document.getElementById('text-field')

btn.addEventListener('click', function() {
    socket.emit('New message', texto.value)
})

socket.on('New message', data => {
    notifyMe('Nuevas confesiones en el confesionario');
    const messagesList = document.getElementById('messages');

    const li = document.createElement("li");
    li.classList = 'list-group-item list-group-item-warning list-group-item-action'

    const text = document.createElement('p');
    text.appendChild(document.createTextNode(data.text));

    const createdAt = document.createElement('span');
    createdAt.appendChild(document.createTextNode(timeago.format(data.createdAt)));

    li.appendChild(text);
    li.appendChild(createdAt);
    messagesList.prepend(li);
})
