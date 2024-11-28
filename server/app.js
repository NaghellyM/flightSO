const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const app = express();
const port = 3000;

// Habilitar CORS con configuración opcional
app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE" }));

// Middleware para parsear JSON y datos codificados en URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas principales
routerApi(app);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Ocurrió un error en el servidor" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
