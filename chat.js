let socket = io('http://localhost:3000/chat')

const sendto = document.querySelector('#sendTo')
const message = document.querySelector('#message')
const messageList = document.querySelector('#messages')
const btn = document.getElementById('send')

const id = window.localStorage.getItem('id')

console.log(id);

socket.on('connection', () => {
    socket.emit('connection', id)
})

socket.on('receiveMessage', (receiveFrom, message) => {
    // if(sendto == id) {
        console.log(receiveFrom, '  ', message);
        render(receiveFrom, message)
    // }
})

btn.addEventListener('click', () => {
    console.log(message.value, '  ', sendto.value)
    socket.emit('sendMessage', {sender: id, text: message.value, sendTo: sendto.value})
})

function render (user, message) {
    let li = document.createElement('li')
    li.innerText = `${user}:@.  ${message}`
    messageList.append(li)
}