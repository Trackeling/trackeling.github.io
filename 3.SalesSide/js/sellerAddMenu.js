document.addEventListener('DOMContentLoaded', function() {
    const selledItemValue = localStorage.getItem('selledItem');
    if (selledItemValue) {
        document.querySelector('.namaDagang').innerText = selledItemValue;
    }
});

const menuName = document.getElementById('namaMenu');
const menuDesc = document.getElementById('DescMenu');
const price = document.getElementById('price');
var danger = '';

function previewProfilePhotoGerobak(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("ImageGerobak").src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function previewProfilePhotoPenjual(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("MukaPedagang").src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function previewFotoMenu(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("FotoMenu").src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function editDeskripsiDagangan() {
    var pElement = document.querySelector('.deskripsiDagang');
    var inputElement = document.getElementById('inputDeskripsiDagang');
    inputElement.value = pElement.innerText;
    pElement.classList.add('hidden');
    inputElement.classList.remove('hidden');
    inputElement.focus();
}

function saveDeskripsiDagangan() {
    var pElement = document.querySelector('.deskripsiDagang');
    var inputElement = document.getElementById('inputDeskripsiDagang');
    pElement.innerText = inputElement.value;
    inputElement.classList.add('hidden');
    pElement.classList.remove('hidden');
}

document.getElementById("simpanlanjut").addEventListener("click", function () {
    var menu = document.getElementById("namamenu").value;
    var desc = document.getElementById("namadesc").value;
    var price = document.getElementById("harganum").value;
    var category = document.getElementById("selkat").value;
    var backgroundPhoto = document.getElementById("ImageGerobak").value;
    var profilePhoto = document.getElementById("MukaPedagang").value;
    var menuPhoto = document.getElementById("FotoMenu").value;
    var description = document.getElementById("inputDeskripsiDagang").value;

    var menuTrim = menu.trim();
    if (menuTrim.length <= 4) {
        alert("Menu harus terdiri dari lebih dari 4 huruf.");
        return;
    }

    var descTrim = desc.trim();
    if (descTrim.length <= 5) {
        alert("Deskripsi harus terdiri dari lebih dari 5 huruf.");
        return;
    }

    if (!isNumeric(price)) {
        alert("Harga harus berupa angka tanpa koma.");
        return;
    }

    if (backgroundPhoto === '' || backgroundPhoto === 'assets/icons/iconGerobak.png') { 
        alert("Foto background harus diisi.");
        return;
    }
    
    if (profilePhoto === '' || profilePhoto === 'assets/images/DefaultFoto.png') { 
        alert("Foto profil harus diisi.");
        return;
    }
    
    if (menuPhoto === '' || menuPhoto === 'assets/icons/BackgroundFotomenu.png') { 
        alert("Foto menu harus diisi.");
        return;
    }

    if (description.trim() === '') {
        alert("Deskripsi dagangan harus diisi.");
        return;
    }

    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    window.location.href = "homepage(pedagang).html";
});


