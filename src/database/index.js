const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('meuprofissional', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // dialectOptions: {
    //     timezone: 'Etc/GMT-3',
    //   },
    logging: false
})

sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso!');
}).catch((err) => {
    console.error('Não foi realizar a conexão com o BD\n', err);
})


module.exports = sequelize