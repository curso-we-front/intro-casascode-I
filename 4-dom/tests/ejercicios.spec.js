let zonaDePruebas

function prepararHtml(html) {
  zonaDePruebas = document.createElement('div')
  zonaDePruebas.innerHTML = html
  document.body.appendChild(zonaDePruebas)
}

afterEach(() => {
  if (zonaDePruebas) {
    zonaDePruebas.remove()
    zonaDePruebas = null
  }
})

function elemento(selector) {
  return zonaDePruebas.querySelector(selector)
}

describe('Leer y escribir en la pagina', () => {

  it('pintarNombre: escribe el nombre dentro de #nombre', () => {
    prepararHtml('<p id="nombre">...</p>')
    pintarNombre('Laura')
    expect(elemento('#nombre').textContent).toBe('Laura')
  })

  it('leerTitulo: devuelve el texto de #titulo', () => {
    prepararHtml('<h1 id="titulo">Bienvenida al DOM</h1>')
    expect(leerTitulo()).toBe('Bienvenida al DOM')
  })

  it('cambiarFondo: pone el color de fondo de #caja', () => {
    prepararHtml('<div id="caja"></div>')
    cambiarFondo('red')
    expect(elemento('#caja').style.backgroundColor).toBe('red')
  })

  it('leerEmail: devuelve lo escrito en el input #email', () => {
    prepararHtml('<input id="email" />')
    elemento('#email').value = 'hola@casascode.com'
    expect(leerEmail()).toBe('hola@casascode.com')
  })

})

describe('Clases', () => {

  it('activarMenu: añade la clase activo a #menu', () => {
    prepararHtml('<nav id="menu" class="menu"></nav>')
    activarMenu()
    expect(elemento('#menu').classList.contains('activo')).toBe(true)
  })
  it('activarMenu: no borra las clases que ya tenia', () => {
    prepararHtml('<nav id="menu" class="menu"></nav>')
    activarMenu()
    expect(elemento('#menu').classList.contains('menu')).toBe(true)
  })

  it('mostrarMensaje: quita la clase oculto de #mensaje', () => {
    prepararHtml('<p id="mensaje" class="aviso oculto">Hola</p>')
    mostrarMensaje()
    expect(elemento('#mensaje').classList.contains('oculto')).toBe(false)
  })

  it('alternarModoOscuro: pone la clase oscuro si no la tiene', () => {
    prepararHtml('<main id="pagina"></main>')
    alternarModoOscuro()
    expect(elemento('#pagina').classList.contains('oscuro')).toBe(true)
  })
  it('alternarModoOscuro: la quita si ya la tiene', () => {
    prepararHtml('<main id="pagina" class="oscuro"></main>')
    alternarModoOscuro()
    expect(elemento('#pagina').classList.contains('oscuro')).toBe(false)
  })

  it('contarItems: cuenta los elementos con la clase item', () => {
    prepararHtml('<ul><li class="item">A</li><li class="item">B</li><li>C</li><li class="item">D</li></ul>')
    expect(contarItems()).toBe(3)
  })

})

describe('Crear y borrar elementos', () => {

  it('anadirParrafo: añade un <p> con el texto al final de #contenedor', () => {
    prepararHtml('<div id="contenedor"><span>Ya estaba</span></div>')
    anadirParrafo('Nuevo parrafo')
    const ultimoHijo = elemento('#contenedor').lastElementChild
    expect(ultimoHijo.tagName).toBe('P')
    expect(ultimoHijo.textContent).toBe('Nuevo parrafo')
  })
  it('anadirParrafo: no borra lo que ya habia', () => {
    prepararHtml('<div id="contenedor"><span>Ya estaba</span></div>')
    anadirParrafo('Nuevo parrafo')
    expect(elemento('#contenedor span').textContent).toBe('Ya estaba')
  })

  it('vaciarContenedor: deja #contenedor vacio', () => {
    prepararHtml('<div id="contenedor"><p>Uno</p><p>Dos</p></div>')
    vaciarContenedor()
    expect(elemento('#contenedor').children.length).toBe(0)
    expect(elemento('#contenedor').textContent).toBe('')
  })

  it('pintarLista: crea un <li> por cada texto, en orden', () => {
    prepararHtml('<ul id="lista"></ul>')
    pintarLista(['HTML', 'CSS', 'JavaScript'])
    const textos = Array.from(zonaDePruebas.querySelectorAll('#lista li')).map((item) => item.textContent)
    expect(textos).toEqual(['HTML', 'CSS', 'JavaScript'])
  })

  it('pintarProductos: crea un <li> "nombre - precio€" por cada producto', () => {
    prepararHtml('<ul id="productos"></ul>')
    pintarProductos([{ nombre: 'Pan', precio: 2 }, { nombre: 'Queso', precio: 6 }])
    const textos = Array.from(zonaDePruebas.querySelectorAll('#productos li')).map((item) => item.textContent)
    expect(textos).toEqual(['Pan - 2€', 'Queso - 6€'])
  })

})

describe('Eventos', () => {

  it('activarContador: cada click en #sumar aumenta #contador en 1', () => {
    prepararHtml('<span id="contador">0</span><button id="sumar">+</button>')
    activarContador()
    elemento('#sumar').click()
    elemento('#sumar').click()
    expect(elemento('#contador').textContent).toBe('2')
  })

  it('activarVistaPrevia: #vista-previa muestra lo escrito en #campo', () => {
    prepararHtml('<input id="campo" /><p id="vista-previa"></p>')
    activarVistaPrevia()
    elemento('#campo').value = 'Hola DOM'
    elemento('#campo').dispatchEvent(new Event('input'))
    expect(elemento('#vista-previa').textContent).toBe('Hola DOM')
  })

  function enviarFormulario() {
    const evento = new Event('submit', { cancelable: true })
    elemento('#formulario').dispatchEvent(evento)
    return evento
  }

  const formularioHtml = '<form id="formulario"><input id="usuario" /><button>Enviar</button></form><p id="error"></p>'

  it('activarFormulario: evita que la pagina se recargue', () => {
    prepararHtml(formularioHtml)
    activarFormulario()
    expect(enviarFormulario().defaultPrevented).toBe(true)
  })
  it('activarFormulario: muestra el error si el usuario esta vacio', () => {
    prepararHtml(formularioHtml)
    activarFormulario()
    enviarFormulario()
    expect(elemento('#error').textContent).toBe('El usuario es obligatorio')
  })
  it('activarFormulario: no muestra error si el usuario tiene texto', () => {
    prepararHtml(formularioHtml)
    activarFormulario()
    elemento('#usuario').value = 'laura'
    enviarFormulario()
    expect(elemento('#error').textContent).toBe('')
  })

})
