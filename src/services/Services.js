const dataSource = require('../models');

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAllRegister() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findOne({ where: { id } });
  }

  async createRegister(registo) {
    return dataSource[this.model].create(registo);
  }
}

module.exports = Services;