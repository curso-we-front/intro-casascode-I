describe('Funciones', () => {

  it('sumar: suma dos numeros', () => {
    expect(sumar(2, 3)).toBe(5)
  })
  it('sumar: funciona con negativos', () => {
    expect(sumar(-4, 10)).toBe(6)
  })

  it('saludar: devuelve "Hola" seguido del nombre', () => {
    expect(saludar('Laura')).toBe('Hola Laura')
  })
  it('saludar: funciona con otro nombre', () => {
    expect(saludar('Mario')).toBe('Hola Mario')
  })

})

describe('Condiciones', () => {

  it('esPar: devuelve true si el numero es par', () => {
    expect(esPar(8)).toBe(true)
  })
  it('esPar: devuelve false si el numero es impar', () => {
    expect(esPar(7)).toBe(false)
  })

  it('elMayor: devuelve el primero si es mayor', () => {
    expect(elMayor(10, 3)).toBe(10)
  })
  it('elMayor: devuelve el segundo si es mayor', () => {
    expect(elMayor(2, 9)).toBe(9)
  })

  it('esMayorDeEdad: devuelve true con 18 justos', () => {
    expect(esMayorDeEdad(18)).toBe(true)
  })
  it('esMayorDeEdad: devuelve false si es menor de 18', () => {
    expect(esMayorDeEdad(15)).toBe(false)
  })

  it('ultimaLetra: devuelve el ultimo caracter', () => {
    expect(ultimaLetra('javascript')).toBe('t')
  })
  it('ultimaLetra: funciona con una sola letra', () => {
    expect(ultimaLetra('a')).toBe('a')
  })

})

describe('Arrays y bucles', () => {

  it('primerElemento: devuelve el primer elemento', () => {
    expect(primerElemento([7, 8, 9])).toBe(7)
  })
  it('primerElemento: funciona con strings', () => {
    expect(primerElemento(['Perro', 'Gato'])).toBe('Perro')
  })

  it('contarHasta: devuelve los numeros del 1 al n', () => {
    expect(contarHasta(5)).toEqual([1, 2, 3, 4, 5])
  })
  it('contarHasta: con 1 devuelve [1]', () => {
    expect(contarHasta(1)).toEqual([1])
  })

  it('sumarArray: suma todos los numeros', () => {
    expect(sumarArray([1, 2, 3, 4])).toBe(10)
  })
  it('sumarArray: un array vacio suma 0', () => {
    expect(sumarArray([])).toBe(0)
  })

  it('contarPares: cuenta los numeros pares', () => {
    expect(contarPares([1, 2, 3, 4, 6])).toBe(3)
  })
  it('contarPares: si no hay pares devuelve 0', () => {
    expect(contarPares([1, 3, 5])).toBe(0)
  })

})

describe('Objetos', () => {

  it('obtenerNombre: devuelve el nombre de la persona', () => {
    expect(obtenerNombre({ nombre: 'Ana', edad: 30 })).toBe('Ana')
  })
  it('obtenerNombre: funciona con otra persona', () => {
    expect(obtenerNombre({ nombre: 'Luis', edad: 22 })).toBe('Luis')
  })

  it('crearProducto: devuelve un objeto con nombre y precio', () => {
    expect(crearProducto('Camiseta', 15)).toEqual({ nombre: 'Camiseta', precio: 15 })
  })
  it('crearProducto: funciona con otros valores', () => {
    expect(crearProducto('Gorra', 9)).toEqual({ nombre: 'Gorra', precio: 9 })
  })

})

describe('Retos finales', () => {

  it('palabraMasLarga: devuelve la palabra con mas letras', () => {
    expect(palabraMasLarga(['sol', 'montaña', 'rio'])).toBe('montaña')
  })
  it('palabraMasLarga: si hay empate devuelve la primera', () => {
    expect(palabraMasLarga(['casa', 'mesa', 'pan'])).toBe('casa')
  })

  it('totalCarrito: suma precio por cantidad de cada producto', () => {
    expect(totalCarrito([
      { nombre: 'Pan', precio: 2, cantidad: 3 },
      { nombre: 'Leche', precio: 1, cantidad: 4 }
    ])).toBe(10)
  })
  it('totalCarrito: un carrito vacio cuesta 0', () => {
    expect(totalCarrito([])).toBe(0)
  })

  it('nombresDeMayores: devuelve los nombres de los mayores de edad', () => {
    expect(nombresDeMayores([
      { nombre: 'Ana', edad: 30 },
      { nombre: 'Leo', edad: 12 },
      { nombre: 'Eva', edad: 18 }
    ])).toEqual(['Ana', 'Eva'])
  })
  it('nombresDeMayores: si nadie es mayor devuelve un array vacio', () => {
    expect(nombresDeMayores([{ nombre: 'Leo', edad: 12 }])).toEqual([])
  })

})
