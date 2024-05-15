const db = require('../../db/models')
const sequelize = require("sequelize")

module.exports = async (req, res) => {

    try {

        let offset = req.query.offset ? +req.query.offset : 1

        const { docs, pages, total } = await
            db.User.paginate({
                attributes: ["id", "name", "surname", [sequelize.fn("CONCAT", "http://localhost:3030/api/usuarios/", sequelize.col('id')), 'detail']],
                page: offset,
                paginate: 10
            })

        return res.status(200).send({
            count: total,
            users: docs,
            page: offset ? offset : 1,
            next: offset < pages ? `http://localhost:3030/api/usuarios?offset=${offset + 1}` : "Last page",
            previous: offset > 1 ? `http://localhost:3030/api/usuarios?offset=${offset - 1}` : "First page"
        })

    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

