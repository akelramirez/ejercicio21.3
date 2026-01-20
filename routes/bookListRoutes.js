const express = require('express');
const router = express.Router();
const { getAllBooks } = require('../controllers/bookController');

// Ruta: GET /api/bookList
router.get('/', getAllBooks);

module.exports = router;
