const express = require('express');
const SystemResources = require('../services/system');
const router = express.Router();

const systemResources = new SystemResources();

router.get('/all', async (req, res, next) => {
  try {
    const infoSystem = await systemResources.getAll();
    res.json(infoSystem);
  } catch (error) {
    next(error);
  }
});

router.get('/ram', async (req, res, next) => {
    try {
      const infoRAM = await systemResources.getRam();
      res.json(infoRAM);
    } catch (error) {
      next(error);
    }
  });

router.get('/cpu', async (req, res, next) => {
    try {
      const infoCPU = await systemResources.getCPU();
      res.json(infoCPU);
    } catch (error) {
      next(error);
    }
  });

router.get('/process', async (req, res, next) => {
    try {
      const infoProcess = await systemResources.getElectronProcesses();
      res.json(infoProcess);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;