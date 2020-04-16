const request = require('supertest')
const app = require('../../src/app')
const connectiom = require('../../src/database/conection')

describe('ONG', () => {
    beforeEach( async () => {
        await connectiom.migrate.rollback()
        await connectiom.migrate.latest()
    })

    afterAll( async () => {
        await connectiom.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'cbc5d7b1')
            .send({
                name: "APAD2",
                email: "ae@ae.com",
                whatsapp: "61998844131",
                city: "Brasilia",
                uf: "DF"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})