// controllers/userController.js
const User = require('../models/userModel');

const userController = {
  createUser: async (req, res) => {
    const { id_artist, username, password } = req.body;

    try {
      const newUser = new User({ id_artist, username, password });
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
  // tambahkan fungsi-fungsi lain seperti updateUser, deleteUser, dll.
};

module.exports = userController;
