//javascript file which contains the calculator logic i.e. the brains

//functions to perform basic operations with the restriction of only
//using two values

const addNum = (a, b) => { return a + b; }
const subtNum = (a, b) => { return a - b; }
const multNum = (a, b) => { return a * b; }
const divNum = (a, b) => { 
    if(b === 0) {
        return "err! Try again"
    } 
    else return a / b ;}

function calcBrain(firstVal, secondVal, opVal) {
    let result;

    if (opVal === "+") {
       result = addNum(firstVal, secondVal);
    }
    else if(opVal === "-") {
       result = subtNum(firstVal, secondVal);
    }
    else if(opVal === "*") {
        result = multNum(firstVal, secondVal);
    }
    else if(opVal === "/") {
        if(secondVal === 0){
            return "Lmao, press clear and try again!"
        }
        else{
        result = divNum(firstVal, secondVal);
        }
    }
    else {
        return "Error!";
    }
    return Math.round(result * 100) / 100;         //floating point values are limited to two places decimal
}

function operate() {
    let firstVal, secondVal, opVal;
    
    let calculationsDone = false;        //to check if a calculation has been performed

    let opCode = document.querySelectorAll('#math-key');
    let calcDisplay = document.querySelector('#calculator-display');
    let opKey = document.querySelector("#op-key");
   
    opCode.forEach((key) => { 
        key.addEventListener('mousedown', () => {
        if(firstVal && !calculationsDone) {                   //if calculations has been already performed
            secondVal = parseFloat(calcDisplay.textContent)   //set secondVal to numbers onscreen and get the floating point value as well
            calcDisplay.textContent = calcBrain(firstVal, secondVal, opVal);         //perform calculator functions
            firstVal = parseFloat(calcDisplay.textContent);    //set the output to firstVal
        } else {
            firstVal = parseFloat(calcDisplay.textContent);     //else the first input is firstVal and clear out the screen after that
            calcDisplay.textContent = '';
        }
        opVal = key.getAttribute('value');
        calculationsDone = false;                              //set the calculation done to false so that we can repeat the condition
        });
    });

    //when "=" is hit, perform the operation 
    
    opKey.addEventListener('mousedown', () => {
        secondVal = parseFloat(calcDisplay.textContent);
        calcDisplay.innerHTML = calcBrain(firstVal, secondVal, opVal);
        firstVal = parseFloat(calcDisplay.textContent);
        calculationsDone = true;
    });
}

function clear() {
    //if buttonValue === "clear"
        //clear thr display
        //set display to ""
        let calcDisplay = document.querySelector('#calculator-display');
        let clearKey = document.querySelector('#clear-btn');
        clearKey.addEventListener('mousedown', () => {        //clear the calculator display when clear button is pressed
            calcDisplay.innerHTML = '';
        });
}

function deleteDisplay() {

    let calcDisplay = document.querySelector('#calculator-display');
    //function to delete the most recently entered in display
    let deleteKey = document.querySelector('#delete-btn');
    deleteKey.addEventListener('mousedown', () => {       //start deleting the most recent entered character in the display
        calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
     });
}

function display() {                         //function to add number to the calculator display 
                                             //a key is pressed on the keyboard
    let displayVal;
    let keys = document.querySelectorAll('#key');
    let calcDisplay = document.querySelector('#calculator-display');

    keys.forEach((key) => {
        key.addEventListener('mousedown', () => {         //every time a button is pressed, get value
            //store value in a display variable
            displayVal = key.textContent;
            calcDisplay.textContent += displayVal;        //insert the variable value into the display field
        });
    });

}

display();
operate();
clear();
deleteDisplay();