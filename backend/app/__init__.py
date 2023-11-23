# from flask import Flask
# from flask_pymongo import PyMongo

# app = Flask(__name__)
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/SitrifyDB'
# mongo = PyMongo(app)

# from app.routes import user_routes, artist_route, charts_route  # Import rute khusus user

from flask import Flask
from flask_pymongo import PyMongo
from .config import Config

app = Flask(__name__)
app.config.from_object(Config)

mongo = PyMongo(app)
