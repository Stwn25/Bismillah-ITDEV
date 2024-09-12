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
                <button class="bt-daftar fonts" style="bottom:0; left:0;">Detail</button>
                <button class="bt-buy fonts" style="bottom:0; left:0;">Buy</button>
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
