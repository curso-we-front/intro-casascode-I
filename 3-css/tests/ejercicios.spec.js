function estiloDe(selector) {
  return getComputedStyle(document.querySelector(selector))
}

describe('Texto', () => {

  it('Ejercicio 1 · .titulo tiene el color #e74c3c', () => {
    expect(estiloDe('.titulo').color).toBe('rgb(231, 76, 60)')
  })

  it('Ejercicio 2 · .subtitulo tiene un tamaño de letra de 28px', () => {
    expect(estiloDe('.subtitulo').fontSize).toBe('28px')
  })

  it('Ejercicio 3 · .destacado esta en negrita', () => {
    expect(Number(estiloDe('.destacado').fontWeight)).toBeGreaterThanOrEqual(700)
  })

  it('Ejercicio 8 · .centrado tiene el texto centrado', () => {
    expect(estiloDe('.centrado').textAlign).toBe('center')
  })

})

describe('Cajas', () => {

  it('Ejercicio 4 · .caja tiene el fondo #f1c40f', () => {
    expect(estiloDe('.caja').backgroundColor).toBe('rgb(241, 196, 15)')
  })

  it('Ejercicio 5 · .tarjeta tiene 16px de padding por los cuatro lados', () => {
    const estilo = estiloDe('.tarjeta')
    expect([estilo.paddingTop, estilo.paddingRight, estilo.paddingBottom, estilo.paddingLeft])
      .toEqual(['16px', '16px', '16px', '16px'])
  })

  it('Ejercicio 6 · .boton tiene las esquinas redondeadas con 8px', () => {
    expect(estiloDe('.boton').borderTopLeftRadius).toBe('8px')
    expect(estiloDe('.boton').borderBottomRightRadius).toBe('8px')
  })

  it('Ejercicio 7 · .oculto no se muestra', () => {
    expect(estiloDe('.oculto').display).toBe('none')
  })

})

describe('Flexbox y grid', () => {

  it('Ejercicio 9 · .fila usa flexbox', () => {
    expect(estiloDe('.fila').display).toBe('flex')
  })

  it('Ejercicio 10 · .fila-espaciada usa flexbox y reparte el espacio entre los hijos', () => {
    expect(estiloDe('.fila-espaciada').display).toBe('flex')
    expect(estiloDe('.fila-espaciada').justifyContent).toBe('space-between')
  })

  it('Ejercicio 11 · .columna usa flexbox en columna', () => {
    expect(estiloDe('.columna').display).toBe('flex')
    expect(estiloDe('.columna').flexDirection).toBe('column')
  })

  it('Ejercicio 12 · .centrar-todo centra en horizontal y en vertical', () => {
    const estilo = estiloDe('.centrar-todo')
    expect(estilo.display).toBe('flex')
    expect(estilo.justifyContent).toBe('center')
    expect(estilo.alignItems).toBe('center')
  })

  it('Ejercicio 13 · .rejilla es un grid de 3 columnas del mismo ancho', () => {
    const estilo = estiloDe('.rejilla')
    const columnas = estilo.gridTemplateColumns.split(' ').map((columna) => parseFloat(columna))
    expect(estilo.display).toBe('grid')
    expect(columnas.length).toBe(3)
    expect(Math.max(...columnas) - Math.min(...columnas)).toBeLessThan(1)
  })

})

describe('Retos finales', () => {

  it('Ejercicio 14 · .imagen-redonda mide 100px x 100px', () => {
    expect(estiloDe('.imagen-redonda').width).toBe('100px')
    expect(estiloDe('.imagen-redonda').height).toBe('100px')
  })
  it('Ejercicio 14 · .imagen-redonda es un circulo', () => {
    expect(estiloDe('.imagen-redonda').borderTopLeftRadius).toBe('50%')
  })

  it('Ejercicio 15 · .boton-primario tiene fondo #3498db y texto blanco', () => {
    expect(estiloDe('.boton-primario').backgroundColor).toBe('rgb(52, 152, 219)')
    expect(estiloDe('.boton-primario').color).toBe('rgb(255, 255, 255)')
  })
  it('Ejercicio 15 · .boton-primario tiene padding 10px 20px y no tiene borde', () => {
    const estilo = estiloDe('.boton-primario')
    expect([estilo.paddingTop, estilo.paddingRight, estilo.paddingBottom, estilo.paddingLeft])
      .toEqual(['10px', '20px', '10px', '20px'])
    expect(estilo.borderTopStyle).toBe('none')
  })

})
