describe('Layout 2 · Item', () => {

  const bloques = ['.header', '.main', '.sidebar', '.item', '.footer']

  it('Ejercicio 6 · cada bloque tiene su color de fondo', () => {
    expect(estiloDe('.header').backgroundColor).toBe('rgb(42, 148, 252)')
    expect(estiloDe('.main').backgroundColor).toBe('rgb(67, 177, 113)')
    expect(estiloDe('.sidebar').backgroundColor).toBe('rgb(254, 100, 80)')
    expect(estiloDe('.item').backgroundColor).toBe('rgb(51, 136, 90)')
    expect(estiloDe('.footer').backgroundColor).toBe('rgb(68, 111, 219)')
  })
  it('Ejercicio 6 · los bloques tienen esquinas de 10px y texto blanco', () => {
    bloques.forEach((selector) => {
      expect(estiloDe(selector).borderTopLeftRadius).toBe('10px')
      expect(estiloDe(selector).color).toBe('rgb(255, 255, 255)')
    })
  })

  it('Ejercicio 7 · .pagina tiene 30px de espacio interior', () => {
    expect(caja('.header').top - caja('.pagina').top).toMedirCasi(30)
    expect(caja('.header').left - caja('.pagina').left).toMedirCasi(30)
    expect(caja('.pagina').right - caja('.header').right).toMedirCasi(30)
    expect(caja('.pagina').bottom - caja('.footer').bottom).toMedirCasi(30)
  })
  it('Ejercicio 7 · .header, .cuerpo y .footer estan separados 30px', () => {
    expect(caja('.cuerpo').top - caja('.header').bottom).toMedirCasi(30)
    expect(caja('.footer').top - caja('.cuerpo').bottom).toMedirCasi(30)
  })
  it('Ejercicio 7 · .header, .main, .sidebar y .footer tienen 30px de espacio interior', () => {
    ['.header', '.main', '.sidebar', '.footer'].forEach((selector) => {
      const estilo = estiloDe(selector)
      expect([estilo.paddingTop, estilo.paddingRight, estilo.paddingBottom, estilo.paddingLeft])
        .toEqual(['30px', '30px', '30px', '30px'])
    })
  })

  it('Ejercicio 8 · .main y .sidebar estan en la misma fila, miden lo mismo de alto y ocupan todo el ancho de .cuerpo', () => {
    expect(caja('.sidebar').top).toMedirCasi(caja('.main').top)
    expect(caja('.sidebar').height).toMedirCasi(caja('.main').height)
    expect(caja('.main').left).toMedirCasi(caja('.cuerpo').left)
    expect(caja('.sidebar').right).toMedirCasi(caja('.cuerpo').right)
  })
  it('Ejercicio 8 · .sidebar mide 240px de ancho y esta a 30px de .main', () => {
    expect(caja('.sidebar').width).toMedirCasi(240)
    expect(caja('.sidebar').left - caja('.main').right).toMedirCasi(30)
  })

  it('Ejercicio 9 · los 4 primeros .item estan en la misma fila', () => {
    const items = cajas('.item')
    items.slice(1, 4).forEach((item) => {
      expect(item.top).toMedirCasi(items[0].top)
    })
  })
  it('Ejercicio 9 · el quinto .item empieza una fila nueva', () => {
    const items = cajas('.item')
    expect(items[4].left).toMedirCasi(items[0].left)
    expect(items[4].top - items[0].bottom).toMedirCasi(30)
  })
  it('Ejercicio 9 · hay 30px entre columnas y las 4 columnas ocupan todo el ancho de .items', () => {
    const items = cajas('.item')
    expect(items[1].left - items[0].right).toMedirCasi(30)
    expect(items[1].width).toMedirCasi(items[0].width)
    expect(items[0].left).toMedirCasi(caja('.items').left)
    expect(items[3].right).toMedirCasi(caja('.items').right)
  })

  it('Ejercicio 10 · cada .item mide 120px de alto', () => {
    cajas('.item').forEach((item) => {
      expect(item.height).toMedirCasi(120)
    })
  })
  it('Ejercicio 10 · el texto de cada .item esta centrado en horizontal y en vertical', () => {
    const item = caja('.item')
    const texto = cajaDelTexto('.item')
    expect(centroHorizontal(texto)).toMedirCasi(centroHorizontal(item))
    expect(centroVertical(texto)).toMedirCasi(centroVertical(item))
  })

})
