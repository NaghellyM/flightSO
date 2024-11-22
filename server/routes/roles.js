const express = require('express');
const RolesService = require('../services/roles');
const router = express.Router();

const rolesService = new RolesService();

router.post('/', async (req, res, next) => {
    try {
      const body = req.body;
      const user = await rolesService.create(body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', async (req, res, next) => {
  try {
    const roles = await rolesService.findAll();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

module.exports = router;