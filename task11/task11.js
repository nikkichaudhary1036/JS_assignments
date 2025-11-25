const startBtn = document.getElementById("startBtn");
const stepList = document.getElementById("stepList");

function stepPromise(stepText) {
    return new Promise(resolve => {
        setTimeout(() => resolve(stepText), 1000);
    });
}

async function runSteps() {
    stepList.innerHTML = "";

    const steps = ["Step 1 done", "Step 2 done", "Step 3 done"];

    for (let i = 0; i < steps.length; i++) {
        const li = document.createElement("li");
        li.textContent = steps[i];
        li.classList.add("active"); 
        stepList.appendChild(li);

        await stepPromise(steps[i]);

        li.classList.remove("active"); 
    }
}

startBtn.addEventListener("click", runSteps);
