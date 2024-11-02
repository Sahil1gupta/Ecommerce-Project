export const getProductsFromLS = () => {
    let productsFromLS = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(productsFromLS);
    if (!productsFromLS) {
      console.log("No products in localStorage");
      return [];
    }
    return productsFromLS;
  };