const express = require('express');
const router = express.Router();
const chartController = require('../controllers/chartController');

// Routes for managing charts
router.post('/charts', chartController.createChart);
router.get('/charts', chartController.getCharts);
router.get('/charts/:id', chartController.getChartById);
router.put('/charts/:id', chartController.updateChart);
router.delete('/charts/:id', chartController.deleteChart);

module.exports = router;
