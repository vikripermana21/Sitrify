from flask import Flask
from flask_pymongo import PyMongo
from routes.charts_route import charts_routes

app = Flask(__name__)

# Register the charts_controller blueprint with the app
app.register_blueprint(charts_routes)

if __name__ == '__main__':
    app.run(debug=True)
