const db = require('../../db/models');


module.exports =  (req, res) =>{
        let id = +req.params.id;

        db.Product.findByPk(id,{
            include: "category"
        })
        .then((product) => {
            return res.render ('./products/detailProduct.ejs', {product});
        })
    }
