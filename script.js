
function insertNumber(number){
    const input = document.querySelector("#txt-valor");
    if(input.value==="0")
         input.value = number
    
    else
    input.value += number
    

}