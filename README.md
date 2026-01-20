# Books API (MVC) - Ejemplo simple

Proyecto minimalista que expone una API para buscar libros por id usando el patrón MVC y una UI sencilla.

Instrucciones rápidas:

1. Instala dependencias:

```bash
npm install
```

2. Ejecuta el servidor:

```bash
npm start
```

3. Abre en el navegador:

http://localhost:3000/

4. En Postman (o navegador) prueba:

GET http://localhost:3000/api/books/1

El endpoint GET /api/books/:id devuelve un objeto JSON con la información del libro (o null si no existe).

Nuevas rutas añadidas:

- GET http://localhost:3000/api/bookList  -> devuelve la lista completa de libros (JSON)
- GET http://localhost:3000/api/books/:id -> devuelve un libro por id (JSON)

Vistas públicas (archivos estáticos en `public`):

- http://localhost:3000/bookList.html    -> lista interactiva de libros (consumirá /api/bookList)
- http://localhost:3000/bookDetail.html?id=3 -> detalle de un libro (consumirá /api/books/:id)

Nota: si el servidor ya está corriendo, reinícialo para que cargue los nuevos cambios.

Renderizado server-side con Express + EJS (MVC)

Además de las vistas estáticas, ahora hay rutas que usan Express para renderizar las vistas con EJS (modelo-vista-controlador):

- http://localhost:3000/bookList  -> vista renderizada server-side (lista de libros)
- http://localhost:3000/bookDetail/:id -> vista renderizada server-side (detalle de libro), por ejemplo /bookDetail/3

Estas rutas usan los mismos datos del modelo (`models/bookModel.js`) y los controladores en `controllers/bookController.js`.
