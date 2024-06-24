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
        danger += "Nama tidak boleh kosong\n";
        return false;
    }

    if(inputValue.length <= 3){
        danger += "Nama harus lebih dari 3 huruf\n";
        return false;
    }

    if(!regx.test(inputValue)){
        danger += "Nama harus hanya mengandung alphabet!\n";
        return false;
    }

    return true;
}

function checkSelledItem(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9\.,\s]+$/;

    if(inputValue === ''){
        danger += "Nama dagang tidak boleh kosong!\n";
        return false;
    }

    if(inputValue.length <= 10){
        danger += "Nama dagang harus lebih dari 10 huruf\n";
        return false;
    }

    if(!regx.test(inputValue)){
        danger += "Format nama dagang salah\n";
        return false;
    }
    
    return true;
}

function checkEmail(input){
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log(typeof input);

    if(inputValue === ''){
        danger += "Email tidak boleh kosong\n";
        return false;
    }

    if(!regx.test(inputValue)){
        danger += "Format email salah\n";
        return false;
    }
    
    return true;
}

function checkPass(input){
    const inputValue = input.value.trim();
    if(inputValue === ''){
        danger += "Password tidak boleh kosong!\n";
        return false;
    }
    if(inputValue.length < 8){
        danger += "Password harus lebih dari 8 karakter!\n";
        return false;
    }
    
    return true;
}

function checkSNK(input){
    if(input.checked == false){
        danger += "Anda harus menyetujui syarat dan ketentuan yang berlaku!\n";
        return false;
    }
    
    return true;
}
