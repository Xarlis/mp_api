const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../database/index')

const User = sequelize.define('usuario', {
    // Model attributes are defined here
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

// User.sync({ force: true })

// console.log(User === sequelize.models.User);

module.exports = User

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // tru