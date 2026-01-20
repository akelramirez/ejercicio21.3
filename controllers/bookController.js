const { readData } = require('../models/bookModel');

// Controlador que devuelve el libro por id
exports.getBookById = (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const book = data.books.find((book) => book.id === id);
  res.json(book);
};

// Controlador que devuelve todos los libros
exports.getAllBooks = (req, res) => {
  const data = readData();
  res.json(data.books);
};

// Renderizar lista de libros server-side (EJS)
exports.renderBookList = (req, res) => {
  const data = readData();
  res.render('bookList', { books: data.books });
};

// Renderizar detalle de libro server-side (EJS)
exports.renderBookDetail = (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const book = data.books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).render('notFound', { id });
  }
  res.render('bookDetail', { book });
};
