var mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "meuprofissional"
});

con.connect((err) => {
    if (err) {
        // throw err;
        console.log("Não foi possível realizar a conexão com BD!");
    } else {
        console.log("Conexão realizada com sucesso!");
    }
})

module.exports = con