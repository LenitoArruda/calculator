
const result = document.querySelector("#txt-valor");
let firstValue = 0;
let secondValue = 0;
let operation = '';


// Insert the numbers into the txt-valor 
function insertNumber(number){
    if(result.value==="0") 
    result.value = number
    else 
    result.value += number  
}

// Applying math operations
function mathOperations(op){
    firstValue = result.value;
    operation = op;
    
}

function resultOperation(){
    secondValue = result.value;
    switch(operation){
        case '*' : 
            result.value = firstValue * secondValue;
            break;
        case '/' :
             result.value = firstValue / secondValue;
             break;
        case '-' : 
            result.value = firstValue - secondValue;
            break;
        case '+' : 
            result.value = (firstValue + secondValue);
    }
}
