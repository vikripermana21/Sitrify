// routes/artistRoutes.js
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistController');

// Routes
router.post('/artists', artistController.createArtist);
router.get('/artists', artistController.getAllArtists);
router.get('/artists/:id', artistController.getArtistById);
router.put('/artists/:id', artistController.updateArtist);
router.delete('/artists/:id', artistController.deleteArtist);

module.exports = router;
