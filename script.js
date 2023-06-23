const task = document.getElementById("todo");
const container = document.getElementById("listContainer");
function add() {
    if (task.value === ''){
        alert("Enter a Tast first");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    task.value = '';
    saveData();
}

container.addEventListener("click", function(e) {
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", container.innerHTML);
}

function showTast() {
    container.innerHTML = localStorage.getItem("data");
}
showTast();