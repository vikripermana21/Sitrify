from flask import Flask
from flask_pymongo import PyMongo
from app import app
from app.routes.auth_route import auth_route
from app.routes.user_route import user_route
from app.routes.artist_route import artist_route
from app.routes.charts_route import charts_route
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/SitrifyDB'
mongo = PyMongo(app)
CORS(app)

app.register_blueprint(auth_route, url_prefix='/api')
app.register_blueprint(user_route, url_prefix='/api')
app.register_blueprint(artist_route, url_prefix='/api')
app.register_blueprint(charts_route, url_prefix='/api')

@app.route('/')
def index():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True)