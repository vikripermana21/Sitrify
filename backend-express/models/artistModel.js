// models/artistModel.js
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  id_artist: String,
  name: String,
  genres: [String],
  image: String,
  followers_popularity: [
    {
      followers: Number,
      popularity: Number,
      timestamp: Date
    }
  ]
  // add other properties as needed
});

const Artist = mongoose.model('artists', artistSchema);

module.exports = Artist;
