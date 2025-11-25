const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");

let products = [];

async function fetchProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        products = await res.json();
        displayProducts(products);
    } catch (err) {
        productGrid.innerHTML = "<p>Error fetching products.</p>";
        console.error(err);
    }
}

function displayProducts(list) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
        `;

        productGrid.appendChild(div);
    });
}

function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query));
    displayProducts(filtered);
}

function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

searchInput.addEventListener("input", debounce(filterProducts, 300));

fetchProducts();
