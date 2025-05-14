//capture the input lement, where calculation would be dispayed
const result = document.querySelector("#result");
let  display = ''
let  firstNumber =''
let  secondNumber =''
let isSecondPhase = false

//Select AC button and addevent listener to clear display when clicked
const clearAll =  document.querySelector("#clearBttn")
clearAll.addEventListener('click', ()=>{
    display=''
    firstNumber =''
    secondNumber =''
    result.value=display
})

const clearOne = document.querySelector('#delete')
clearOne.addEventListener('click',() =>{
    display=display.slice(0,-1)
    result.value=display
})


//select all keys with the keys class and  add eventlistener to ; 
const buttons = document.querySelectorAll(".keys");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent

        // populate the display wih value of key clicked, provided the value is a number or decimal point
        if(isNumericInput(value) || value === "."){
            display+=value
            result.value=display

            //store value of duspay depending of stage of calculation
            if (!isSecondPhase) {
                firstNumber = display
            } else {
                secondNumber = display
            }
        }  
        // check if the key clicked is an operator and store value of operator to be used for calculation
        else if (["+", "-", "*", "/"].includes(value)) {
            if(isSecondPhase){
                const answer = operate(Number(firstNumber), currentOperator, Number(secondNumber) );
                result.value = answer
                display = answer.toString()
                firstNumber =answer
            }  
                currentOperator = value
                isSecondPhase = true
                display = ""
             
        } 
        // check if key clicked is the equal to and compute
        else if (value === "=") {
            const answer = operate(Number(firstNumber), currentOperator, Number(secondNumber) );
            result.value = answer
            display = ''
            
            // reset the values used to calculate
            firstNumber = answer
            secondNumber = ""
            currentOperator = ""
            isSecondPhase = false
        }
        
    })
})

function operate(a,operator,b){
    if(operator==='+'){
        return add(a,b)
    } else if(operator==='-'){
        return subtract(a,b)
    } else if(operator==='*'){
        return multiply(a,b)
    } else if(operator==='/'){
        return divide(a,b)
    }

}

const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
}

const multiply = function(num1,num2) {
	return num1*num2
}

const divide = function(num1,num2) {
    if(num2 === 0){
        return 'Haha, Nice Try'
    } else return num1/num2
}


function isNumericInput(input) {
    return input !== '' && !isNaN(input) && isFinite(input)
  }
  
