const MARGEN_EN_PIXELES = 2

function caja(selector) {
  return document.querySelector(selector).getBoundingClientRect()
}

function cajas(selector) {
  return Array.from(document.querySelectorAll(selector)).map((elemento) => elemento.getBoundingClientRect())
}

function estiloDe(selector) {
  return getComputedStyle(document.querySelector(selector))
}

function cajaDelTexto(selector) {
  const rango = document.createRange()
  rango.selectNodeContents(document.querySelector(selector))
  return rango.getBoundingClientRect()
}

function centroHorizontal(rectangulo) {
  return rectangulo.left + rectangulo.width / 2
}

function centroVertical(rectangulo) {
  return rectangulo.top + rectangulo.height / 2
}

beforeEach(() => {
  jasmine.addMatchers({
    toMedirCasi: () => ({
      compare: (medida, esperado) => {
        const pass = Math.abs(medida - esperado) <= MARGEN_EN_PIXELES
        return {
          pass,
          message: `Se esperaban ${Math.round(esperado)}px y mide ${Math.round(medida)}px`,
        }
      },
    }),
  })
})
