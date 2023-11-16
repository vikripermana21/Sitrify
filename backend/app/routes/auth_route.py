# app/routes/auth_routes.py

from flask import request, jsonify
from app import app
from app.controllers.auth_controller import login

@app.route('/login', methods=['POST'])
def login_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"message": "Username dan password harus diisi"}), 400

    result, status_code = login(username, password)
    return jsonify(result), status_code
