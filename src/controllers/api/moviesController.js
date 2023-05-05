const {Movie} = require("../../database/models");

module.exports = {
    create: (req, res) => {
        Movie.create(req.body)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200,
                created: 'ok'
            })
        })

    },
    destroy: (req, res) => {

        Movie.destroy({
            where: {id: req.params.id}})
            .then(response => {
                return res.json(response)
            })
    },
}
