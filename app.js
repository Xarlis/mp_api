const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.port || 8050

// const User = require('./src/app/models/user')
const con = require('./src/database/index2')

//Rotas
const user = require('./src/routes/user')



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

RetornaDataHoraAtual = () => {
    var now = new Date();
    var isoDate = new Date(now).toISOString();
    isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
    return isoDate
}

app.get('/', (req, res) => {

    // User.findAll().then((usuario) => {
    //     res.send(usuario)
    //     // res.send({'Data e Hora':RetornaDataHoraAtual()})
    // })

    con.query("SELECT id,nome,email FROM usuarios ORDER BY nome", (err, result, fields) => {
        if (err) throw err;
        // var d = new Date(result.createdAt);
        // console.log(result[0].createdAt);
        // console.log(result);

        res.send(result)
    });

})

app.post('/user', (req, res) => {
    // User.create(req.body).then((usuario) => {
    //     res.send(usuario)
    // })
    // res.send(req.body)

    var datahora = RetornaDataHoraAtual()

    var sql = "INSERT INTO usuarios (id,nome, email,senha,createdAt,updatedAt) VALUES ('','"
        + req.body.nome + "', '" + req.body.email + "','" + req.body.senha + "','"
        + datahora + "','" + datahora + "')";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send("1 record inserted");
    });
    // //Select all customers and return the result object:
    // con.query("SELECT * FROM usuarios", function (err, result, fields) {
    //     if (err) throw err;
    //     // console.log(result);
    //     res.send(result)
    // });


})

app.delete('/delete', (req, res) => {
    User.destroy({ truncate: true }).then((usuarios) => {

        res.send('Todos os usuário forma deletados')
    })
})


app.use('/users', user)

app.listen(port, () => {
    console.log('Servidor rodando na porta 8050')
})