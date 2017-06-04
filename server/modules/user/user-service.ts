import { UserInterface, UserDetailInterface, createUser, createUserById, createUserByEmail, createUsers } from './user-interface';
import * as Bluebird from 'bluebird';

const model = require('../../models');

class UserService implements UserInterface {
    id: number;
    name: string;
    email: string;
    password: string;

    constructor() { }

    create(user: any) {
        return model.User.create(user);
    }

    updateById(user: any) {
        return model.User.update(user, {
            where: { id: user.id }
        }).then(createUserById);
    }

    findAll(): Bluebird<UserInterface[]> {
        return model.User.findAll({
            order: ['name']
        }).then(createUsers);
    }

    findById(id: number): Bluebird<UserDetailInterface> {
        return model.User.findOne({
            where: { id }
        }).then(createUserById);
    }

    findByEmail(email: string): Bluebird<UserDetailInterface> {
        return model.User.findOne({
            where: { email }
        }).then(createUserByEmail);
    }


    removeById(id: number) {
        return model.User.destroy({
            where: id
        })
    }

}