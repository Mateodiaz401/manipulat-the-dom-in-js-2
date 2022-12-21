//** metodos para crear elementos
const titulo2 = document.createElement('h2');

const texto = document.createTextNode('Este es el titulo2');

//** crear comentarios desde js para el dom(casi no se usa)

const comentarios = document.createComment('hola este es la manipulacion del dom')

//** Metodo para clonar elemento
const articulo = document.querySelector('article');

console.log(articulo.cloneNode(true));

