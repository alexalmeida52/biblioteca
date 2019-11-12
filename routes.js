const express = require('express');
const BookController = require('./controllers/Book.controller');
const routes = express.Router();

routes.post('/book', BookController.store);
routes.get('/book', BookController.index);
routes.delete('/book/:id', BookController.delete);

module.exports = routes;