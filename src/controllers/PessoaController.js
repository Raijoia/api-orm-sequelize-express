const database = require('../models');

class PessoaController {
  static async getAll(req, res) {
    try {
      const listaDePessoa = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoa); 
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;