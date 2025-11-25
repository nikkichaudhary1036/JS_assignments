const tableBody = document.getElementById("userTableBody");
const refreshBtn = document.getElementById("refreshBtn");
const spinner = document.getElementById("spinner");

async function fetchUsers() {
    try {
        showSpinner();

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        displayUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        hideSpinner();
    }
}

function displayUsers(users) {
    tableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;

        tableBody.appendChild(row);
    });
}

function showSpinner() {
    spinner.classList.remove("hidden");
}

function hideSpinner() {
    spinner.classList.add("hidden");
}

refreshBtn.addEventListener("click", fetchUsers);

fetchUsers();
