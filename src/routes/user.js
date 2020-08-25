const express = require('express')
const router = express.Router()

//Conexão com banco de dados
const con = require('../database/index2')
const { json } = require('body-parser')
const { response } = require('express')

router.post('/login', (req, res) => {

    var email = req.body.email
    var senha = req.body.senha

    con.query('SELECT id,nome,email FROM usuarios WHERE email="' + email + '" AND senha="' + senha + '"', (err, result, fields) => {
        if (err) {
            res.status(400).send('Desculpe, ocorreu um erro!')
        } else {
            if (result == "") {
                const json = '{"authorization":"false","message":"Ops, usuário e/ou senha inválidos!"}'
                const response = JSON.parse(json)
                // console.log(response)
                res.status(200).send(response)
            } else {
                const json = '{"authorization":"true","id":"' +
                    result[0].id + '","nome":"' + result[0].nome +
                    '","email":"' + result[0].email + '"}'
                const response = JSON.parse(json)
                res.status(200).send(response) 
            }
            
        }
    })
})

module.exports = router