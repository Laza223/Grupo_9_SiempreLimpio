const { literal } = require('sequelize');
const db = require('../../db/models')

module.exports = async (req, res) => {

    try {
        const users =
            await db.User.
                findAll({  attributes: ["id", "name", "surname", "email" ]  })

        const usersMapped = users.map(user => ({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            detail: `http://localhost:3030/api/usuarios/${user.id}`
        })
        )

        const response = {
            count: usersMapped.length,
            users: usersMapped
        };
        return res.status(200).json(response)

    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

