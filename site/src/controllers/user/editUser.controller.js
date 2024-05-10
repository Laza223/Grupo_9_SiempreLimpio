const Users = require("../../database/users.json");

module.exports = (req, res) => {

    let { name, surname, email } = req.body;
    const { id } = req.cookies.userLogin;

    const usersMap = Users.map((User) => {

        if (User.id === +id) {
            const userEdit = {
                ...User,
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(), };

            return userEdit;
        }
    }
    )
    saveData(usersMap);
    res.redirect("/perfil/editar");
}



