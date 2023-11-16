from flask import Blueprint, jsonify, request
from app.controllers.user_controller import create_user, get_user, get_all_users

user_route = Blueprint('user_route', __name__, url_prefix='/api')

@user_route.route('/user', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data['username']
    email = data['email']
    create_user(username, email)
    return jsonify({"message": "User created successfully"})

@user_route.route('/user/<username>', methods=['GET'])
def get_user_by_username(username):
    user = get_user(username)
    if user:
        return jsonify({"username": user['username']})
    else:
        return jsonify({"message": "User not found"}), 404

@user_route.route('/user', methods=['GET'])
def get_users():
    users = get_all_users()
    return jsonify(users)
