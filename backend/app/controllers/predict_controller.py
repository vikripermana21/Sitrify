from app import app
from keras.models import load_model
import numpy as np
import os

script_directory = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(script_directory, 'best_model.h5')
model = load_model(model_path)

def predict_song(data):
    audio_features = [
        data["acousticness"],
        data["danceability"],
        data["speechiness"],
        data["energy"],
        data["instrumentalness"],
        data["liveness"],
        data["loudness"],
        data["valence"]
    ]
    # Mengubah data menjadi array numpy
    # audio_features = np.array([audio_features])

    # Melakukan prediksi
    prediction = model.predict(np.array([audio_features]))

    # Mengambil index prediksi dengan nilai tertinggi
    # prediction = np.argmax(prediction)

    print(prediction)

    # Mengembalikan hasil prediksi
    return prediction