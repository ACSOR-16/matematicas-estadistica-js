const price =  document.querySelector(".price");
const discount =  document.querySelector(".discount");
const calculate = document.querySelector(".caculate");
const result = document.querySelector(".result");
const cupon = document.querySelector(".cupon");

calculate.addEventListener("click", calcularPrecioConDescuento);

let arrCupones = [];
arrCupones.push({
  name: "Batman",
  discount: 20,
})
arrCupones.push({
  name: "Verano hot",
  discount: 25,
});

// function calcularPrecioConDescuento() {
//   const priceToPay = Number(price.value);
//   const discountGenerate = Number(discount.value);

//   if (!priceToPay || !discountGenerate) {
//     return result.innerText = `Rellene el formulario Porfavor`;
//   }
  
//   if (discountGenerate > 100) {
//     return result.innerText = `No se puede exceder con el porcentaje`;
//   }
//   const newPrice = ( priceToPay * (100 - discountGenerate)) / 100;

//   result.innerText = `El precio con descuento es ${newPrice}`;
// }

function calcularPrecioConDescuento() {
  const priceToPay = Number(price.value);
  const cuponGenerate = cupon.value;

  if (!priceToPay || !cuponGenerate) {
    return result.innerText = `Rellene el formulario Porfavor`;
  }
  
  let discount;
  
  function isCuponInArray(elementCupon) {
    return elementCupon.name == cuponGenerate;
  }
  const cuponInArray = arrCupones.find(isCuponInArray);
  
  if (cuponInArray) {
    discount = cuponInArray.discount;
  } else {
    return result.innerText = `El cupon no es valido`;
  }
  
  const newPrice = ( priceToPay * (100 - discount)) / 100;
  result.innerText = `El precio con descuento es ${newPrice}`;
}