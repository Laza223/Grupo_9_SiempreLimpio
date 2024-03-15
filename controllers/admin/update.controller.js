const productos = require("../../database/products.json")

module.exports =  {
    detail: (req, res) =>{
        let id = +req.params.id;

       let products = productos.find( producto => producto.id === id);
        return res.render ("./admin/formularioEdicionProducto.ejs", {products});
    }
}


