const express = require('express');
const multer = require('multer');
const likeController = require('./controllers/likeController');
const postController = require('./controllers/postController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);
routes.post('/posts', upload.single('image'), postController.store);
routes.get('/posts', postController.index);
routes.post('/posts/:id/like', likeController.store);
module.exports = routes;
