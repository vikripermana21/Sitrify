from flask import jsonify
from app import app, mongo

@app.route('/api/songs', methods=['GET'])
def get_songs():
    songs = mongo.db.songs.find()
    song_list = []
    for song in songs:
        song_list.append({
            'title': song['title'],
            'artist': song['artist'],
            'genre': song['genre']
            # tambahkan field lainnya
        })
    return jsonify({'songs': song_list})
