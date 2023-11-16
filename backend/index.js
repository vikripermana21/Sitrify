// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(5000, () => {
//   console.log('Server is running on port 5000.');
// });

// app.js / index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const chartRoutes = require('./routes/chartRoutes');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();

connectDB(); // Inisialisasi koneksi database

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(chartRoutes);
app.use(artistRoutes);
app.use(songRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
