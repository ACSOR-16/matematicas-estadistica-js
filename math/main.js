
//FUNCION PARA EL CALCULAR EL CUADRADO
function calcularCuacrado (ladoCuadrado) {
  return ({
    perimetroCuadrado: ladoCuadrado * 4,
    areaCuadrado: Math.pow(ladoCuadrado, 2),
  });
}

calcularCuacrado();

// FUNCION PARA CALCULAR EL TRIANGULO
function calcularTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3, base, altura)  {
  return({
    perimetroTriangulo: ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3,
    areaTriangulo: (base * altura) / 2.
  })
}

calcularTriangulo();

function calcularCirculo(radioCirculo){
  const diametroCirulo = radioCirculo * 2;
  return({
    circunferencia: diametroCirulo * Math.PI,
    areaCirculo: (Math.pow(radioCirculo, 2)) * Math.PI,
  })
}