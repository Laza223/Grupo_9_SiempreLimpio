const db = require("../../db/models")

module.exports = (req, res) => {

    const { id } = req.params

    db.Product
        .restore({
            where : {
                id
            }
        })
        .then(() => res.redirect("/admin/dashboard/productos"))
        .catch(() => res.send(error))

}
