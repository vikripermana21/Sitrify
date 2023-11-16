// controllers/userController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {
  createUser: async (req, res) => {
    const { id_artist, username, password } = req.body;

    try {
      // Cek apakah username sudah ada dalam database
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ message: 'Username sudah digunakan' });
      }

      // Hash password sebelum menyimpannya ke dalam database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Jika username belum ada, buat user baru dengan password yang sudah di-hash
      const newUser = new User({ id_artist, username, password: hashedPassword });
      await newUser.save();
      res.json(newUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      // Mendapatkan data pengguna berdasarkan ID atau kriteria lainnya
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  getUserById: async (req, res) => {
    const userId = req.params.id; // Ambil ID pengguna dari parameter URL
    try {
      const user = await User.findById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { id_artist, username, password } = req.body;

    try {
      const updatedUser = await User.findByIdAndUpdate(userId, { id_artist, username, password }, { new: true });
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (deletedUser) {
        res.json({ message: 'Pengguna berhasil dihapus' });
      } else {
        res.status(404).json({ message: 'Pengguna tidak ditemukan' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      // Cari pengguna berdasarkan username
      const user = await User.findOne({ username });

      // Jika pengguna tidak ditemukan
      if (!user) {
        return res.status(401).json({ message: 'Username atau password salah1' });
      }

      // Verifikasi password
      const passwordMatch = await bcrypt.compare(password, user.password);

      console.log(password);
      console.log(user.password);
      console.log(passwordMatch);
      // Jika password tidak cocok
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Username atau password salah2' });
      }

      // Jika username dan password cocok, Anda dapat mengizinkan akses
      res.json({ message: 'Login berhasil', user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  // Tambahkan fungsi-fungsi lain seperti updateUser, deleteUser, dll.
};

module.exports = userController;
