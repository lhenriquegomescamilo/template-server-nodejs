import { testDouble, expect } from './config/helpers';
import UserService from '../../server/modules/user/user-service';



describe('Test Unit from Controller', () => {
    describe('Method CREATE', () => {
        it('Should be create the new user', () => {
            const newUser = {
                id: 1,
                name: "New unit test",
                email: 'usernewunit@email.com',
                password: '123456'
            };

            const userService: UserService = new UserService();
            return userService.create(newUser).then(data => {
                expect(data.dataValues).to.have.all.keys(['email','id', 'name', 'password', 'updatedAt', 'createdAt']);
            });

        });
    });

    // describe('Method UPDATE', () => {
    //     it('Should be update the new user', () => {

    //     });
    // });

    // describe('Method DELETE', () => {
    //     it('Should beremove the new user', () => {

    //     });
    // });

    // describe('Method GET', () => {
    //     it('Should be return the list all users', () => {

    //     });
    // });

});