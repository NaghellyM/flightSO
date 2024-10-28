const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Crear instancia de Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// Definir el modelo User
class User extends Model {}
User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: "user" }
);

// Sincronizar modelos con la base de datos
sequelize.sync();

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas CRUD para el modelo User

// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Obtener un usuario por ID
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

// Crear un nuevo usuario
app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Actualizar un usuario por ID
app.put("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

// Eliminar un usuario por ID
app.delete("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: "Usuario eliminado" });
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
