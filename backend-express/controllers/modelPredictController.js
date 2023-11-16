const tf = require('@tensorflow/tfjs-node');

const loadModel = async (req, res) => {
  const model = await tf.loadLayersModel('best_model.h5');
  return model;
}

const loadModelAndPredict = async (req, res) => {
  try {
    // Memuat model
    const model = await tf.loadLayersModel('best_model.h5');
    
    // Data yang ingin Anda gunakan untuk prediksi (disesuaikan dengan format data yang dibutuhkan oleh model)
    const data = {
        "acousticness": 0.311,
        "danceability": 0.802,
        "energy": 0.832,
        "instrumentalness": 0,
        "liveness": 0.0815,
        "loudness": -4.107,
        "valence": 0.89
    };
    
    const inputTensor = tf.tensor2d([[data.acousticness, data.danceability, data.energy, data.instrumentalness, data.liveness, data.loudness, data.valence]]);


    // Melakukan prediksi menggunakan model
    const prediction = model.predict(inputTensor);
    
    // Menampilkan output prediksi di console
    prediction.print(); // Jika menggunakan TensorFlow.js, ini akan mencetak hasil prediksi ke konsol

  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = {
  loadModel,
  loadModelAndPredict
};