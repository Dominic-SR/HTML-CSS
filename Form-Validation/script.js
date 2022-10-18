const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const CPassword = document.getElementById("c-password");

//show Error Message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = message
}

//show Success Message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.add("success");
}

//Check Rquired Fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`)
        }
        else{
            showSuccess(input);
        }
    });
}

function getElementById(input){
    return input.id.CharAt(0).toUpperCase() + input.id.slice(1);
}