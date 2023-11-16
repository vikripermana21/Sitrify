# routes/user_routes.py

from flask import Blueprint, jsonify, request
from flask_pymongo import PyMongo

user_routes_blueprint = Blueprint('user_routes', __name__)

@user_routes_blueprint.route('/users', methods=['GET'])
def get_users():
    from routes import mongo
    users_collection = mongo.db.users
    users = users_collection.find()
    user_list = [{'username': user['username'], 'email': user['email']} for user in users]
    return jsonify({'users': user_list})

@user_routes_blueprint.route('/users/<username>', methods=['GET'])
def get_user(username):
    from routes import mongo
    users_collection = mongo.db.users
    user = users_collection.find_one({'username': username})
    if user:
        return jsonify({'username': user['username'], 'email': user['email']})
    else:
        return jsonify({'error': 'User not found'}), 404

@user_routes_blueprint.route('/users', methods=['POST'])
def add_user():
    from routes import mongo
    users_collection = mongo.db.users
    new_user = request.get_json()
    
    # Assuming new_user contains 'username' and 'email' fields
    if 'username' in new_user and 'email' in new_user:
        existing_user = users_collection.find_one({'username': new_user['username']})
        if existing_user:
            return jsonify({'error': 'Username already exists'}), 400
        else:
            users_collection.insert_one(new_user)
            return jsonify({'message': 'User added successfully'})
    else:
        return jsonify({'error': 'Invalid user data'}), 400

@user_routes_blueprint.route('/users/<username>', methods=['DELETE'])
def delete_user(username):
    from routes import mongo
    users_collection = mongo.db.users
    result = users_collection.delete_one({'username': username})
    if result.deleted_count > 0:
        return jsonify({'message': 'User deleted successfully'})
    else:
        return jsonify({'error': 'User not found'}), 404
