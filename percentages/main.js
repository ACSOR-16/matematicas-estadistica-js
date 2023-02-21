const price =  document.querySelector(".price");
const discount =  document.querySelector(".discount");
const calculate = document.querySelector(".caculate");
const result = document.querySelector(".result");

calculate.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
  const priceToPay = Number(price.value);
  const discountGenerate = Number(discount.value);

  if (!priceToPay || !discountGenerate) {
    return result.innerText = `Rellene el formulario Porfavor`;
  }
  
  if (discountGenerate > 100) {
    return result.innerText = `No se puede exceder con el porcentaje`;
  }
  const newPrice = ( priceToPay * (100 - discountGenerate)) / 100;

  result.innerText = `El precio con descuento es ${newPrice}`;
}