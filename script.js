
const result = document.querySelector("#txt-valor");
const result2 = document.getElementById('lbl-result');
let firstValue = 0;
let secondValue = 0;
let operation = '';
let i =0;
let j =0;
let k =0;




// Insert the numbers into the txt-valor 
function insertNumber(number){
    if(result.value==="0") 
    result.value = number
    else 
    result.value += number  ;
    j=0;
}

// Applying math operations
function mathOperations(op){
    firstValue = result.value;
    operation = op;
    result.value = 0;
    result2.innerHTML = firstValue + " " + op;
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
            result.value = (firstValue * 1) + (1 * secondValue);
    }
    result2.innerHTML = firstValue + " " + operation + " " + secondValue + " =";
    firstValue = secondValue;
    j++;
}

function dotInsert(){
    if(j===0){
        if(result.value.includes('.')==false)
            result.value = result.value + "."
    }
    else
        result.value = "0."
}
function reset(){
    let firstValue = 0;
    let secondValue = 0;
    let operation = '';
    result.value = 0;
    result2.innerHTML = "0";
}
function insertKeyboard(event){
    const code = event.keyCode;
    if(code == 30){
        result.value = number;
        j=0;
    }
    else 
    if(code > 30 && code < 40){ 
        result.value += number  ;
        j=0;
    }
}
function back(){
    document.querySelector("#txt-valor").value = result.subString(0,result.length -1);

}
/*window.onload = function() {

    document.onkeyup = function(e) {
    
      
      var elemento = findElementbyShortcut(e.k)
      
  
      
    }
  }*/
