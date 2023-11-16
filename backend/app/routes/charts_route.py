# from flask import Blueprint, jsonify, request
# from your_flask_app import mongo
# from bson import ObjectId  # Import ObjectId for working with MongoDB IDs

# charts_routes_blueprint = Blueprint('charts_routes', __name__)

# @charts_routes_blueprint.route('/charts', methods=['GET'])
# def get_all_chart_data():
#     chart_collection = mongo.db.charts
#     chart_data = chart_collection.find()

#     if chart_data:
#         return jsonify(chart_data)
#     else:
#         return jsonify({'error': 'Chart data not found'}), 404

# @charts_routes_blueprint.route('/charts/<timestamp>', methods=['GET'])
# def get_chart_by_timestamp(timestamp):
#     chart_collection = mongo.db.charts
#     chart_data = chart_collection.find_one({'timestamp': timestamp})

#     if chart_data:
#         return jsonify(chart_data)
#     else:
#         return jsonify({'error': 'Chart data not found'}), 404

# @charts_routes_blueprint.route('/charts', methods=['POST'])
# def add_chart():
#     chart_collection = mongo.db.charts
#     new_chart_data = request.get_json()

#     # Assuming the request JSON includes at least a 'timestamp' field
#     chart_id = chart_collection.insert_one(new_chart_data).inserted_id

#     return jsonify({'message': 'Chart added successfully', 'chart_id': str(chart_id)})

# @charts_routes_blueprint.route('/charts/<chart_id>', methods=['PUT'])
# def update_chart(chart_id):
#     chart_collection = mongo.db.charts
#     updated_chart_data = request.get_json()

#     result = chart_collection.update_one({'_id': ObjectId(chart_id)}, {'$set': updated_chart_data})

#     if result.modified_count > 0:
#         return jsonify({'message': 'Chart updated successfully'})
#     else:
#         return jsonify({'error': 'Chart not found or no changes were made'}), 404

# @charts_routes_blueprint.route('/charts/<chart_id>', methods=['DELETE'])
# def delete_chart(chart_id):
#     chart_collection = mongo.db.charts
#     result = chart_collection.delete_one({'_id': ObjectId(chart_id)})

#     if result.deleted_count > 0:
#         return jsonify({'message': 'Chart deleted successfully'})
#     else:
#         return jsonify({'error': 'Chart not found'}), 404

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