from flask import Blueprint, jsonify, request
from datetime import datetime, timedelta
from app.controllers.charts_controller import get_all_chart_data, get_chart_by_timestamp, get_ranking_difference

charts_route = Blueprint('charts_route', __name__, url_prefix='/api')

@charts_route.route('/chart', methods=['GET'])
def get_users():
    users = get_all_chart_data()
    return jsonify(users)

@charts_route.route('/chart/<timestamp>', methods=['GET'])
def get_chart(timestamp):
    chart = get_chart_by_timestamp(timestamp)
    if chart:
        return jsonify(chart)
    else:
        return jsonify({'message': 'Chart not found'}), 404

# Rute untuk mendapatkan selisih ranking setiap song antara suatu hari dan kemarin
@charts_route.route('/chart/ranking-difference/<day>', methods=['GET'])
def get_ranking_difference_route(day):
    # Misalnya, 'day' dalam format 'YYYY-MM-DD'
    # Ubah 'day' menjadi objek datetime
    day_datetime = datetime.strptime(day, '%Y-%m-%d')

    # Hitung hari kemarin
    yesterday_datetime = day_datetime - timedelta(days=1)

    # Ubah hari kemarin menjadi format string yang diharapkan
    yesterday = yesterday_datetime.strftime('%Y-%m-%d')

    return get_ranking_difference(day, yesterday)