const productos = require("../../database/products.json")

module.exports =  {
    detail: (req, res) =>{
        let id = +req.params.id;

       let detalle = productos.find( producto => producto.id === id);
        return res.render ('./products/detailProduct', {detalle});
    }
}
