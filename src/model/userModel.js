const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome: String,
    email: String,
    endereco: String,
    pais: String,
    estado: String,
    cidade: String,
    cep: String,
    complemento: String,
    cpf: String,
    pis: String,
    senha: String,
})

const usuarioCriado = mongoose.model('User', DataSchema);


module.exports = usuarioCriado;