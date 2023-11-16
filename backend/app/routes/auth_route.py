from flask import Blueprint, request, jsonify
from app import app
from app.controllers.auth_controller import login

auth_route = Blueprint('auth_route', __name__, url_prefix='/api')

@app.route('/login', methods=['POST'])
def login_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"message": "Username dan password harus diisi"}), 400

    result, status_code = login(username, password)
    return jsonify(result), status_code
