
const result = document.getElementById('lbl-result');
const value = document.getElementById('lbl-value');
let firstValue = 0;
let secondValue = 0;
let operation = '';
let records = [
    {v1:'',v2:'',op:'',r:''},
    {v1:'',v2:'',op:'',r:''},
    {v1:'',v2:'',op:'',r:''},
    {v1:'',v2:'',op:'',r:''},
    {v1:'',v2:'',op:'',r:''}
];

let i = 0; //aux for insertNumber() - Resolving issues when inserting numbers
let j = 0; //aux for dotInsert() - Resolving issues with dot button 
let k = 0; //aux for equal() - Resolving issues when users click '=' multiple time 
let l = 0; //aux for insertNumber() - Resolving issue with cleaning lbl-result 
let m = 0; //aux for back() - Resolving issue with cleaning lbl-result 
let n = 0; //aux for mathOperations() - Resolving issue with making math after press operation buttons more than once 
let p = 0;  //aux to Resolve issue with operation after pressing =


/*----------------------------- Buttons functions -----------------------------*/

// BUTTONS 0 to 9
function insertNumber(number){
    if(value.innerHTML === "0" || ( i ==1 && value.innerHTML != "0.")) 
        value.innerHTML = number
    else 
        value.innerHTML += number
    if(l==1)
        result.innerHTML = '';
    resetAux();
    if(n==2) n=1;
    if(p==0){ 
        operation='';
        p=1;
    }
    
}

// BUTTONS: -, +, / and *
function mathOperations(op){
    if(n==1){
        secondValue = verifyDotEnd(value.innerHTML);
        result.innerHTML = (parseFloat(eval(firstValue+operation+secondValue).toFixed(2))) + " " + op;
        insertRecords(firstValue,secondValue,operation,value.innerHTML);
        firstValue = parseFloat(eval(firstValue+operation+secondValue).toFixed(2));
        value.innerHTML = firstValue;
        operation = op;
        
    }
    else{
        firstValue = verifyDotEnd(value.innerHTML);
        operation = op;
        result.innerHTML = firstValue + " " + op;
        
    }
    n=2;
    i=1;
    l=0;
    m=2;
    p=1;
    
}   

// BUTTON =
function equal(){
    if(operation==''){
    secondValue = verifyDotEnd(value.innerHTML);
    result.innerHTML = secondValue + " ="
    }
    else if(k==0){
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
    m=1;
    n=0;
    p=0;
}

// BUTTON .
function dotInsert(){
    if(value.innerHTML === "0" || ( i ==1 && value.innerHTML != "0.")) 
        value.innerHTML = "0."

    if(j===0){
        if(value.innerHTML.includes('.')==false)
            value.innerHTML = value.innerHTML + "."
    }
    else{
        value.innerHTML = "0.";
        if(l==1){
        result.innerHTML = '';
        operation = '';
        secondValue = '';
        }
    }
}

// BUTTON Del
function reset(){
    firstValue = 0;
    secondValue = 0;
    operation = '';
    value.innerHTML = 0;
    result.innerHTML = '';
    resetAux();
    n=0;
}

// BUTTON <
function back(){

    if(m==1){
        result.innerHTML = "";
        return;
    }
    if(m==2) return;

    if(value.innerHTML != "0"){
        value.innerHTML = value.innerHTML.substring(0,value.innerHTML.length -1);
        if(value.innerHTML.length == 0 )
        value.innerHTML = "0";
    }
    
}




/*----------------------------- Auxiliary functions -----------------------------*/

//update ol html
function updateList(){
    let list;
    let i=0;
    while(i<5){   
            list = document.getElementById('ln-'+(i+1));
            list.innerHTML = records[i].v1 + " " + records[i].op + " " + records[i].v2 + " = " + records[i].r;
            i++;
            if(records[i].v1=='' && records[i].v2=='' && records[i].op=='') 
            list.innerHTML ='';
        
    }
}

// insert math records into the array records
function insertRecords(v1,v2,op,r){
    records.unshift({v1,v2,op,r});
    records.pop();
    updateList();
}

//verify the . at the end of the lbl-value after user press = or +
function verifyDotEnd(num){
    if(num.charAt(num.length -1) === '.')
       num = num.substring(0,num.length -1)
       value.innerHTML = num;
    return num;
}

//Resolve math operation
function resolveMath(){
    result.innerHTML = firstValue + " " + operation + " " + secondValue + " =";
    var aux = result.innerHTML.replace(/ /g, "");
    value.innerHTML = parseFloat(eval(aux.substring(0, aux.length -1)).toFixed(2));
    insertRecords(firstValue,secondValue,operation,value.innerHTML);
}

// Reset Aux
function resetAux(){
    j=0;
    i=0;
    k=0;
    l=0;
    m=0;
}

//Capturing event keypress 
document.onkeydown = keyPressed;
document.onkeyup = keyUnpressed;


//Key funcionality
function keyPressed(e){
    if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
        
        insertNumber(e.key);
    }
    else if (e.keyCode === 106 || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 111
        || e.keyCode === 189 || e.keyCode === 193)
            mathOperations(e.key);
        
    else if (e.keyCode == 27 || e.keyCode == 46)
        reset()
    else if (e.keyCode == 110 || e.keyCode == 190 || e.keyCode == 188)
        dotInsert()
    else if (e.keyCode == 13 || e.keyCode == 187)
        equal()
    else if (e.keyCode == 8)
        back()

    animation(e);
}

// Change button layout when user press a key
function animation(e){
    const btn = document.getElementById(returnId(e));
    btn.style.cssText = 
    'background-color: rgba(233, 229, 229, 0.952);' +
    'color:  rgb(102, 125, 199);' +
    'box-shadow:inset 0 0 0 3px rgb(74, 96, 170);' +
    'transition: all 100ms ease;';
}

//When user unpress a key the button return to original layout
function keyUnpressed(e){
    const btn = document.getElementById(returnId(e));
    btn.style.cssText = document.querySelector(".buttons");
}

//Return the id button when user press a key
function returnId(e){
    let id ='';
    if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))
        id = 'btn-'+ e.key 

    else if (e.keyCode === 189 || e.keyCode === 109)
        id = 'btn-menos'
    else if (e.keyCode === 107)
        id = 'btn-mais'
    else if (e.keyCode === 111 || e.keyCode === 193)
        id = 'btn-dividir'      
    else if (e.keyCode === 106)
        id = 'btn-multiplicar'    
    else if (e.keyCode == 27 || e.keyCode == 46)
        id = 'btn-del'
    else if (e.keyCode == 110 || e.keyCode == 190 || e.keyCode == 188)
        id = 'btn-ponto'
    else if (e.keyCode == 13 || e.keyCode == 187)
        id = 'btn-equal'
    else if (e.keyCode == 8)
        id = 'btn-back'
    
    return id;  
}


