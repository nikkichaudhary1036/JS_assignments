const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;

const slide = document.getElementById("slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carousel = document.getElementById("carousel");

function showImage(i) {
    slide.src = images[i];
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

let autoSlide = setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 3000);

carousel.addEventListener("mouseover", () => {
    clearInterval(autoSlide);
});

carousel.addEventListener("mouseout", () => {
    autoSlide = setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);
});
