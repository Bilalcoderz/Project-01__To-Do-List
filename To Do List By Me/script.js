const typeTask = document.getElementById("type-task");
const listContainer = document.getElementById("list-container");

function addTask() {
if (typeTask.value === '') {
    alert("O pai kuch likh to la pahla")
    saveData()
}

else {
    let li = document.createElement("li");
        li.innerHTML = typeTask.value;
        listContainer.appendChild(li)

        // if (typeTask.value )
        
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveData()
}
typeTask.value = "";
saveData()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
    }

    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

getData()
