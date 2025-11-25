const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const postList = document.getElementById("postList");

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; 
            if (success) {
                resolve([
                    "How to Learn JavaScript",
                    "Understanding Async/Await",
                    "CSS Grid vs Flexbox",
                    "10 Tips for Clean Code",
                    "Understanding Promises in JS"
                ]);
            } else {
                reject("Failed to load posts");
            }
        }, 2000);
    });
}

async function loadPosts(retries = 3) {
    status.textContent = "Loading posts...";
    postList.innerHTML = "";

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const posts = await fetchPosts();
            status.textContent = "Posts loaded successfully!";
            posts.forEach(title => {
                const li = document.createElement("li");
                li.textContent = title;
                postList.appendChild(li);
            });
            return; 
        } catch (err) {
            status.textContent = `Attempt ${attempt} failed: ${err}`;
            if (attempt === retries) {
                status.textContent = "All attempts failed. Please try again later.";
            }
        }
    }
}

loadBtn.addEventListener("click", () => loadPosts());
