
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

function calcularTrianguloIsoseles (ladoIso, base) {
  if (ladoIso == base) {
    console.warn("Este no es un Triangulo Isoseles")
  } else {
    return({
      alturaIsoseles: Math.sqrt(Math.pow(ladoIso, 2)-(Math.pow(base,2) / 4)),
    })
  }  
}

function calcularTrianguloEscaleno(primerLado, segundoLado, tercerLado) {
  const semiPerimetro = (primerLado + segundoLado + tercerLado) / 2;
  const areaTriangulo = Math.sqrt(semiPerimetro * (semiPerimetro - primerLado) * (semiPerimetro - segundoLado) * (semiPerimetro - tercerLado));
  
  return({
    alturaPrimerLado: areaTriangulo * 2 - primerLado,
    alturaSegundLado: areaTriangulo * 2 - segundoLado,
    alturaTercerLado: areaTriangulo * 2 - tercerLado,
  })
}

function calcularCirculo(radioCirculo){
  const diametroCirulo = radioCirculo * 2;
  return({
    circunferencia: diametroCirulo * Math.PI,
    areaCirculo: (Math.pow(radioCirculo, 2)) * Math.PI,
  })
}