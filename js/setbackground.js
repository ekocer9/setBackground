const inp = document.querySelector(".inpColor")
console.log(inp)

const inpColorValue = document.querySelector(".inputColorValue")
console.log(inpColorValue)

const inpColorPicker = document.getElementById("inpColorPicker")
console.log(inpColorPicker )

const pbCol = document.querySelector(".pbSetColor")
console.log(pbCol)

pbCol.textContent = "Tryk mig for set color"

const bdy = document.querySelector("body")
console.log(bdy)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

const pbDecrease = document.getElementById('pbDecrease')
console.log(pbDecrease)

const pbIncrease = document.getElementById("pbIncrease")
console.log(pbIncrease)

const pArray = Array.from(pTags)
console.log(pArray)

let fontSize = 10

function increaseFontAll() {
    fontSize = fontSize + 1
    pArray.forEach(increaseFont)
}

function increaseFont(element) {
    element.style.fontSize = fontSize + 'px'
}

function decreaseFontAll() {
    fontSize = fontSize - 1
    pArray.forEach(decreaseFont)
}

function decreaseFont(element) {
    element.style.fontSize = fontSize + 'px'
}

pArray.forEach(decreaseFont)
console.log(pArray)

pArray.forEach(increaseFont)
console.log(pArray)

function setBackgroundColor() {
    let col = inp.value
    console.log(col)
    bdy.style.backgroundColor = col
    inpColorValue.value = bdy.style.backgroundColor
    pbCol.style.color = col
}

function useColorPicker() {
    let col = inpColorPicker.value
    console.log(col)
    bdy.style.backgroundColor = col
    inpColorValue.value = bdy.style.backgroundColor
    pbCol.style.color = col
}

pbDecrease.addEventListener('click', decreaseFontAll)

pbIncrease.addEventListener('click', increaseFontAll)

pbCol.addEventListener('click', setBackgroundColor)

document.addEventListener('keyup', setBackgroundColor)

inpColorPicker.addEventListener('input', useColorPicker)