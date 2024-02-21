const express = require("express")

const path = require("path")

const port = 3000

const app = express()

app.use(express.static("public"))


app.get("/home", (req, res) => { res.redirect("/") }
)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/detalleProducto.html"))
})
app.get('/detailProduct', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/detailProduct.html"))
})
app.get('/productCart', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/productCart.html"))
})


app.listen(port, () => console.log(`http://localhost:${port}/`))