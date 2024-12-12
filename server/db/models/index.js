const { User, UserSchema } = require('./user');
const { Role, RoleSchema } = require('./role');
const { Note, NoteSchema } = require('./notes');

function setModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  Note.init(NoteSchema, Note.config(sequelize));
  User.associate(sequelize.models);
  Role.associate(sequelize.models);
  Note.associate(sequelize.models);
}

module.exports = setModels
