// En este bloque cada funcion trabaja con elementos de la pagina.
// Los tests crean esos elementos por ti (con el id o la clase que indica cada enunciado),
// llaman a tu funcion y comprueban que la pagina ha cambiado como se pide.
// Busca siempre los elementos dentro de la funcion con document.querySelector o document.querySelectorAll.


// Ejercicio 1
// Crea una funcion pintarNombre que reciba un nombre (string)
// y lo escriba como texto dentro del elemento con id "nombre"


// Ejercicio 2
// Crea una funcion leerTitulo que no reciba nada
// y devuelva un string con el texto que hay dentro del elemento con id "titulo"


// Ejercicio 3
// Crea una funcion cambiarFondo que reciba un color (string)
// y lo ponga como color de fondo del elemento con id "caja"


// Ejercicio 4
// Crea una funcion activarMenu que no reciba nada
// y añada la clase "activo" al elemento con id "menu" (sin quitarle las clases que ya tenga)


// Ejercicio 5
// Crea una funcion mostrarMensaje que no reciba nada
// y quite la clase "oculto" del elemento con id "mensaje"


// Ejercicio 6
// Crea una funcion alternarModoOscuro que no reciba nada
// y, cada vez que se llame, ponga la clase "oscuro" al elemento con id "pagina" si no la tiene,
// o se la quite si ya la tiene


// Ejercicio 7
// Crea una funcion contarItems que no reciba nada
// y devuelva un numero: cuantos elementos con la clase "item" hay en la pagina


// Ejercicio 8
// Crea una funcion leerEmail que no reciba nada
// y devuelva un string con lo que hay escrito en el input con id "email"


// Ejercicio 9
// Crea una funcion anadirParrafo que reciba un texto (string),
// cree un elemento <p> con ese texto y lo añada al final del elemento con id "contenedor"
// (sin borrar lo que ya hubiera dentro)


// Ejercicio 10
// Crea una funcion vaciarContenedor que no reciba nada
// y deje el elemento con id "contenedor" sin ningun contenido dentro


// Ejercicio 11
// Crea una funcion pintarLista que reciba un array de textos (strings)
// y, por cada texto, cree un <li> con ese texto y lo añada a la lista con id "lista", en el mismo orden


// Ejercicio 12
// Crea una funcion pintarProductos que reciba un array de productos
// (objetos con las keys nombre, string, y precio, numero)
// y, por cada producto, añada a la lista con id "productos" un <li> cuyo texto sea
// el nombre, un espacio, un guion, un espacio, el precio y el simbolo €  →  nombre - precio€


// Ejercicio 13
// Crea una funcion activarContador que no reciba nada
// y haga que, cada vez que se pulse el boton con id "sumar",
// el numero que hay como texto en el elemento con id "contador" aumente en 1


// Ejercicio 14
// Crea una funcion activarVistaPrevia que no reciba nada
// y haga que, cada vez que se escriba en el input con id "campo" (evento input),
// el elemento con id "vista-previa" muestre como texto lo que hay escrito en el input


// Ejercicio 15
// Crea una funcion activarFormulario que no reciba nada
// y haga que, al enviar el formulario con id "formulario" (evento submit):
// - la pagina no se recargue
// - si el input con id "usuario" esta vacio, el elemento con id "error" muestre el texto: El usuario es obligatorio
// - si el input con id "usuario" tiene algo escrito, el elemento con id "error" se quede sin texto
