let n1 = 0
let n2 = 0

const addFormula = (x,y) => {
  return x + y
}

const subtractFormula = (x,y) => {
  return x - y
}

const multiplyFormula = (x,y) => {
  return x * y
}

const divisionFormula = (x,y) => {
  return x / y
}

const doAddition = () => {
  updateInputs()
  document.getElementById('resultText').value = addFormula(n1, n2)
}

const doSubtract = () => {
  updateInputs()
  document.getElementById('resultText').value = subtractFormula(n1, n2)
}

const doMultiply = () => {
  updateInputs()
  document.getElementById('resultText').value = multiplyFormula(n1, n2)
}

const doDivision = () => {
  updateInputs()
  document.getElementById('resultText').value = divisionFormula(n1, n2)
}

const updateInputs = () => {
  n1 = Number(document.getElementById('num1').value)
  n2 = Number(document.getElementById('num2').value)
}

document.getElementById('addButton').addEventListener('click', doAddition)
document.getElementById('subtractButton').addEventListener('click', doSubtract)
document.getElementById('multiplyButton').addEventListener('click', doMultiply)
document.getElementById('divideButton').addEventListener('click', doDivision)