const { User, UserSchema } = require('./user');
const { Role, RoleSchema } = require('./role');

function setModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  User.associate(sequelize.models);
  Role.associate(sequelize.models);
}

module.exports = setModels