# app/controllers/auth_controller.py

from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from flask import jsonify

mongo = PyMongo()
bcrypt = Bcrypt()

def login(username, password):
    try:
        # Cari pengguna berdasarkan username
        user = mongo.db.users.find_one({'username': username})

        # Jika pengguna tidak ditemukan
        if not user:
            return jsonify({"message": "Username salah!"}), 401

        # Verifikasi password
        password_match = bcrypt.check_password_hash(user['password'], password)

        # Jika password tidak cocok
        if not password_match:
            return jsonify({"message": "Password salah!"}), 401

        # Jika username dan password cocok, Anda dapat mengizinkan akses
        return jsonify({"message": "Login berhasil", "user": user}), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 500
