const request = require("supertest");

const { User } = require('../../src/app/models/User');
const truncate = require('../utils/truncate');
const app = require('../../src/app');
//const sequelize = require("../../src/app/models/index");


describe('Authenticaion', ()=>{
    beforeEach(
        async () =>{
            await truncate();
        }
    );

    it('Deve autenticar com as credenciais validas',  async() => {
        
        const user = await User.create({name: 'Erick', email:'erick@teste.com', password_hash: "123123"});
       


        const response = await request(app).post('/user/').send({
            email: user.email,
            name: user.name,
            password: '123123'
        });

        expect(response.status).toBe(200);

    });
});
