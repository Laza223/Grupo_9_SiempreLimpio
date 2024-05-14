const db = require("../../db/models")

module.exports = async (req, res) => {
    
   try {
    if (!req.session.userLogin) { return res.redirect("/") }
    const {id} = req.session.userLogin

    const user = await db.User.findByPk(id,{
        include: "address"
       
    })

    return res.render("user/userProfile",{user})
   } catch(error){
    console.error("Error al cargar el usuario:", error);
    res.status(500).send("Error interno del servidor");
   }

   
}