const express = require('express');
const AuthService = require('../services/auth');
const router = express.Router();

const AthService = new AuthService();

router.post('/login', async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await AthService.getUserByEmail(email, password);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;