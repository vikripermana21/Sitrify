from flask import jsonify, request
from app import app
from app.controllers.user_controller import create_user, get_user

@app.route('/user', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data['username']
    email = data['email']
    create_user(username, email)
    return jsonify({"message": "User created successfully"})

@app.route('/user/<username>', methods=['GET'])
def get_user_by_username(username):
    user = get_user(username)
    if user:
        return jsonify({"username": user['username'], "email": user['email']})
    else:
        return jsonify({"message": "User not found"}), 404