const express = require('express');
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const bookListRoutes = require('./routes/bookListRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Usar rutas de libros: /api/books/:id
app.use('/api/books', bookRoutes);

// Usar ruta para la lista completa: /api/bookList
app.use('/api/bookList', bookListRoutes);

// Configurar motor de vistas (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas que renderizan vistas server-side
app.use('/', viewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
