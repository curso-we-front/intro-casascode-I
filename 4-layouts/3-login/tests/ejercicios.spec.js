describe('Layout 3 · Login', () => {

  it('Ejercicio 11 · .pagina mide 600px de alto', () => {
    expect(caja('.pagina').height).toMedirCasi(600)
  })
  it('Ejercicio 11 · .pagina tiene la imagen de fondo cubriendo toda la caja', () => {
    expect(estiloDe('.pagina').backgroundImage).toContain('background.jpeg')
    expect(estiloDe('.pagina').backgroundSize).toBe('cover')
  })

  it('Ejercicio 12 · .menu esta arriba a la derecha, a 20px de los bordes', () => {
    expect(caja('.menu').top - caja('.pagina').top).toMedirCasi(20)
    expect(caja('.pagina').right - caja('.menu').right).toMedirCasi(20)
  })
  it('Ejercicio 12 · los enlaces del menu van en fila separados 12px', () => {
    const enlaces = cajas('.menu a')
    expect(centroVertical(enlaces[1])).toMedirCasi(centroVertical(enlaces[0]))
    expect(enlaces[1].left - enlaces[0].right).toMedirCasi(12)
    expect(enlaces[2].left - enlaces[1].right).toMedirCasi(12)
  })
  it('Ejercicio 12 · los enlaces son blancos y sin subrayado', () => {
    expect(estiloDe('.menu a').color).toBe('rgb(255, 255, 255)')
    expect(estiloDe('.menu a').textDecorationLine).toBe('none')
  })
  it('Ejercicio 12 · .menu-avatar es un circulo de 40px', () => {
    expect(caja('.menu-avatar').width).toMedirCasi(40)
    expect(caja('.menu-avatar').height).toMedirCasi(40)
    expect(estiloDe('.menu-avatar').borderTopLeftRadius).toBe('50%')
  })

  it('Ejercicio 13 · .tarjeta mide 360px x 460px', () => {
    expect(caja('.tarjeta').width).toMedirCasi(360)
    expect(caja('.tarjeta').height).toMedirCasi(460)
  })
  it('Ejercicio 13 · .tarjeta esta centrada y a 80px del borde de arriba', () => {
    expect(centroHorizontal(caja('.tarjeta'))).toMedirCasi(centroHorizontal(caja('.pagina')))
    expect(caja('.tarjeta').top - caja('.pagina').top).toMedirCasi(80)
  })
  it('Ejercicio 13 · .tarjeta tiene fondo negro semitransparente y esquinas de 6px', () => {
    expect(estiloDe('.tarjeta').backgroundColor).toMatch(/^rgba\(0, 0, 0, 0?\.\d+\)$/)
    expect(estiloDe('.tarjeta').borderTopLeftRadius).toBe('6px')
  })

  it('Ejercicio 14 · .avatar es un circulo de 160px', () => {
    expect(caja('.avatar').width).toMedirCasi(160)
    expect(caja('.avatar').height).toMedirCasi(160)
    expect(estiloDe('.avatar').borderTopLeftRadius).toBe('50%')
  })
  it('Ejercicio 14 · .avatar esta centrado en la tarjeta y sobresale por arriba', () => {
    expect(centroHorizontal(caja('.avatar'))).toMedirCasi(centroHorizontal(caja('.tarjeta')))
    expect(centroVertical(caja('.avatar'))).toMedirCasi(caja('.tarjeta').top)
  })

  it('Ejercicio 15 · .titulo es blanco y esta centrado', () => {
    expect(estiloDe('.titulo').color).toBe('rgb(255, 255, 255)')
    expect(estiloDe('.titulo').textAlign).toBe('center')
  })
  it('Ejercicio 15 · cada .campo deja 35px a cada lado de la tarjeta', () => {
    cajas('.campo').forEach((campo) => {
      expect(campo.left - caja('.tarjeta').left).toMedirCasi(35)
      expect(caja('.tarjeta').right - campo.right).toMedirCasi(35)
    })
  })
  it('Ejercicio 15 · los .campo tienen el texto centrado, esquinas de 4px y 12px entre ellos', () => {
    const [primerCampo, segundoCampo] = cajas('.campo')
    expect(estiloDe('.campo').textAlign).toBe('center')
    expect(estiloDe('.campo').borderTopLeftRadius).toBe('4px')
    expect(segundoCampo.top - primerCampo.bottom).toMedirCasi(12)
  })

})
