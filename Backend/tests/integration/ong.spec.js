const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('Should be able to create a new ONG', async () => {
        const response = await request (app)
        .post('/ongs')
        // .set('Authorization', 'idOng')
        .send({
            name: "ACMC2",
            email: "contato@contato.com",
            whatsapp: "4700000000",
            city: "Siqueira Campos",
            uf: "PR"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});