const db = require("../../db/models")

module.exports = async (req, res) => {
    const {id} = req.session.userLogin

    const userInfo = await db.User.findByPk(id,{
        include: "address"
    })
    

    res.render("./user/userProfile",{user: userInfo})
}