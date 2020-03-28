const connection = require('../database/conection')

module.exports = {
    async create(request, response) {
        const { id }  = request.body

        const ong = await connection('ongs').select('name').where('id', id).first()

        if (!ong) return response.status(400).json({ error: 'No ong find with ID '})

        return response.json(ong)
    }
}
