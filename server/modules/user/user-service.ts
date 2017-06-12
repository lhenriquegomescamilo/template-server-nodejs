import { UserInterface, UserDetailInterface, createUser, createUserById, createUserByEmail, createUsers } from './user-interface';
import * as Bluebird from 'bluebird';

const model = require('../../models');

class UserService implements UserInterface {
    id: number;
    name: string;
    email: string;
    password: string;

    constructor() { }

    create(user: UserInterface) {
        console.log(model.User);
        return model.Users.create(user);
    }

    updateById(id: number, user: any) {
        return model.Users.update(user, {
            where: { id },
            fields: ['name', 'email', 'password']
        }).then(users => users);
    }

    findAll(): Bluebird<UserInterface[]> {
        return model.Users.findAll({
            order: ['name']
        }).then(createUsers);
    }

    findById(id: number): Bluebird<UserDetailInterface> {
        return model.Users.findOne({
            where: { id }
        }).then(createUserById);
    }

    findByEmail(email: string): Bluebird<UserDetailInterface> {
        return model.Users
            .findOne({ where: { email } })
            .then(createUserByEmail);
    }


    removeById(id: number) {
        return model.Users.destroy({
            where: { id }
        });
    }

}

export default UserService;