from flask import Blueprint, jsonify, request
# from app.controllers.artist_controller import get_artist # sesuain methodnya nanti

artist_route = Blueprint('artist_route', __name__, url_prefix='/api')
