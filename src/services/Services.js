const dataSource = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllRegister() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk({ where: { id } });
  }

  async createRegister(registo) {
    return dataSource[this.model].create(registo);
  }

  async updateRegister(id, dadosAtualizados) {
    const listaAtualizada = dataSource[this.model].update(dadosAtualizados, { where: { id } });
    if (listaAtualizada[0] === 0) return false;
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id } });
  }
}

module.exports = Services;