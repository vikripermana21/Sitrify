from flask_pymongo import pymongo
from app import app

mongo = pymongo.MongoClient('mongodb+srv://vikripermana91:dJYIornv80L9PbSv@sitrifydb.9mx4ofx.mongodb.net/?retryWrites=true&w=majority').get_database('SitrifyDB')

def create_user(id_artist, username, password):
    collection = pymongo.collection.Collection(mongo, 'users')
    user = {
        'id_artist': id_artist,
        'username': username,
        'password': password
    }
    collection.insert_one(user)

def get_all_users():
    collection = pymongo.collection.Collection(mongo, 'users')
    print("collection", collection)
    users = list(collection.find({}, {'_id': 0}))  # Menggunakan list() untuk mengubah kursor menjadi daftar
    return {"users": users}

def get_user(username):
    collection = pymongo.collection.Collection(mongo, 'users')
    user = collection.find_one({'username': username})
    return user