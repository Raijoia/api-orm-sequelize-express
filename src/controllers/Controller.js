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
}

module.exports = Controller;