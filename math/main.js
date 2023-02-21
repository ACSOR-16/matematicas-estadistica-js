
//FUNCION PARA EL CALCULAR EL CUADRADO
function calcularCuacrado () {
  return console.log({
    perimetroCuadrado: ladoCuadrado * 4,
    areaCuadrado: Math.pow(ladoCuadrado, 2),
  });
}

calcularCuacrado();

// FUNCION PARA CALCULAR EL TRIANGULO
function calcularTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3, base, altura)  {
  return console.log({
    perimetroTriangulo: ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3,
    areaTriangulo: (base * altura) / 2.
  })
}

calcularTriangulo();