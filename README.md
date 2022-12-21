# _Manipulando el dom en javascript_

## Crear elementos o nodos en js

### Crear un elemento con:

```sh
createElement
```

-   ✨ejemplo✨

```sh
const titulo2 = document.createElement('h2');
```

### Crear texto con:

```sh
createTextNode
```

-   ✨ejemplo✨

```sh

const texto = document.createTextNode('Este es el titulo2');
```

### Crear comentarios con:

-   casi no se usa por que se puede agregar directo en el codigo

```sh
createComment
```

-   ✨ejemplo✨

```sh

const texto = document.createComment('Este es el comentario para el dom');
```

### Metodo para clonar elemento

```sh
const articulo = document.querySelector('article');

console.log(articulo.cloneNode(true));
```

-   ✨Ejemplo cuando se le agrega true a cloneNode✨

```sh
<article class="borde-grey">
<h3>Titulo de la sección</h3>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, earum. Eius numquam corporis dignissimos iste ad cumque est, quidem ex modi obcaecati optio et officia molestiae vitae laboriosam consectetur mollitia!
</article>
```

-   👁️ Ojo 👁️

dentro del función cloneNode hay que agregar true para que clone a los hijos, si no se le agrega solo copiaral nodo padre en este caso arcticle

-   ✨ejemplo de salida cuando no se agrega true✨

```ssh
<articlle class="border-grey"> </article>
```
