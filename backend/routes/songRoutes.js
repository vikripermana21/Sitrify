// routes/songRoutes.js
const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

// Create a new song
router.post('/songs', songController.createSong);

// Get all songs
router.get('/songs', songController.getAllSongs);

// Get song by ID
router.get('/songs/:id', songController.getSongById);

// Update song by ID
router.put('/songs/:id', songController.updateSong);

// Delete song by ID
router.delete('/songs/:id', songController.deleteSong);

module.exports = router;
