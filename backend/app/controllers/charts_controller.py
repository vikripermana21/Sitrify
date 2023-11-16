from flask_pymongo import PyMongo
from app import app
from flask import jsonify, request
from datetime import datetime, timedelta

mongo = PyMongo(app)

def get_all_chart_data():
    chart_collection = mongo.db.charts
    chart_data = list(chart_collection.find({}, {'_id': 0}))  # Menggunakan list() untuk mengubah kursor menjadi daftar
    return {"charts": chart_data}
    
# def get_chart_by_timestamp(timestamp):
#     collection = mongo.db.charts
#     chart_data_by_timestamp = collection.find_one({'timestamp': timestamp})

#     # Konversi ObjectId menjadi string
#     if chart_data_by_timestamp and '_id' in chart_data_by_timestamp:
#         chart_data_by_timestamp['_id'] = str(chart_data_by_timestamp['_id'])

#     return chart_data_by_timestamp

def get_chart_by_timestamp(timestamp):
    collection = mongo.db.charts
    chart_data_by_timestamp = collection.find_one({'timestamp': timestamp})

    # Ambil informasi perubahan ranking menggunakan fungsi get_ranking_difference
    day_before = (datetime.strptime(timestamp, "%Y-%m-%d") - timedelta(days=1)).strftime("%Y-%m-%d")
    chart_yesterday = collection.find_one({'timestamp': day_before})

    # Konversi ObjectId menjadi string
    if chart_data_by_timestamp and '_id' in chart_data_by_timestamp:
        chart_data_by_timestamp['_id'] = str(chart_data_by_timestamp['_id'])

    # Modifikasi chart_songs untuk tidak menyertakan audio_features
    if 'chart_songs' in chart_data_by_timestamp:
        for song_today in chart_data_by_timestamp['chart_songs']:
            song_id = song_today.get("id_song")
            ranking_today = int(song_today.get("ranking"))

            # Periksa apakah chart_yesterday tidak None sebelum mencoba mengakses chart_songs
            if chart_yesterday and 'chart_songs' in chart_yesterday:
                # Temukan chart kemarin dengan song_id yang sama
                song_yesterday = next((song for song in chart_yesterday['chart_songs'] if song.get("id_song") == song_id), None)

                if song_yesterday:
                    ranking_yesterday = int(song_yesterday.get("ranking"))
                    difference = ranking_yesterday - ranking_today
                else:
                    # Jika id_song tidak ditemukan pada chart kemarin, beri nilai "new"
                    difference = "new"
            else:
                # Jika chart_yesterday None, beri nilai "new"
                difference = "new"

            # Tambahkan informasi selisih ke dalam dictionary song_today
            song_today['ranking_difference'] = difference

            # Hapus audio_features jika ada
            if 'audio_features' in song_today:
                del song_today['audio_features']

    return chart_data_by_timestamp


def get_ranking_difference(day, yesterday):
    collection = mongo.db.charts

    # Ambil data chart untuk suatu harihb ip p
    chart_day = collection.find_one({'timestamp': day})
    chart_yesterday = collection.find_one({'timestamp': yesterday})

    # Jika data chart tidak ditemukan, kembalikan respons 404 Not Found
    if not chart_day or not chart_yesterday:
        return jsonify({"error": "Data not found"}), 404

    # Buat dictionary untuk menyimpan selisih ranking setiap song
    ranking_difference = {}

    # Iterasi setiap chart pada hari ini dan cari chart pada kemarin
    for song_today in chart_day.get("chart_songs", []):
        song_id = song_today.get("id_song")
        ranking_today = int(song_today.get("ranking"))

        # Temukan chart kemarin dengan song_id yang sama
        song_yesterday = next((song for song in chart_yesterday.get("chart_songs", []) if song.get("id_song") == song_id), None)

        if song_yesterday:
            ranking_yesterday = int(song_yesterday.get("ranking"))
            difference = ranking_yesterday - ranking_today
        else:
            # Jika id_song tidak ditemukan pada chart kemarin, beri nilai "new"
            difference = "new"

        ranking_difference[song_id] = difference

    return jsonify(ranking_difference), 200


### CREATE CHART KALO BUTUH ###
# def create_chart():
#     data = request.get_json()
#     collection = mongo.db.charts

#     # Membuat chart baru dengan data dari request
#     new_chart = {
#         'ranking': data['ranking'],
#         'artist': [{
#             'id': artist['id'],
#             'name': artist['name']
#         } for artist in data['artist']],
#         'id_song': data['id_song'],
#         'song_name': data['song_name'],
#         'image': data['image'],
#         'audio_features': {
#             'acousticness': data['audio_features']['acousticness'],
#             'danceability': data['audio_features']['danceability'],
#             'energy': data['audio_features']['energy'],
#             'instrumentalness': data['audio_features']['instrumentalness'],
#             'liveness': data['audio_features']['liveness'],
#             'loudness': data['audio_features']['loudness'],
#             'valence': data['audio_features']['valence']
#         }
#     }

#     # Menyimpan chart ke dalam basis data
#     result = collection.insert_one(new_chart)

#     # Mengembalikan ID chart yang baru dibuat
#     new_chart_id = str(result.inserted_id)

#     # Membaca chart yang baru dibuat dari basis data
#     created_chart = collection.find_one({'_id': ObjectId(new_chart_id)})

#     # Konversi ObjectId menjadi string
#     if created_chart and '_id' in created_chart:
#         created_chart['_id'] = str(created_chart['_id'])

#     return jsonify(created_chart), 201