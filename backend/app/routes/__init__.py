# routes/__init__.py

from flask import Flask
from flask_pymongo import PyMongo
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
mongo = PyMongo(app)

from routes.user_route import user_routes_blueprint

# Register the user_routes blueprint with the app and pass the mongo object
app.register_blueprint(user_routes_blueprint, mongo=mongo)

if __name__ == '__main__':
    app.run()
