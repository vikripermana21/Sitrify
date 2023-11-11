// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id_artist: String,
  username: String,
  password: String
  // tambahkan properti lain sesuai kebutuhan
});

const User = mongoose.model('users', userSchema);

module.exports = User;
