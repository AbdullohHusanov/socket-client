const socket = io('http://localhost:3000/notification')

const message = document.querySelector('#message');
const messages = document.querySelector('#messages');
const btn = document.querySelector('#send');

// let roomid = window.localStorage.getItem('id')
// let userid = window.localStorage.getItem('user')


message.onkeyup = (event) => {
    if (event.keyCode == 13) {
        handleMessageSocket()
    }
}

// let obj = {
//     1: "Umar",
//     2: "Ali",
//     3: "Nodir",
//     4: "Sobir",
// }
// handleMessage(userid, message.value)

btn.addEventListener('click', () => {
    handleMessageSocket()
})

const handleMessageSocket = () => {
    socket.emit('notification', 1)
    message.value = ''
}

// socket.on('message', ({sender, text}) => {
//     handleMessage(sender, text);
// })

// function handleMessage (sender, message) {
//     messages.appendChild(buildMessage(sender, message));
// }

// function buildMessage (sender, message) {
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(obj[sender] + ': ' + message))
//     return li
// }
