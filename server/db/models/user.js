const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLE_TABLE } = require('./role');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  roleId: { // Llave foránea que referencia a roles
    field: 'role_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROLE_TABLE, // Nombre de la tabla de roles
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  /// crea una relacion con el modelo de roles
  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role',
      foreignKey: 'roleId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }