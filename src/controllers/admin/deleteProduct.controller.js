module.exports=(req,res)=>{
    const {id,nombre,imagen} = req.query
    
    res.render("admin/deleteProduct", {id, nombre,imagen}, (err,content) => {
        err && res.send(err.message)
        res.render("partials/dashboard",{ views: content})
    })
}