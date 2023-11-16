from flask import Blueprint, jsonify, request
# from app.controllers.charts_controller import get_charts # sesuain methodnya nanti

charts_route = Blueprint('charts_route', __name__, url_prefix='/api')