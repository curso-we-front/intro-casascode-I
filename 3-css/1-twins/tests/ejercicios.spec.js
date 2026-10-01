describe('Layout 1 · Twins', () => {

  const blanco = 'rgb(255, 255, 255)'

  it('Ejercicio 1 · cada caja tiene su color de fondo', () => {
    expect(estiloDe('.header').backgroundColor).toBe('rgb(82, 167, 248)')
    expect(estiloDe('.main-content').backgroundColor).toBe('rgb(114, 192, 67)')
    expect(estiloDe('.sidebar').backgroundColor).toBe('rgb(180, 108, 227)')
    expect(estiloDe('.twin').backgroundColor).toBe('rgb(242, 144, 27)')
    expect(estiloDe('.footer').backgroundColor).toBe('rgb(4, 101, 193)')
  })
  it('Ejercicio 1 · el texto de todas las cajas es blanco', () => {
    ['.header', '.main-content', '.sidebar', '.twin', '.footer'].forEach((selector) => {
      expect(estiloDe(selector).color).toBe(blanco)
    })
  })

  it('Ejercicio 2 · .header ocupa todo el ancho y mide 80px de alto', () => {
    expect(caja('.header').width).toMedirCasi(caja('.contenedor').width)
    expect(caja('.header').height).toMedirCasi(80)
  })
  it('Ejercicio 2 · .footer ocupa todo el ancho y mide 80px de alto', () => {
    expect(caja('.footer').width).toMedirCasi(caja('.contenedor').width)
    expect(caja('.footer').height).toMedirCasi(80)
  })

  it('Ejercicio 3 · .centro mide el 60% del ancho del contenedor y esta centrado', () => {
    expect(caja('.centro').width).toMedirCasi(caja('.contenedor').width * 0.6)
    expect(centroHorizontal(caja('.centro'))).toMedirCasi(centroHorizontal(caja('.contenedor')))
  })

  it('Ejercicio 4 · .main-content y .sidebar estan en la misma fila y miden 220px de alto', () => {
    expect(caja('.sidebar').top).toMedirCasi(caja('.main-content').top)
    expect(caja('.main-content').height).toMedirCasi(220)
    expect(caja('.sidebar').height).toMedirCasi(220)
  })
  it('Ejercicio 4 · hay 4px entre ellos y ocupan todo el ancho de .centro', () => {
    expect(caja('.sidebar').left - caja('.main-content').right).toMedirCasi(4)
    expect(caja('.main-content').left).toMedirCasi(caja('.centro').left)
    expect(caja('.sidebar').right).toMedirCasi(caja('.centro').right)
  })
  it('Ejercicio 4 · .main-content es el doble de ancho que .sidebar', () => {
    expect(caja('.main-content').width).toMedirCasi(caja('.sidebar').width * 2)
  })

  it('Ejercicio 5 · los .twin estan en la misma fila, ocupando todo el ancho de .centro', () => {
    const [primerTwin, segundoTwin] = cajas('.twin')
    expect(segundoTwin.top).toMedirCasi(primerTwin.top)
    expect(segundoTwin.width).toMedirCasi(primerTwin.width)
    expect(primerTwin.height).toMedirCasi(160)
    expect(primerTwin.left).toMedirCasi(caja('.centro').left)
    expect(segundoTwin.right).toMedirCasi(caja('.centro').right)
  })
  it('Ejercicio 5 · hay 4px entre los .twin y 4px con la fila de arriba', () => {
    const [primerTwin, segundoTwin] = cajas('.twin')
    expect(segundoTwin.left - primerTwin.right).toMedirCasi(4)
    expect(primerTwin.top - caja('.main-content').bottom).toMedirCasi(4)
  })

})
