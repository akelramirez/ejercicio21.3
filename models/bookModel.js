function readData() {
  return {
    books: [
      { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', year: 1967 },
      { id: 2, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 },
      { id: 3, title: 'La sombra del viento', author: 'Carlos Ruiz Zafón', year: 2001 },
      { id: 4, title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez', year: 1985 },
      { id: 5, title: 'Ficciones', author: 'Jorge Luis Borges', year: 1944 },
      { id: 6, title: 'Rayuela', author: 'Julio Cortázar', year: 1963 },
      { id: 7, title: '1984', author: 'George Orwell', year: 1949 },
      { id: 8, title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez', year: 1981 },
      { id: 9, title: 'El túnel', author: 'Ernesto Sabato', year: 1948 },
      { id: 10, title: 'La casa de los espíritus', author: 'Isabel Allende', year: 1982 }
    ]
  };
}

module.exports = { readData };
