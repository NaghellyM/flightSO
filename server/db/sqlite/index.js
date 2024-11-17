const { Sequelize } = require("sequelize");
const setupModels = require('../models/index');
const fs = require("fs");
const path = "./database.sqlite";

function connect() {
  let db;
  if (!fs.existsSync(path)) {
    db = new Sequelize({
      dialect: "sqlite",
      storage: path,
    });
    db.sync();
    console.log("Base de datos creada.");
  } else {
    console.log("La base de datos ya existe.");
    db = connectDb();
  }
  return db;
}

function connectDb() {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: path,
  });
  return db;
}

const sequelize = connect();
setupModels(sequelize);

module.exports = sequelize;

