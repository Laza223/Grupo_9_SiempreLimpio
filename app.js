/* Puerto para el servidor */
const port = 3030;


const express = require('express');

const app = express()

const path = require('path')

app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/carrito.html"))
})

app.get('/carrito', (req, res)=>{
    res.redirect('/')
})



app.listen(port, ()=> console.log(`http://localhost:${port}/`))