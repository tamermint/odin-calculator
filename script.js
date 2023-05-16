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

let num1;
let num2;
let opVal;

function operate(firstVal, secondVal, opCode) {
    //if 'opcode == +',
    //return addNum(firstVal, secondVal)

    //if 'opcode === '-',
    //return subtNum(firstVal, secondVal);

    //if 'opcode === '*',
    //return multNum(firstVal, secondVal);

    //if 'opcode === '/',
    //return divNum(firstVal, secondVal);
}

function clear() {
    //if buttonValue === "clear"
        //clear thr display
        //set memory variable to 0
}

function display() {
    //document.appendChild(buttonValues)
    let displayVal;
   
    let keys = document.querySelectorAll('#key');
    let clearKey = document.querySelector('#clear-btn');
    let deleteKey = document.querySelector('#delete-btn');
    let calcDisplay = document.querySelector('#calculator-display');


    keys.forEach((key) => {
        key.addEventListener('mousedown', () => {         //every time a button is pressed, get value
            //store value in a display variable
            displayVal = key.textContent;
            calcDisplay.textContent += displayVal;        //insert the variable value into the display field
        });
    });
    
    clearKey.addEventListener('mousedown', () => {        //clear the calculator display when clear button is pressed
        calcDisplay.innerHTML = '';
    });
    
    deleteKey.addEventListener('mousedown', () => {       //start deleting the most recent entered character in the display
       calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    })
}

function calcBrain() {
    //when display() contains first num and second num and user presses = 
    //call operate()

    //when display contains first num and second num and user presses another
    //opCode, call operate() and store it in another variable(memoryVal) and 
    //if user presses another opcode, call operate() with the current value 
    //and button value pressed by user and update the memoryVal


}

display();
