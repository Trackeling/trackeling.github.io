let nameEdited = false;
let descEdited = false;
let backgroundEdited = false;

function editProfile() {
    const editIcons = document.getElementsByClassName('editprof');
    for (let i = 0; i < editIcons.length; i++) {
        editIcons[i].style.opacity = "100%";
    }

    const camerabtn = document.getElementById('camerabtn');
    const editbtn = document.getElementById('edit');
    const backbtn = document.getElementById('backbtn');
    const check = document.getElementById('checkmark');

    if (!backgroundEdited) {
        camerabtn.style.display = "block";
    } else {
        camerabtn.style.display = "none";
    }

    editbtn.style.opacity = "0";
    backbtn.style.display = 'none';
    check.style.opacity = "100%";

    alert("Anda hanya dapat mengubah profil Anda sekali dalam 3 bulan");
}

function checked() {
    const editIcons = document.getElementsByClassName('editprof');
    for (let i = 0; i < editIcons.length; i++) {
        editIcons[i].style.opacity = "0";
    }

    const camerabtn = document.getElementById('camerabtn');
    camerabtn.style.display = "none"; 

    const editbtn = document.getElementById('edit');
    const backbtn = document.getElementById('backbtn');
    const check = document.getElementById('checkmark');

    editbtn.style.opacity = "100%";
    backbtn.style.display = 'flex';
    check.style.opacity = "0";
}

function saveChanges() {
    let changesMade = false;

    const nameInput = document.querySelector(".name .edit-input");
    if (nameInput && !nameEdited) {
        const nameText = nameInput.value.trim();
        const nameElement = document.querySelector(".name");
        const originalName = nameElement.textContent.trim();
        if (nameText !== originalName) {
            nameElement.textContent = nameText;
            changesMade = true;
            nameEdited = true;
        }
    }

    const descInput = document.querySelector(".desc .edit-input");
    if (descInput && !descEdited) {
        const descText = descInput.value.trim();
        const descElement = document.querySelector(".desc");
        const originalDesc = descElement.textContent.trim();
        if (descText !== originalDesc) {
            descElement.textContent = descText;
            changesMade = true;
            descEdited = true;
        }
    }

    const fileInput = document.getElementById("uploadBanner");
    const file = fileInput.files[0];
    if (file && !backgroundEdited) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("bannerImg").src = e.target.result;
        }
        reader.readAsDataURL(file);
        changesMade = true;
        backgroundEdited = true; 
    } else if (file && backgroundEdited) {
        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
        return;
    }

    if (changesMade) {
        const editIcons = document.getElementsByClassName('editprof');
        for (let i = 0; i < editIcons.length; i++) {
            editIcons[i].style.opacity = "0";
        }

        const check = document.getElementById('checkmark');
        const editbtn = document.getElementById('edit');
        check.style.opacity = "0"; 
        editbtn.style.opacity = "100%"; 

        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
        checked(); 
    } else {
        alert("Tidak ada perubahan");
    }
}

function editField(field) {
    const profileField = document.querySelector(`.${field}`);
    const currentText = profileField.textContent.trim();

    if ((field === 'name' && !nameEdited) || (field === 'desc' && !descEdited) || (field === 'banner' && !backgroundEdited)) {
        const inputElement = document.createElement(field === 'name' ? "input" : "textarea");
        inputElement.value = currentText;
        inputElement.classList.add("edit-input");

        profileField.innerHTML = '';
        profileField.appendChild(inputElement);

        if (field === 'banner') {
            document.getElementById("uploadBanner").click();
        }

        inputElement.addEventListener('change', function () {
            profileField.textContent = inputElement.value;
            if (field === 'name') {
                nameEdited = true;
            } else if (field === 'desc') {
                descEdited = true;
            }
        });
    } else if (field === 'banner' && backgroundEdited) {
        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
    }
}

document.getElementById("camerabtn").addEventListener("click", function () {
    document.getElementById("uploadBanner").click();
});

document.getElementById("uploadBanner").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && !backgroundEdited) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("bannerImg").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('checkmark');
    check.addEventListener('click', checked);
});

