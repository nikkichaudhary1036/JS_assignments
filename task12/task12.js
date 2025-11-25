const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const ACCESS_KEY = "YOUR_ACCESS_KEY";
const IMAGES_PER_LOAD = 6;

async function fetchImages(count = IMAGES_PER_LOAD) {
    const url = `https://api.unsplash.com/photos/random?count=${count}&client_id=${ACCESS_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.error("Error fetching images:", err);
        return [];
    }
}

function displayImages(images) {
    images.forEach(img => {
        const imageEl = document.createElement("img");
        imageEl.src = img.urls.small;
        imageEl.alt = img.alt_description || "Unsplash Image";
        gallery.appendChild(imageEl);
    });
}

async function loadImages() {
    const images = await fetchImages();
    displayImages(images);
}

loadMoreBtn.addEventListener("click", loadImages);

loadImages();
