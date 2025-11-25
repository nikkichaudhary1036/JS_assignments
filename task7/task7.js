const setupEl = document.getElementById("setup");
const punchlineEl = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokeBtn");


function getJoke() {
    jokeBtn.disabled = true;
    setupEl.textContent = "Loading joke...";
    punchlineEl.textContent = "";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            setupEl.textContent = data.setup;
            punchlineEl.textContent = data.punchline;
        })
        .catch(err => {
            setupEl.textContent = "Error fetching joke.";
            punchlineEl.textContent = "";
            console.error(err);
        })
        .finally(() => {
            jokeBtn.disabled = false; 
        });
}

getJoke();

jokeBtn.addEventListener("click", getJoke);
