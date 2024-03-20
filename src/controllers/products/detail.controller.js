const productos = require("../../database/products.json")

module.exports =  (req, res) =>{
        let id = +req.params.id;

       let producto = productos.find( producto => producto.id === id);
        return res.render ('./products/detailProduct.ejs', {producto});
    }
