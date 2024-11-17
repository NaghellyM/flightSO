const boom = require('@hapi/boom');
const {models} = require('../db/sqlite/index');

class RolesService {
  constructor() {}

  async create(data) {
    console.log(models.Role);
    const newRoles = await models.Role.create({
      ...data,
    });
    return newRoles;
  }

  async findAll() {
    const roles = await models.Role.findAll();
    if (!roles) {
      throw boom.notFound('roles not found');
    }
    return roles;
  }
}

module.exports = RolesService;