import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./showProductContainer";
import { addToCart } from "./addToCart";
import{ getProductsFromLS} from "./getProductFromLs"
console.log(products);

showProductContainer(products);
// console.log(document.querySelectorAll(".stockElement"));

document.querySelectorAll(".stockElement").forEach((element) => {
  element.addEventListener("click", (event) => {
    const productQuantityElement = event.target
      .closest(".stockElement")
      .querySelector(".productQuantity");

    if (event.target.classList.contains("cartIncrement")) {
      if (parseInt(productQuantityElement.textContent) <= 50) {
        productQuantityElement.textContent =
          parseInt(productQuantityElement.textContent) + 1;
      }
    } else if (event.target.classList.contains("cartDecrement")) {
      if (parseInt(productQuantityElement.textContent) > 1) {
        productQuantityElement.textContent =
          parseInt(productQuantityElement.textContent) - 1;
      }
    }
  });
});

// <----- Add to Cart Functionality ----->

document.querySelectorAll(".add-to-cart-button").forEach((addtocartbtn, index) => {
    addtocartbtn.addEventListener("click", (event) => {

   
      const currentCardElement = event.target.closest(".cards");
      const productPrice = currentCardElement.querySelector(".productPrice").textContent;
      const productStock = currentCardElement.querySelector(".productStock").textContent;
      const productQuantity = currentCardElement.querySelector(".productQuantity").textContent;
      const id = index;
  
      // Calculate the updated price
      const updatedPrice = Number(productPrice.slice(1)) * Number(productQuantity);
  
      // Create a product details object
      const productDetails = {
        id: id,
        price: updatedPrice,
        stock: productStock,
        quantity: Number(productQuantity),
      };
  
      // Retrieve and update local storage data
      let productsFromLS = getProductsFromLS();
  
      // Check if the product already exists
      const existingProduct = productsFromLS.find(product => product.id === productDetails.id);
  
      if (existingProduct) {
        // Update the existing product's quantity and price
        existingProduct.quantity += productDetails.quantity;
        existingProduct.price += productDetails.price;
      } else {
        // Add new product to the cart
        productsFromLS.push(productDetails);
      }
  
      // Save the updated cart back to localStorage
      localStorage.setItem("cartProducts", JSON.stringify(productsFromLS));
      console.log(productsFromLS);
     updateCartValue()
    });

   
  });
  


// <------ getting data from local storage ------>    

  
  //<------ showing number of carts on added carts icon ------->
  
  export const updateCartValue = () => {
    console.log("active ");
    let cartProducts = getProductsFromLS();
    console.log(cartProducts);
    console.log("cartProducts", cartProducts.length);
    return (document.querySelector('#cartValue').innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
  };
console.log(updateCartValue())