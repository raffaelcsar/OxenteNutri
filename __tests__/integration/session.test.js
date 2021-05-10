const request = require("supertest");

const { User } = require('../../src/app/models/User');
const truncate = require('../utils/truncate');
//const sequelize = require("../../src/app/models/index");


describe('Authenticaion', ()=>{
    beforeEach(
        async () =>{
            await truncate();
        }
    );

    it('Deve autenticar com as credenciais validas',  async() {
        const user = await User.create({
            name: 'Erick',
            email: 'erick@teste.com.br',
            password_hash: '123123',
        })


    });

});