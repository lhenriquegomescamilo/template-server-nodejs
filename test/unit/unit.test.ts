import { testDouble, expect } from './config/helpers';
import UserService from '../../server/modules/user/user-service';



describe('Test Unit from Controller', () => {

    describe('Method CREATE', () => {
        it('Should be create the new user', () => {
            const newUser = {
                id: 1,
                name: "New unit test",
                email: 'usernewunit@email.com',
                password: '12 3456'
            };

            const userService: UserService = new UserService();
            return userService.create(newUser).then(data => {
                expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });

        });
    });

    describe('Method UPDATE', () => {
        it('Should be update the new user', () => {
            const userToUpdated = {
                name: 'new name',
                email: 'newemailupdated@gmail.com'
            };
            const userService = new UserService();
            return userService.updateById(1, userToUpdated).then(usersUpdated => {
                expect(usersUpdated[0]).to.be.equal(1);

            });
        });
    });


    describe('Find user by id', () => {
        it('find user by id', () => {
            let idUser = 1;
            const userService = new UserService()
            return userService.findById(idUser).then(user => {
                console.log('FIND BY USER ID', user);
                expect(user.id).to.be.equal(idUser);
            })
        })
    });

    describe('Method GET', () => {
        it('Should be return the list all users', () => {
            const userService = new UserService();
            return userService.findAll().then(users => {
                expect(users).to.be.an('array');
                expect(users[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            })
        });
    });

    describe('Method DELETE', () => {
        it('Should beremove the new user', () => {
            const userService = new UserService();
            return userService.removeById(1).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });


});