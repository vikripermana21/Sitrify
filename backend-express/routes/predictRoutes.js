const express = require('express');
const router = express.Router();
const modelPredictController = require('../controllers/modelPredictController');

// Routes
// router.post('/predict', loadModelAndPredict);
router.get('/predict', loadModelAndPredict);