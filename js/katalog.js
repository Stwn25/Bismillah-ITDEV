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
        product.description = shortText(product.description, 100);
        product.title = shortText(product.title, 50);
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
                        <div class="card-img">
                            <img src="${product.image}"
                                alt="img product">
                        </div>
                        <section>
                                                    <p class="fw-bold">${
                                                      product.title
                                                    }</p>
                            <p>${product.description}</p>
                            <p>${product.description}</p>
                            <p>Kategori: ${product.category}</p>
                            <p>Harga: $${product.price}</p>
                            <a href="detail/detail.html?id=${product.id}">
                                <button class="bg-blue p-2 text-white fw-bold border-radius shadow">detail</button>
                            </a>
                        </section>
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
