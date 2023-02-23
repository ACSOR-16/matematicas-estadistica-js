// CALCULO DE MEDIA ARITMETICA
function mediaAritmetica(array) {
  let totalArray = 0;
  for (let index = 0; index < array.length; index++) {
    totalArray = totalArray + array[index];
  
  }
  const calcularMediaAritmetica = totalArray / array.length;
  return calcularMediaAritmetica;
}

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

function calcularMediana(arrayDesordenado) {
  const array = ordenarArray(arrayDesordenado);
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

// FUNCION PARA ORDENAR LISTA O ARRAY
function ordenarArray(arrayDesordenado) {
  const array = arrayDesordenado.sort((valorAComparar, valorComparado) => valorAComparar - valorComparado);
  return array;
}

// FUNCION PARA ORDENAR LISTASBIDIMENCIONALES
function ordenarArrayBidimensional(arrayDesordenado, i) {
  const array = arrayDesordenado.sort((valorAComparar, valorComparado) => valorAComparar[i] - valorComparado[i]);
  return array;
}

// CALCULAR MODA
function calcularModa(array) {
  const modaObj = {};

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (modaObj[element]) {
      modaObj[element] += 1;
    } else {
      modaObj[element] = 1;
    }
  }

  const arrayobj = Object.entries(modaObj);
  const arrayBidOrd = ordenarArrayBidimensional(arrayobj,1)
  const arrayNumMax = arrayBidOrd[arrayBidOrd.length - 1];
  const moda = arrayNumMax[0];
  return moda;
}