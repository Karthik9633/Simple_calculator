let result = document.getElementById("calc")
let firstNumber = null
let operator = null
let click = false

function btnClick(value) {
    if (click) {
        result.value = ""
        click = false
    }
    result.value += value;
}

function btnOperator(a) {
    firstNumber = Number(result.value)
    operator = a
    result.value = ""
    click = false
}

function btnClear(value) {
    result.value = ""
    click = false
}

function btnResult() {
    let secondNumber = Number(result.value)
    let finalResult = 0
    if (operator === "+") {
        finalResult = firstNumber + secondNumber
    }
    else if (operator === "-") {
        finalResult = firstNumber - secondNumber
    }
    else if (operator === "*") {
        finalResult = firstNumber * secondNumber
    }
    else if (operator === "/") {
        finalResult = firstNumber / secondNumber
    }
    result.value = finalResult
    click = true
}

function btnSquare() {
    let Square = Number(result.value)
    result.value = Square * Square
    click = true
}

function btnCube() {

    let cube = Number(result.value)
    result.value = cube * cube * cube
    click = true
}
