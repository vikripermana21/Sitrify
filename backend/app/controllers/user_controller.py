from flask_pymongo import PyMongo

mongo = PyMongo()

def create_user(id_artist, username, password):
    collection = mongo.db.users
    user = {
        'id_artist': id_artist,
        'username': username,
        'password': password
    }
    collection.insert_one(user)

def get_user(username):
    collection = mongo.db.users
    user = collection.find_one({'username': username})
    return user