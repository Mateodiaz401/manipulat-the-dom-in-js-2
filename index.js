//** metodos para crear elementos
const titulo2 = document.createElement('h2');

const texto = document.createTextNode('Este es el titulo2');

//** crear comentarios desde js para el dom(casi no se usa)

const comentarios = document.createComment('hola este es la manipulacion del dom')

//** Metodo para clonar elemento
const articulo = document.querySelector('article');

console.log(articulo.cloneNode(true));

//**  formas de insertar elemntos dentro del dom
const articulo2 = articulo.cloneNode(true);

const section = document.getElementById('section')

//section.appendChild(articulo2)
//section.insertAdjacentElement('afterbegin', articulo2);
//section.insertAdjacentElement('afterend', articulo2);
//section.insertAdjacentElement('beforebegin', articulo2);
section.insertAdjacentElement('beforeend', articulo2)
//section.remove();
//**  reemplazar el contenido de un elemento
// esto reemplazara todo el contenido de la seccion por h2
//section.innerHTML = ('<h2>Hola mateo este es el h2</h2>')
//** Modificar las propiedades del dom insertado
const atributo = section.getAttribute('id')
console.log(atributo);


