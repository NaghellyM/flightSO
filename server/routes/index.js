const express = require("express");

const user = require("./user");
const auth = require("./auth");
const roles = require("./roles");
const notes = require("./notes");

function routerApi(app) {
    const router = express.Router();
    app.use("/api", router);
    router.use('/user', user);
    router.use('/auth', auth);
    router.use('/roles', roles);
    router.use('/notes', notes);
}

module.exports = routerApi;
