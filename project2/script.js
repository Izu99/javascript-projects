const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Btn = document.querySelector(".btn");

function addTask() {
    if (inputBox.value === "") {
        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Save data immediately after adding the task
        saveData();
    }
    inputBox.value = "";
    // saveData();
}


// Btn.addEventListener("click", addTask);
// Btn.addEventListener("click", () => console.log("Another action"));



listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    console.log("saveData called with:", listContainer.innerHTML);
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const storedData = localStorage.getItem("data");
    console.log("Retrieved data:", storedData);
    if (storedData) {
        listContainer.innerHTML = storedData;
    }
}

showTask();