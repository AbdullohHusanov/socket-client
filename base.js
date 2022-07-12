const socket = io('http://localhost:3000/notification')

const ul = document.getElementById('list')
const btn = document.getElementById('btn')

let id = window.localStorage.getItem('id')

socket.emit('connecting',  id)

socket.on('notification', (data) => {
    console.log(data);
    render(data[0].text)
})
console.log(id);
function render (data) {
    // for(let i in data) {
        let li = document.createElement('li')
        let br = document.createElement('br')
        li.innerText = data
        ul.append(br)
        ul.append(li) 
    // }
}