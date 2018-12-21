'use strict'

var express = require('express');
var SongController = require('../controllers/song');
var api = express.Router(); //Hacer todas las funciones GET, POST, PUT. 
var md_auth = require('../middlewares/authenticated'); 

var multipart = require ('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/songs' }); 

api.get('/song/:id',md_auth.ensureAuth, SongController.getSong);
api.put('/song/:id',md_auth.ensureAuth, SongController.updateSong);
api.get('/songs/:album?',md_auth.ensureAuth, SongController.getSongs);
api.post('/song',md_auth.ensureAuth, SongController.saveSong);
api.delete('/song/:id',md_auth.ensureAuth, SongController.deleteSong);
api.post('/upload-file-song/:id', [md_auth.ensureAuth, md_upload], SongController.uploadFile);
api.get('/get-song-file/:songFile',SongController.getSongFile);



module.exports = api; 