# app/controllers/auth_controller.py

from flask_pymongo import pymongo
from flask_bcrypt import Bcrypt
from flask import jsonify
from app import app

mongo = pymongo.MongoClient('mongodb+srv://vikripermana91:dJYIornv80L9PbSv@sitrifydb.9mx4ofx.mongodb.net/?retryWrites=true&w=majority').get_database('SitrifyDB')
bcrypt = Bcrypt(app)

def login(username, password):
    try:
        # Cari pengguna berdasarkan username
        user = pymongo.collection.Collection(mongo, 'users').find_one({'username': username}, {'_id': 0})

        # Jika pengguna tidak ditemukan
        if not user:
            return {"message": "Username salah!"}, 401

        # Verifikasi password
        password_match = bcrypt.check_password_hash(user['password'], password)

        # Jika password tidak cocok
        if not password_match:
            return {"message": "Password salah!"}, 401

        # Jika username dan password cocok, Anda dapat mengizinkan akses
        return {"message": "Login berhasil", "user": user}, 200

    except Exception as e:
        return {"message": str(e)}, 500
