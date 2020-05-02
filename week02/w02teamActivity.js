//Core Requirements: #01
function displayText() {
    let userText = document.getElementById('text').value;
    document.getElementById('displayDiv').innerHTML = '<br>' + 'Text: ' + userText;
    console.log(userText);
}

//Core Requirements: #02
function displayGaussSum() {
    //Must convert the textbox input(data type string) to number.
    const userNumber = Number(document.getElementById('number1').value);
    // Use Gauss' Formula: n(n+1)/2
    const gaussFormula = userNumber * (userNumber + 1) / 2;
    document.getElementById('displayDiv').innerHTML = '<br>' + 'Gauss\' Sum: ' + gaussFormula;
}

//Core Requirements: #03
function displaySum() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    document.getElementById('displayDiv').innerHTML = '<br>' + num1 + " + " + num2 + " = " + sum(num1, num2);
}

//Stretch Goals: #01 #02
function sum(x, y) {
    var result;
    result = x + y;
    return (result);
}
function subtract(x, y) {
    var result;
    result = x - y;
    return (result);
}
function multiply(x, y) {
    var result;
    result = x * y;
    return (result);
}
function divide(x, y) {
    var result;
    result = x / y;
    return (result);
}

function displayOperators() {
    var operator = document.getElementById("operator").value;
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);

    if (operator === "add") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " + " + num2 + " = " + sum(num1, num2);
    }
    if (operator === "subtract") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " - " + num2 + " = " + subtract(num1, num2);
    }
    if (operator === "multiply") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " * " + num2 + " = " + multiply(num1, num2);
    }
    if (operator === "divide") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " / " + num2 + " = " + divide(num1, num2);
    }
}

//Stretch Goals: #03
function callBackOperator() {
    var operator = document.getElementById("operator").value;
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);

    var addCallback = (num1, num2) => num1 + num2;
    var subtractCallback = (num1, num2) => num1 - num2;
    var multiplyCallback = (num1, num2) => num1 * num2;
    var divideCallback = (num1, num2) => num1 / num2;

    if (operator === "add") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " + " + num2 + " = " + addCallback(num1, num2);
    }
    else if (operator === "subtract") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " - " + num2 + " = " + subtractCallback(num1, num2);
    }
    else if (operator === "multiply") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " * " + num2 + " = " + multiplyCallback(num1, num2);
    }
    else if (operator === "divide") {
        document.getElementById("displayDiv").innerHTML = '<br>' + num1 + " / " + num2 + " = " + divideCallback(num1, num2);
    }
}