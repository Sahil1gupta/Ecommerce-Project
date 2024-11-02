
import { getProductsFromLS } from "./getProductFromLs";
import products from "./api/products.json";
import { updateCartProductTotal } from "./updateCartProductTotal";

// console.log(getProductsFromLS)
export const removeProdFromCart=(id)=>{
    const product=getProductsFromLS()
    console.log(product)
   const updateCartProducts= product.filter((currProd)=>currProd.id!=id)
    localStorage.setItem("cartProducts",JSON.stringify(updateCartProducts));
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
      removeDiv.remove();
  
      //show toast when product added to the cart
     
    }
    updateCartProductTotal()
}