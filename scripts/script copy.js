

const numbers = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");

const plusButtn = document.querySelector("#plus");
const minusButtn = document.querySelector("#minus");
const multiplyButtn = document.querySelector("#multiply");
const divisionButtn = document.querySelector("#division");
const equalButtn = document.querySelector("#equal");


let firstNum;
let secoundNum;
let result;
let operater;
let isOperationdPressed = false;
let lastButtonPressed ;
let currnetNumberInString = "";


numbers.forEach(number => number.addEventListener('click', () => putWhatPressOndisplay(number) ));

plusButtn.addEventListener('click' , () => changeOperation("plus") )
minusButtn.addEventListener('click' , () => changeOperation("minus") )
multiplyButtn.addEventListener('click' , () => changeOperation("multiply") )
divisionButtn.addEventListener('click' , () => changeOperation("division") )

equalButtn.addEventListener('click' , findResult );
ac.addEventListener('click' , reset );
del.addEventListener('click' , deleteLastNumber);



function putWhatPressOndisplay(pressedNumberButton){
    
    currnetNumberInString += pressedNumberButton.textContent;
    output.textContent = currnetNumberInString;

    // if (!isOperationdPressed){
    //     firstNum = Number(currnetNumberInString);
    // }else{
    //     secoundNum = Number(currnetNumberInString);
    // }

    lastButtonPressed = "number"
}


function changeOperation(operation){
    // isOperationdPressed = true;
    switch(operation){
        case "plus":
            operater = "+"
            output.textContent = "+";
            break;
        case "minus":
            operater = "-"
            output.textContent = "-";
            break;
        case "multiply":
            operater = "*"
            output.textContent = "*";
            break;
        case "division":
            operater = "/"
            output.textContent = "/";
            break;
    }
    currnetNumberInString ="";

    lastButtonPressed = "operation"
}

function findResult(){
    if(!isNaN(output.textContent)) {
        // isOperationdPressed = true;
        switch(operater){
            case "+":
                result = add(firstNum, secoundNum);
                break;
            case "-":
                result = subtract(firstNum, secoundNum);
                break;
            case "*":
                result = multiply(firstNum, secoundNum);
                break;
            case "/":
                result = division(firstNum, secoundNum);
                break;
        }
        currnetNumberInString ="";
        output.textContent = result;
        
    };

    lastButtonPressed = "equal"

}

function deleteLastNumber(){
    
    if(!isNaN(output.textContent)){
        currnetNumberInString = currnetNumberInString.slice(0, -1)
        output.textContent = currnetNumberInString;
    }

    lastButtonPressed = "del"
}

function reset(){
    
    firstNum =null;
    secoundNum = null;
    result =null;
    operater =null;
    isOperationdPressed = false;
    currnetNumberInString = "";
    output.textContent = "";
    
    lastButtonPressed = "ac"
}







function add(a, b) {
    return a + b;
};
  
function subtract(a, b) {
    return a - b;
};
  
function multiply(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
}
