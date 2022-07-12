let socket = io('http://localhost:3000/sendData')

let id = window.localStorage.getItem('id')
let n = document.getElementById('n')
let data = document.getElementById('inp')

// socket.emit('send', id)

n.addEventListener('click', () => {
    console.log(id);
    socket.emit('send',  {id: id, data: data.value})
})

socket.on('connecting', (data) => {
    console.log(data);
})
