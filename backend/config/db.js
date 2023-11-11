// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/SitrifyDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // tambahkan opsi lain jika diperlukan
    });
    console.log('Terhubung ke MongoDB!');
  } catch (error) {
    console.error('Kesalahan koneksi MongoDB:', error);
  }
};

module.exports = connectDB;
