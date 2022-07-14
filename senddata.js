let socket = io('http://localhost:3000/sendData')

let company = document.getElementById('company')
let contact = document.getElementById('contact')
let country = document.getElementById('country')
let btn = document.getElementById('btn')
let table_data = document.querySelector('.table-data')
let id = window.localStorage.getItem('id')
let userid = window.localStorage.getItem('userId')


socket.on('connection', () => {
    socket.emit('connection', id)
})

btn.addEventListener('click', () => {
    console.log(company.value);
    console.log(contact.value);
    console.log(country.value);
    
    socket.emit('send',  {
        id: id,
        userid: userid,
        company: company.value,
        contact: contact.value,
        country: country.value
    })
})

socket.on('sendData', (args) => {
    console.log(args.id, '  ', id);
    if(args.status == 201) {
        renderData(args)
    } else if (args.userid == userid) {
        alert(args.message)
    }
})

function renderData (data) {
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${data.company}</td>
            <td>${data.contact}</td>
            <td>${data.country}</td>
        `
        table_data.append(tr)
}