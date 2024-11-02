import { getProductsFromLS } from "./getProductFromLs";
import products from "./api/products.json";
import { removeProdFromCart } from "./removeCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

const cartProducts = getProductsFromLS();
let filterProducts = products.filter((currProd) => {
  return cartProducts.some((currCart) => currCart.id == currProd.id);
});
console.log("filterProducts", filterProducts);

export function showAddToCartCards() {
  const cartElement = document.querySelector("#productCartContainer");
  const templateContainer = document.querySelector("#productCartTemplate");

  filterProducts.forEach((currEle) => {
    const { category, id, image, name, stock, price } = currEle;

    // productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    const templateCartClone = document.importNode(
      templateContainer.content,
      true
    );

    console.log(templateCartClone);
    templateCartClone
      .querySelector("#cardValue")
      .setAttribute("id", `card${id}`);
    templateCartClone.querySelector(".category").textContent = category;
    templateCartClone.querySelector(".productImage").src = image;
    templateCartClone.querySelector(".productName").textContent = name;

    const lSActualData = cartProducts.filter((currCart) => {
      if (currCart.id === currEle.id) {
        return currCart;
      }
    });
    console.log("lSActualData", lSActualData[0].price);
    templateCartClone.querySelector(".productQuantity").textContent =
      lSActualData[0].quantity;
    templateCartClone.querySelector(".productPrice").textContent =
      lSActualData[0].price;

    //<------creating remove cart button functionality----->
    templateCartClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));
    //<------creating quantity and price update functionality----->
    templateCartClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) =>
        incrementDecrement(event, id, stock, price)
      );

    cartElement.append(templateCartClone);
  });
  console.log("cartProducts for add to cart", cartProducts);
  updateCartProductTotal()
}
showAddToCartCards();
