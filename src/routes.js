const express = require('express');
const userController = require('../src/controller/userController');

const routes = express.Router();

routes.get('/', function(req,res){
    res.json({message: "Olá, Visitante"})
})

routes.get('/users', userController.index)
routes.post('/user', userController.store)
routes


module.exports = routes;