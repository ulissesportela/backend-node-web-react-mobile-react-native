const connection = require('../database/conection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body

        //console.log(data)
        const id = generateUniqueId()
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id })
    }
}