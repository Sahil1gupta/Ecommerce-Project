import {getProductsFromLS} from "./getProductFromLs";
import { updateCartProductTotal } from "./updateCartProductTotal";
export const incrementDecrement = (event, id, stock, price) => {
    const currentDom=document.querySelector(`#card${id}`);
    let productsFromLS=getProductsFromLS();
    let product=productsFromLS.filter((currProd)=>currProd.id==id);
    if(event.target.classList.contains("cartIncrement")){
        if(product[0].quantity<stock){
            product[0].quantity++;
            product[0].price=product[0].quantity*price;
            currentDom.querySelector(".productQuantity").textContent=product[0].quantity;
            currentDom.querySelector(".productPrice").textContent=product[0].price;
        }
    }
    if(event.target.classList.contains("cartDecrement")){
        if(product[0].quantity>1){
            product[0].quantity--;
            product[0].price=product[0].quantity*price;
            currentDom.querySelector(".productQuantity").textContent=product[0].quantity;
            currentDom.querySelector(".productPrice").textContent=product[0].price;
        }
    }
    localStorage.setItem("cartProducts",JSON.stringify(productsFromLS));
    updateCartProductTotal()
}