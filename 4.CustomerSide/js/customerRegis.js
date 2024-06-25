document.getElementById('buttonSubmit').addEventListener('click', function(event) {
    event.preventDefault(); 
    checkValidation();
});

    const nama = document.getElementById('Name');
    const address = document.getElementById('Address');
    const email = document.getElementById('Email');
    const passW = document.getElementById('PassW');
    const TermsAndCond = document.getElementById('SdanKCheck');

    var danger = '';

function checkValidation(){
    const isNameValid = checkName(nama);
    const isAddressValid = checkAddress(address);
    const isEmailValid = checkEmail(email);
    const isPassValid = checkPass(passW);
    const isSdanKAgree = checkSNK(TermsAndCond);

    if (isNameValid && isAddressValid && isEmailValid && isPassValid && isSdanKAgree) {
        location.href = "customerHome.html";
    } else {
        alert(danger);
    }
    danger = ''; 
};

function checkName(input) {
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z\s]+$/;

    if (inputValue === '') {
        danger += "Nama tidak boleh kosong!\n";
        return false;
    }

    if (inputValue.length <= 3) {
        danger += "Nama harus memiliki lebih dari 3 karakter!\n";
        return false;
    }

    if (!regx.test(inputValue)) {
        danger += "Nama hanya boleh mengandung huruf!\n";
        return false;
    }

    return true;
}

function checkAddress(input) {
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9\.,\s]+$/;

    if (inputValue === '') {
        danger += "Alamat tidak boleh kosong!\n";
        return false;
    }

    if (inputValue.length <= 10) {
        danger += "Alamat harus memiliki lebih dari 10 karakter!\n";
        return false;
    }

    if (!regx.test(inputValue)) {
        danger += "Format alamat salah!\n";
        return false;
    }

    return true;
}

function checkEmail(input) {
    const inputValue = input.value.trim();
    const regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue === '') {
        danger += "Email tidak boleh kosong!\n";
        return false;
    }

    if (!regx.test(inputValue)) {
        danger += "Format email salah!\n";
        return false;
    }

    return true;
}

function checkPass(input) {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        danger += "Password tidak boleh kosong!\n";
        return false;
    }
    if (inputValue.length < 8) {
        danger += "Password harus memiliki lebih dari 8 karakter!\n";
        return false;
    }

    return true;
}

function checkSNK(input) {
    if (!input.checked) {
        danger += "Anda harus menyetujui Syarat dan Ketentuan!\n";
        return false;
    }

    return true;
}
