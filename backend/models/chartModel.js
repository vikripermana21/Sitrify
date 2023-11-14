// models/chartModel.js
const mongoose = require('mongoose');

const chartSongSchema = new mongoose.Schema({
  ranking: String,
  artist: [
    {
      id: String,
      name: String,
    },
  ],
  id_song: String,
  song_name: String,
  image: String,
  audio_features: {
    acousticness: Number,
    danceability: Number,
    energy: Number,
    instrumentalness: Number,
    liveness: Number,
    loudness: Number,
    valence: Number,
  },
});

const chartSchema = new mongoose.Schema({
  timestamp: String,
  chart_songs: [chartSongSchema],
});

const Chart = mongoose.model('charts', chartSchema);

module.exports = Chart;