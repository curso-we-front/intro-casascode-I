describe('Arrays de numeros y strings', () => {

  it('duplicarNumeros: multiplica cada numero por 2', () => {
    expect(duplicarNumeros([1, 2, 3])).toEqual([2, 4, 6])
  })
  it('duplicarNumeros: un array vacio devuelve un array vacio', () => {
    expect(duplicarNumeros([])).toEqual([])
  })

  it('soloPositivos: se queda solo con los mayores que 0', () => {
    expect(soloPositivos([3, -1, 0, 5, -8])).toEqual([3, 5])
  })
  it('soloPositivos: si no hay positivos devuelve un array vacio', () => {
    expect(soloPositivos([-2, 0])).toEqual([])
  })

  it('sumarTodos: suma todos los numeros', () => {
    expect(sumarTodos([5, 10, 15])).toBe(30)
  })
  it('sumarTodos: un array vacio suma 0', () => {
    expect(sumarTodos([])).toBe(0)
  })

  it('hayNegativos: devuelve true si hay algun negativo', () => {
    expect(hayNegativos([4, -2, 7])).toBe(true)
  })
  it('hayNegativos: devuelve false si no hay ninguno', () => {
    expect(hayNegativos([0, 3, 9])).toBe(false)
  })

  it('todosAprobados: devuelve true si todas las notas son 5 o mas', () => {
    expect(todosAprobados([5, 7, 10])).toBe(true)
  })
  it('todosAprobados: devuelve false si alguna nota es menor que 5', () => {
    expect(todosAprobados([6, 4.9, 8])).toBe(false)
  })

  it('nombresEnMayusculas: pasa cada nombre a mayusculas', () => {
    expect(nombresEnMayusculas(['ana', 'Luis'])).toEqual(['ANA', 'LUIS'])
  })

})

describe('Arrays de objetos', () => {

  const usuarios = [
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Luis', edad: 25 }
  ]

  it('buscarUsuario: devuelve el usuario con ese nombre', () => {
    expect(buscarUsuario(usuarios, 'Luis')).toEqual({ nombre: 'Luis', edad: 25 })
  })
  it('buscarUsuario: devuelve undefined si no existe', () => {
    expect(buscarUsuario(usuarios, 'Marta')).toBeUndefined()
  })

  const productos = [
    { nombre: 'Lapiz', precio: 1 },
    { nombre: 'Libreta', precio: 4 },
    { nombre: 'Mochila', precio: 30 }
  ]

  it('productosBaratos: devuelve los productos por debajo del limite', () => {
    expect(productosBaratos(productos, 5)).toEqual([
      { nombre: 'Lapiz', precio: 1 },
      { nombre: 'Libreta', precio: 4 }
    ])
  })
  it('productosBaratos: no incluye los que cuestan justo el limite', () => {
    expect(productosBaratos(productos, 4)).toEqual([{ nombre: 'Lapiz', precio: 1 }])
  })

  it('precioTotal: suma los precios de todos los productos', () => {
    expect(precioTotal(productos)).toBe(35)
  })

  it('ordenarDeMenorAMayor: ordena los numeros de menor a mayor', () => {
    expect(ordenarDeMenorAMayor([10, 2, 33, 4])).toEqual([2, 4, 10, 33])
  })
  it('ordenarDeMenorAMayor: no modifica el array original', () => {
    const numeros = [3, 1, 2]
    ordenarDeMenorAMayor(numeros)
    expect(numeros).toEqual([3, 1, 2])
  })

  it('nombresDeActivos: devuelve los nombres de los usuarios activos', () => {
    expect(nombresDeActivos([
      { nombre: 'Ana', activo: true },
      { nombre: 'Leo', activo: false },
      { nombre: 'Eva', activo: true }
    ])).toEqual(['Ana', 'Eva'])
  })

})

describe('Retos finales', () => {

  it('aplicarDescuento: rebaja el precio de cada producto', () => {
    expect(aplicarDescuento([
      { nombre: 'Camiseta', precio: 20 },
      { nombre: 'Gorra', precio: 10 }
    ], 50)).toEqual([
      { nombre: 'Camiseta', precio: 10 },
      { nombre: 'Gorra', precio: 5 }
    ])
  })
  it('aplicarDescuento: no modifica los productos originales', () => {
    const productosOriginales = [{ nombre: 'Taza', precio: 8 }]
    aplicarDescuento(productosOriginales, 25)
    expect(productosOriginales).toEqual([{ nombre: 'Taza', precio: 8 }])
  })

  it('mediaDeEdades: calcula la media de las edades', () => {
    expect(mediaDeEdades([{ edad: 20 }, { edad: 30 }, { edad: 40 }])).toBe(30)
  })

  it('alumnoConMejorNota: devuelve el alumno con la nota mas alta', () => {
    expect(alumnoConMejorNota([
      { nombre: 'Ana', nota: 7 },
      { nombre: 'Leo', nota: 9 },
      { nombre: 'Eva', nota: 8 }
    ])).toEqual({ nombre: 'Leo', nota: 9 })
  })
  it('alumnoConMejorNota: si hay empate devuelve el primero', () => {
    expect(alumnoConMejorNota([
      { nombre: 'Ana', nota: 9 },
      { nombre: 'Leo', nota: 9 }
    ])).toEqual({ nombre: 'Ana', nota: 9 })
  })

  it('contarPorCategoria: cuenta cuantos productos hay de cada categoria', () => {
    expect(contarPorCategoria([
      { nombre: 'Manzana', categoria: 'fruta' },
      { nombre: 'Lechuga', categoria: 'verdura' },
      { nombre: 'Pera', categoria: 'fruta' }
    ])).toEqual({ fruta: 2, verdura: 1 })
  })

})
