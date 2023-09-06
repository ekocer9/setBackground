const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObject = [{"name": "red", "id": "#ff0000"}, {"name": "green", "id": "#00ff00"}, {"name": "yellow", "id": "#ffff00"}, {"name": "purple", "id": "#1f35a9"}]

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")

const ddColor2 = document.getElementById("ddColor2")

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColor2.appendChild(el)
}

function fillDropdownObj(item) {
    const el = document.createElement("option")
    el.textContent = item.name
    el.value = item.id
    ddColor2.appendChild(el)
}

function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selindex]
    const color = selectedOption.value
    body.style.backgroundColor = color
}

function addColors2() {
    ddColor2.innerHTML = ""
    //colArray2.forEach(fillDropdown2)
    colorObject.forEach(fillDropdownObj)
    console.log(document.all)
}

pbFillDropdown2.addEventListener("click", addColors2)
ddColor2.addEventListener("change", setBackgroundColor2)