const cron = require('node-cron');
const axios = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');
const connectDB = require('./config/db');

const spotifyApi = new SpotifyWebApi();

async function getTop50Global(){
    spotifyApi.getPlaylist('37i9dQZEVXbMDoHDwVN2tF', {
        offset: 1,
        limit: 100
    }).then(function (data) {
        const tracks = data.body.tracks.items;
        console.log(tracks);
    }, function (err) {
        console.log('Something went wrong!', err);
    });
}

async function getArtistInfo(artistId){
    spotifyApi.getArtist(artistId)
    .then(function(data) {
        console.log('Artist information', data.body);
    }, function(err) {
        console.error(err);
    });
}

async function setupScheduler(){
    cron.schedule('0 7 * * *', async () => {
        console.log('Running cron job');
        await getTop50Global();
    });
}

setupScheduler();