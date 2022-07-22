const usuarioCriado = require('../model/userModel');

module.exports = {
    async index(req, res) {
        const usuariosCadastrados = await usuarioCriado.find();
        res.json(usuariosCadastrados)
    },

    async store(req, res) {
        const { nome, email, endereco, pais, estado, cidade, cep, complemento, cpf, pis, senha } = req.body;

        let criarDados = {}

        criarDados = {
            nome, email, endereco, pais, estado, cidade, cep, complemento, cpf, pis, senha
        };
        const usuarios = await usuarioCriado.create(criarDados);
        res.json(usuarios)
    },
}