export function showProductContainer(products) {
    const productContainer = document.querySelector("#productContainer");
    const productTemplate = document.querySelector("#productTemplate");

    if (products.length === 0) { return false; }

    products.forEach((product, index) => {
     
        const { id, name, category, brand, price, stock, image, description } = product;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productPrice').textContent = `₹${price}`;
        productClone.querySelector('.productActualPrice').textContent = `₹${price * 4}`;

       
        console.log(index);

       /* productClone.querySelector('.stockElement')?.addEventListener('click', (event) => {
           console.log('id',id)
            handleClick(event,id,stock);
           
        });  */
        //instead of this i made a different solution in main.js

        
        productContainer.append(productClone);
    });
}

/* function handleClick(event, id, stock) {
    const currentCardElement = document.querySelector(`#card${id}`);
    console.log(currentCardElement)
    if (!currentCardElement) {
        console.error(`Element with ID card${id} not found`);
        return;
    }

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    if (!productQuantity) {
        console.error(`Product quantity element not found in card${id}`);
        return;
    }
    console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock;
        }
    }

    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    console.log(quantity);
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;
}

*/