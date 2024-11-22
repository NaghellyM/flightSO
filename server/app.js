const express = require("express");
const bodyParser = require("body-parser");
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routerApi(app);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
