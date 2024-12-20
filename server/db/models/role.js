const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE = 'role';

const RoleSchema = {
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  description: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
  }
}

class Role extends Model {
  static associate(models) {
      this.hasMany(models.User, {
        as: 'users',
        foreignKey: 'roleId'
      });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}


module.exports = { ROLE_TABLE, RoleSchema, Role }