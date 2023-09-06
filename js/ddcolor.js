const colArray = ["red", "green", "yellow", "blue", "orange"]

const pbFillDropdown = document.getElementById("pbFillDropdown")

const ddColor = document.getElementById("ddColor")

const body = document.querySelector("body")

function fillDropdown(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)
}

function setBackgroundColor() {
    const selindex = ddColor.selectedIndex
    const selectedOption = ddColor.options[selindex]
    const color = selectedOption.innerHTML
    body.style.backgroundColor = color
}

function addColors() {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown);
    console.log(document.all)
}

ddColor.addEventListener('change', setBackgroundColor)

pbFillDropdown.addEventListener("click", addColors)