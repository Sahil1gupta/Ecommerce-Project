import { getProductsFromLS } from "./getProductFromLs";

export function updateCartProductTotal() {
  let cartProducts = getProductsFromLS();
  console.log(cartProducts)
  let Initialtotal = 0;
  

const totalProductPrice = cartProducts.reduce((accum, curProd) => {
    console.log(curProd);
    return accum + curProd.price;
}, Initialtotal);

console.log(totalProductPrice);
  
  document.querySelector(".productSubTotal").textContent = Number(totalProductPrice.toFixed(2));
  document.querySelector(".productFinalTotal").textContent = Number((Number(totalProductPrice.toFixed(2))+Number(50)).toFixed(2));

}