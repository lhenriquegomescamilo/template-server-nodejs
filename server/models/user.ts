import * as bcrypt from 'bcryptjs';
const NUMBER_OF_RUNS = 10;
export default function (sequelize, DataTypes) {
    const User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        }
    });

    User.beforeCreate(user => {
        return hashPassword(user);
    });

    User.beforeUpdate(user => {
        return hashPassword(user);
    })

    function hashPassword(user) {
        const salt = bcrypt.genSaltSync(NUMBER_OF_RUNS);
        user.set('password', bcrypt.hashSync(user.password, salt));
    }

    return User;
}