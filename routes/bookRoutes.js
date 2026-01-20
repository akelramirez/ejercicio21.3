const express = require('express');
const router = express.Router();
const { getBookById } = require('../controllers/bookController');

// Ruta: GET /api/books/:id
router.get('/:id', getBookById);

module.exports = router;
