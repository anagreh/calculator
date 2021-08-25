
changeSizeRelativeToWidth();
window.addEventListener("resize" , changeSizeRelativeToWidth);

function changeSizeRelativeToWidth(){
    
    const body = document.querySelector("body")
    const calculator = document.querySelector(".calculator")
    const bodySmallestdim =  Math.min(body.getBoundingClientRect().height , body.getBoundingClientRect().width);
    calculator.style.height = `${bodySmallestdim*1 *.62}px`
    calculator.style.width = `${bodySmallestdim*.75 * .62}px`
    

    console.log (body.getBoundingClientRect().height);

}


const numbers = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const coma = document.querySelector("#coma");

const plusButtn = document.querySelector("#plus");
const minusButtn = document.querySelector("#minus");
const multiplyButtn = document.querySelector("#multiply");
const divisionButtn = document.querySelector("#division");
const equalButtn = document.querySelector("#equal");


let firstNum;
let isFirstNum = true;
let result=0;
let operater;
let lastButtonPressed ;
let currnetNumberInString = "";

let theMatmaticFunc;
let theOperationSymbol;

//  ------add event listner----
numbers.forEach(number => number.addEventListener('click', () => updateStringNumber(number) ));
coma.addEventListener('click' , () => updateStringNumber(coma))

plusButtn.addEventListener('click' , () => choseMathmaticFunc(add) )
minusButtn.addEventListener('click' , () => choseMathmaticFunc(subtract) )
multiplyButtn.addEventListener('click' , () => choseMathmaticFunc(multiply) )
divisionButtn.addEventListener('click' , () => choseMathmaticFunc(division) )

equalButtn.addEventListener('click' , findResult );
ac.addEventListener('click' , reset );
del.addEventListener('click' , deleteLastNumber);
//-----------------------------




function updateStringNumber(pressedNumberButton){

    if ( isNumeric(currnetNumberInString + pressedNumberButton.textContent) ){
        
        currnetNumberInString += pressedNumberButton.textContent;
        output.textContent = currnetNumberInString;

        shouldSavedInFirstNum();

        lastButtonPressed = "number";
    }
}

function shouldSavedInFirstNum(){
    if (lastButtonPressed === "equal") isFirstNum = true;
}

function choseMathmaticFunc(passedMathmaticFunc){
    theMatmaticFunc = passedMathmaticFunc;
    theMatmaticFunc();
    output.textContent = theOperationSymbol;

    if(isFirstNum){
        isFirstNum = false;
        firstNum = Number(currnetNumberInString);
    }
    currnetNumberInString = "";
    lastButtonPressed = "operator";

    
}

function findResult(){

    if(firstNum && isNumeric(currnetNumberInString) && theMatmaticFunc){

        result = theMatmaticFunc(firstNum , Number(currnetNumberInString));
        output.textContent = result;
        firstNum = result;
        currnetNumberInString = "";
        theMatmaticFunc = null;

        lastButtonPressed = "equal";
    }
}

function deleteLastNumber(){
    
    if (lastButtonPressed = "equal") reset();
    else if(isNumeric(output.textContent)){
        currnetNumberInString = currnetNumberInString.slice(0, -1)
        output.textContent = currnetNumberInString;
        lastButtonPressed = "del";
    }

}

function reset(){
    
    firstNum = null;;
    isFirstNum = true;
    result=0;
    operater = null;
    lastButtonPressed =null;
    currnetNumberInString = "";
    theMatmaticFunc = null;
    theOperationSymbol = null;

    output.textContent = "";

}

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail

}

function add(a, b) {
    const symbol = "+";
    theOperationSymbol = symbol;
    return a + b;
}
  
function subtract(a, b) {
    const symbol = "-";
    theOperationSymbol = symbol;
    return a - b;
}
  
function multiply(a, b) {
    const symbol = "*";
    theOperationSymbol = symbol;
    return a * b;
}

function division(a, b) {
    const symbol = "/";
    theOperationSymbol = symbol;
    return a / b;
}
