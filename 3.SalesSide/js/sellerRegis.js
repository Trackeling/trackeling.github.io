const nama = document.getElementById('Name');
const selledItem = document.getElementById('sell');
const email = document.getElementById('Email');
const passW = document.getElementById('PassW');
const TermsAndCond = document.getElementById('SdanKCheck');

var danger = '';

function checkValidation(){
    const isNameValid = checkName(nama);
    const isAddressValid = checkSelledItem(selledItem);
    const isEmailValid = checkEmail(email)
    const isPassValid = checkPass(passW);
    const isSdanKAggree = checkSNK(TermsAndCond);

    if(isNameValid && isAddressValid && isEmailValid && isPassValid && isSdanKAggree){
        location.href = "sellerAddMenu.html";
    }
    else{
        alert(danger);
    }
    danger = '';
}

function checkName(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z\s]+$/;
    
    if(inputValue === ''){
        danger += "Name shouldn't be empty!\n";
        return false;
    }

    if(inputValue.length <= 3){
        danger += "Name should have more than 3 characters\n";
        return false;
    }

    if(!regx.test(inputValue)){
        danger += "Name should only contain alphabet!\n";
        return false;
    }

    return true;
}

function checkSelledItem(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9\.,\s]+$/;

    if(inputValue === ''){
        danger += "Shop name shouldn't be empty!\n";
        return false;
    }

    if(inputValue.length <= 10){
        danger += "Shop name should have more than 10 characters\n";
        return false;
    }

    if(!regx.test(inputValue)){
        danger += "Wrong shop name format!\n";
        return false;
    }
    
    return true;
}

function checkEmail(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log(typeof input);

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

function checkPass(input){
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

function checkSNK(input){
    if(input.checked == false){
        danger += "You must agree to the terms and agreement!\n";
        return false;
    }
    
    return true;
}