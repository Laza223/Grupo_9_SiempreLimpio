const productos = require("../../database/products.json")

module.exports = (req, res) =>{
        let id = +req.params.id;

       let products = productos.find( producto => producto.id === id);
        return res.render ("./admin/updateProduct", {products});
    }



