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