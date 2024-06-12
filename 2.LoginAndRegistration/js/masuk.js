const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
var danger = '';

function redirectToNextPage(){
    const isEmailValid = checkEmailValidity(inputEmail);
    const isPasswordValid = checkPasswordValidity(inputPassword);

    if(isEmailValid && isPasswordValid){
        location.href = "../3.SalesSide/homepage(pedagang).html";
    }
    else{
        alert(danger);
        danger = '';
    }

}

function checkEmailValidity(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(inputValue === ''){
        danger += "Email shouldn't be empty!\n";
        return false;
    }
    if(!regx.test(inputValue)){
        danger += "Wrong email format!\n";
        return false;
    }
    
    return true;
}

function checkPasswordValidity(input){
    const inputValue = input.value.trim();
    if(inputValue === ''){
        danger += "Password shouldn't be empty!\n";
        return false;
    }
    if(inputValue.length < 8){
        danger += "Password should be more than 8 characters!\n";
        return false;
    }
    
    return true;
}