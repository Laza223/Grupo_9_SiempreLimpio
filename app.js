const express = require(" express");
const app= express();
const path=require("path")

const pórt= 3030;
app.get(`/`,(req,res) => {res.sendFile(path.join(__dirname,`./views/home.html`))})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"));

app.get('/login', (req, res)=>{
    res.redirect('/home')
})
})
app.listen(port ,()=>console.log(`http://localhost: ${port}`))