const {User} = require('../../src/app/models');


describe('Authenticaion', ()=>{
    it ('should creat user', async () => {
        const user = await User.create({name: 'Erick', email:'erick@teste.com', password_hash: "123123"});


        console.log(user);
        expect(user.email).toBe('erick@teste.com');
    }, 30000);

});