import './style.css'

const buttons = document.querySelectorAll(".button")
const visor = document.querySelector(".visor-input")
const equals = document.querySelector(".equals")

let calculated = false

const matchOperation = operation => {
  const operations = {
    "÷": "/",
    "×": "*",
    '-': '-',
    '+': '+'
  }

  return operations[operation] || operation
}

const addToVisor = value => {

  if(calculated && value !== "="){
    visor.value = ''
    calculated = false
  }

  if (value === "=") {
      const expression = visor.value.replace(/÷|×|\+|\-/g, match => matchOperation(match))
      const result = eval(expression)

      if(result !== Infinity && !isNaN(result)){
        visor.value = result
        calculated = true
      }
      else alert("ERROR")
  }
  else {
    visor.value += value
  }

}


buttons.forEach(button => button.addEventListener('click', e =>
  addToVisor(e.target.textContent)
))