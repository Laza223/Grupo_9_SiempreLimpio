const db = require("../../db/models")

module.exports = async (req, res) => {
    try {
        const {id} = req.params
        const user = await db.User.findByPk( id, {

            include : [{
                model : db.Role,
                as : "role"
            },
            {
                model : db.Address,
                as : "address"
            }
        ]
        })

        return  res.render("admin/userDetail", {user})
    }    catch (error)  { console.log("Error al obtener los detalles del usuario:", error); }
}