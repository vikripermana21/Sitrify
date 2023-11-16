const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  id_artist: String,
  songs: [
    {
      id_song: String,
      title: String,
      id_album: String,
      album: String,
      image: String,
      release_date: Date,
    //   artists: [
    //     {
    //       external_urls: {
    //         spotify: String,
    //       },
    //       href: String,
    //       id: String,
    //       name: String,
    //       type: String,
    //       uri: String,
    //     },
    //   ],
    },
  ],
});

const Song = mongoose.model('songs', songSchema);

module.exports = Song;
