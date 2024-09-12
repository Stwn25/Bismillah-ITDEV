document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman sudah menjalani load");
    getProduct();
});

function getProduct() {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        var container = document.querySelector("#product_container");
        data.forEach((product) => {
        product.description = shortText(product.description, 300);
        product.title = shortText(product.title, 70);
        container.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <div class="card-img">
                    <img src="${product.image}"
                        alt="img product">
                </div>
                <section class="fonts">
                    <p class="fw-bold">${product.title}</p>
                    <hr>
                    <p>${product.description}</p>
                    <br>
                    <p><b>Category:</b> ${product.category}</p>
                    <p><b>Price:</b> $${product.price}</p>
                    <br>
                </section>
                <button class="bt-daftar fonts">Detail</button>
                <button class="bt-buy fonts">Buy</button>
            </div>`
        );
            });
        });
}

function shortText(text, maxLength) {
    if (text.length > maxLength) {
    return text.substring(0, maxLength) + " ...";
    } else {
    return text;
    }
}



function showProductDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((product) => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        const closeButton = document.createElement("button");
        closeButton.classList.add("close-popup");
        closeButton.textContent = "Close";
        popup.innerHTML = `
        <h2>Product Details (ID: ${productId})</h2>
        <hr>
        <img src="${product.image}" alt="Product Image">
        <ul class="product-details">
            <li><b>Title:</b> ${product.title}</li>
            <li><b>Description:</b> ${product.description}</li>
            <li><b>Category:</b> ${product.category}</li>
            <li><b>Price:</b> $${product.price}</li>
        </ul>
        `;
        popup.appendChild(closeButton);
        document.body.appendChild(popup);
        closeButton.addEventListener("click", () => {
        popup.remove();
        });
    })
    .catch((error) => {
        console.error("Error fetching product details:", error);
    });
}

function handleButtonClick(event) {
    if (event.target.classList.contains("bt-daftar")) {
    const productId = event.target.dataset.productId;
    showProductDetails(productId);
    }
}

// Event listener for clicks on product container
document.addEventListener("click", handleButtonClick);

// Call getProduct function initially to fetch and display products
getProduct();
