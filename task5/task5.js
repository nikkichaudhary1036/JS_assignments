const form = document.getElementById("regForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        setInvalid(nameInput);
        isValid = false;
    } else {
        nameError.textContent = "";
        setValid(nameInput);
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        setInvalid(emailInput);
        isValid = false;
    }
    else if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must include '@'.";
        setInvalid(emailInput);
        isValid = false;
    }
    else {
        emailError.textContent = "";
        setValid(emailInput);
    }

    if (passInput.value.trim() === "") {
        passError.textContent = "Password is required.";
        setInvalid(passInput);
        isValid = false;
    }
    else if (passInput.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters.";
        setInvalid(passInput);
        isValid = false;
    }
    else {
        passError.textContent = "";
        setValid(passInput);
    }

    if (isValid) {
        alert("Registration successful!");
    }
});

function setValid(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
}

function setInvalid(input) {
    input.classList.remove("valid");
    input.classList.add("invalid");
}
