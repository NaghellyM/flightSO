const boom = require('@hapi/boom');
const {models} = require('../db/sqlite/index');

class AthService {
  constructor() {}

  async getUserByEmail(email, password) {
    const user = await models.User.findOne({
      where: { email }
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    const userPassword = user.dataValues.password;
    if (userPassword === password) {
      return user;
    }
    return user;
  }
}

module.exports = AthService;