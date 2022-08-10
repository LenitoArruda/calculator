
const result = document.getElementById('lbl-result');
const value = document.getElementById('lbl-value');
let firstValue = 0;
let secondValue = 0;
let operation = '';
let i = 0; //aux for insertNumber() - Resolving issues when inserting numbers
let j = 0; //aux for dotInsert() - Resolving issues with dot button 
let k = 0; //aux for equal() - Resolving issues when users click '=' multiple time 
let l = 0; //aux for insertNumber() - Resolving issue with cleaning lbl-result 



/*----------------------------- Buttons functions -----------------------------*/

// BUTTONS 0 to 9
function insertNumber(number){
    if(value.innerHTML === "0" || i==1) 
        value.innerHTML = number
    else 
        value.innerHTML += number
    if(l==1)
        result.innerHTML = '';
    resetAux();
}

// BUTTONS: -, +, / and *
function mathOperations(op){
    firstValue = verifyDotEnd(value.innerHTML);
    operation = op;
    result.innerHTML = firstValue + " " + op;
    i=1;
    l=0;
}   

// BUTTON =
function equal(){
    if(k==0){
        secondValue = verifyDotEnd(value.innerHTML);
        resolveMath();
        firstValue = value.innerHTML;
    }else{
        firstValue = verifyDotEnd(value.innerHTML);
        resolveMath();
        
    }
    j=1; 
    i=1;
    k=1;
    l=1;
}

// BUTTON .
function dotInsert(){
    if(j===0){
        if(value.innerHTML.includes('.')==false)
            value.innerHTML = value.innerHTML + "."
    }
    else
        value.innerHTML = "0."
}

// BUTTON Del
function reset(){
    let firstValue = 0;
    let secondValue = 0;
    let operation = '';
    value.innerHTML = 0;
    result.innerHTML = 0;
    resetAux();
}

// BUTTON <
function back(){

    if(value.innerHTML != "0"){
        value.innerHTML = value.innerHTML.substring(0,value.innerHTML.length -1);
        if(value.innerHTML.length == 0 )
        value.innerHTML = "0";
    }
    
}




/*----------------------------- Auxiliary functions -----------------------------*/

function verifyDotEnd(num){
    if(num.charAt(num.length -1) === '.')
       num = num.substring(0,num.length -1)
    return num;
}

function resolveMath(){
    result.innerHTML = firstValue + " " + operation + " " + secondValue + " =";
    var aux = result.innerHTML.replace(/ /g, "");
    value.innerHTML = parseFloat(eval(aux.substring(0, aux.length -1)).toFixed(2));
}

function resetAux(){
    j=0;
    i=0;
    k=0;
    l=0;
}


function insertKeyboard(event){
    const code = event.keyCode;
    if(code == 30){
        value.innerHTML = number;
        j=0;
    }
    else 
    if(code > 30 && code < 40){ 
        value.innerHTML += number  ;
        j=0;
    }
}
/*window.onload = function() {

    document.onkeyup = function(e) {
    
      
      var elemento = findElementbyShortcut(e.k)
      
  
      
    }
  }*/
