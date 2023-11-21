from flask import Blueprint, jsonify, request
from app.controllers.artist_controller import get_all_artists, get_artist_by_id, calculate_followers_popularity_difference, calculate_all_artists_followers_popularity_difference, calculate_all_artists_followers_difference, calculate_all_artists_popularity_difference

artist_route = Blueprint('artist_route', __name__, url_prefix='/api')

@artist_route.route('/artist', methods=['GET'])
def get_all_artists_route():
    artists = get_all_artists()
    return jsonify(artists)

@artist_route.route('/artist/<artist_id>', methods=['GET'])
def get_artist_by_id_route(artist_id):
    artist = get_artist_by_id(artist_id)
    if artist:
        return jsonify(artist)
    else:
        return jsonify({'message': 'Artist not found'}), 404

@artist_route.route('/artist/<artist_id>/followers-popularity-difference', methods=['GET'])
def calculate_followers_popularity_difference_route(artist_id):
    difference_data = calculate_followers_popularity_difference(artist_id)
    return jsonify(difference_data)

@artist_route.route('/artist/followers-popularity-difference/all', methods=['GET'])
def calculate_all_artists_followers_popularity_difference_route():
    difference_data = calculate_all_artists_followers_popularity_difference()
    return jsonify(difference_data)

@artist_route.route('/artist/followers-difference/all', methods=['GET'])
def calculate_all_artists_followers_difference_route():
    difference_data = calculate_all_artists_followers_difference()
    return jsonify(difference_data)

@artist_route.route('/artist/popularity-difference/all', methods=['GET'])
def calculate_all_artists_popularity_difference_route():
    difference_data = calculate_all_artists_popularity_difference()
    return jsonify(difference_data)