const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const maxChars = 100;

textBox.addEventListener("input", () => {
    const remaining = maxChars - textBox.value.length;
    counter.textContent = `Characters left: ${remaining}`;

    if (remaining > 60) {
        counter.style.color = "green";
    } else if (remaining > 30) {
        counter.style.color = "orange";
    } else {
        counter.style.color = "red";
    }
});
