const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user');

const NOTE_TABLE = 'notes';

const NoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  content: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
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

class Note extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: 'Note',
      timestamps: false
    }
  }
}

module.exports = { NOTE_TABLE, NoteSchema, Note }
