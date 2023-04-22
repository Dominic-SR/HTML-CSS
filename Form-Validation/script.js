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

// check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less then ${max} characters`)
    }else{
        showSuccess(input)
    }
}

// check email is valid
function checkEmail(input){
     const re = "<>"
    // /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|
    // (".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-
    // zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "E-Mail is Not Valid")
    }
}

// check password match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2, "Password do not match")
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkRequired([username, email, password, password, CPassword]);
    checkLength(username, 3, 15);
    checkLength(password , 8, 25);
    checkEmail(email);
    checkPasswordMatch(password, CPassword)
});