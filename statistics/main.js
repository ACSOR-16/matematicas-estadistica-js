// CALCULO DE MEDIA ARITMETICA
function mediaAritmetica(array) {
  let totalArray = 0;
  for (let index = 0; index < array.length; index++) {
    totalArray = totalArray + array[index];
  
  }
  const calcularMediaAritmetica = totalArray / array.length;
  return calcularMediaAritmetica;
}

mediaAritmetica([1, 2, 3, 4, 5, 6]);

function mediaAritmeticaReduce(array) {
  initialValue = 0;
  
  const sumWithInitialValue = array.reduce( (acucumulator, currentValue) => acucumulator + currentValue, initialValue);
  
  const promedio = sumWithInitialValue / array.length;
  return promedio;
}

// CALCULO DE MEDIANA 
function esPar(array) {
  return !(array.length % 2);
}

function esImpar(array) {
  return array.length % 2;
}

function calcularMediana(array) {
  const arrayEsPar = esPar(array) // solo validadcion
  
  if (arrayEsPar) {
    let arrayMitadades = []
    const elementoPrimero = array[array.length / 2];
    const elementoSegundo = array[array.length / 2 - 1];
    
    arrayMitadades.push(elementoPrimero);
    arrayMitadades.push(elementoSegundo);
    
    const calcularMedianaArrayPar = mediaAritmeticaReduce(arrayMitadades);
    return calcularMedianaArrayPar;
  } else {
    const indexMitadListaImpar = Math.floor(array.length / 2);
    const medianaListaImpar = array[indexMitadListaImpar];
    
    return medianaListaImpar;
  }
}

calcularMediana([1,2,3,4]);