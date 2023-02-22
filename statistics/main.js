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
  const arrayEsPar = esImpar(array)
  
  if (arrayEsPar) {
      
  } else {
    const indexMitadListaImpar = Math.floor(array.length / 2);
    const medianaListaImpar = array[indexMitadListaImpar];
    
    return medianaListaImpar;
  }
}