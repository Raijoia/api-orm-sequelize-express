class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAllRegister();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const registro = await this.entidadeService.getRegisterById(id);
      return res.status(200).json(registro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async create(req, res) {
    try {
      const novoRegistro = req.body;
      const registroCriado = await this.entidadeService.createRegister(novoRegistro);
      return res.status(201).json(registroCriado);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;