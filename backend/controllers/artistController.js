// controllers/artistController.js
const Artist = require('../models/artistModel');

// CREATE
exports.createArtist = async (req, res) => {
  try {
    const newArtist = await Artist.create(req.body);
    res.status(201).json(newArtist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (Get All)
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (Get by ID)
exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateArtist = async (req, res) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedArtist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.status(200).json(updatedArtist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteArtist = async (req, res) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (!deletedArtist) {
      return res.status(404).json({ error: 'Artist not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
