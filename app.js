const express = require("express")

const path = require("path")

<<<<<<< HEAD
const express = require('express');
=======
const port = 3030
>>>>>>> Laza

const app = express()

app.use(express.static("public"))

app.listen(port, () => console.log("http://localhost:3030/"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/detalleProducto.html"))
})

<<<<<<< HEAD


app.listen(port, ()=> console.log(`http://localhost:${port}`))
=======
app.get("/home", (req, res) => { res.redirect("/") }
)
>>>>>>> Laza
