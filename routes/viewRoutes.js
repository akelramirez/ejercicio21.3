const express = require('express');
const router = express.Router();
const { renderBookList, renderBookDetail } = require('../controllers/bookController');

// Página server-side: lista de libros
router.get('/bookList', renderBookList);

// Página server-side: detalle de libro por id
router.get('/bookDetail/:id', renderBookDetail);

module.exports = router;
