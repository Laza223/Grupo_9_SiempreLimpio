const db = require("../../db/models")

module.exports = async (req, res) => {

    try {

        if (!req.session.userLogin) { return res.redirect("/") }
        const id = req.session.userLogin.id;

        const { name, surname, phoneNumber } = req.body

         await db.User.update({
            name: name,
            surname: surname,
            avatar: req.file.filename,
            phoneNumber: phoneNumber

        }, { where: { id } })
     
        return res.redirect("/perfil")

    } catch (error) {
        console.error("Error al editar el usuario:", error);
        res.status(500).send("Error interno del servidor");
    }

}



