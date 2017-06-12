import { testDouble, expect } from './config/helpers';
import UserService from '../../server/modules/user/user-service';



describe('Test Unit from Controller', () => {
    const userTest = {
        id: 1,
        name: "New unit test",
        email: 'usernewunit@email.com',
        password: '123456'
    };
    describe('Method CREATE', () => {
        it('Should be create the new user', () => {


            const userService: UserService = new UserService();
            return userService.create(userTest).then(data => {
                expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });

        });
    });

    describe('Find user by id', () => {
        it('find user by id', () => {

            const userService = new UserService()
            return userService.findById(userTest.id).then(user => {
                expect(user.id).to.be.equal(userTest.id);
                expect(user.name).to.be.equal(userTest.name);
                expect(user.email).to.be.equal(userTest.email)
                expect(user.password).to.be.equal(userTest.password)
            })
        })
    });

    describe('Find user by email', () => {
        it('find user by email', () => {
            const userService = new UserService()
            return userService.findByEmail(userTest.email).then(user => {
                expect(user.id).to.be.equal(userTest.id);
                expect(user.name).to.be.equal(userTest.name);
                expect(user.email).to.be.equal(userTest.email)
                expect(user.password).to.be.equal(userTest.password)
            })
        })
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