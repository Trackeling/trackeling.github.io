function editProfile() {
    const camerabtn = document.getElementById('camerabtn');
    const editbtn = document.getElementById('edit');
    const backbtn = document.getElementById('backbtn');
    const hiddenEditBtn = document.getElementsByClassName('editprof');
    const check = document.getElementById('checkmark');

    for (let i = 0; i < hiddenEditBtn.length; i++) {
        hiddenEditBtn[i].style.opacity = "100%";
    }

    camerabtn.style.display = "block";
    editbtn.style.opacity = "0";
    backbtn.style.display = 'none';
    check.style.opacity = "100%";
}

function checked() {
    const camerabtn = document.getElementById('camerabtn');
    const editbtn = document.getElementById('edit');
    const hiddenEditBtn = document.getElementsByClassName('editprof');
    const check = document.getElementById('checkmark');
    const backbtn = document.getElementById('backbtn');

    for (let i = 0; i < hiddenEditBtn.length; i++) {
        hiddenEditBtn[i].style.opacity = "0";
    }
    camerabtn.style.display = "none";
    editbtn.style.opacity = "100%";
    backbtn.style.display = 'flex';
    check.style.opacity = "0";

    const pencilIcons = document.getElementsByClassName('editprof');
    for (let i = 0; i < pencilIcons.length; i++) {
        pencilIcons[i].style.opacity = "0";
    }
}

function saveChanges() {
    const nameInput = document.querySelector(".name .edit-input");
    const descInput = document.querySelector(".desc .edit-input");

    let changesMade = false;

    if (nameInput) {
        const nameText = nameInput.value.trim();
        const nameElement = document.querySelector(".name");
        const originalName = nameElement.textContent.trim();

        if (nameText !== originalName) {
            nameElement.textContent = nameText;
            changesMade = true;
        }
    }

    if (descInput) {
        const descText = descInput.value.trim();
        const descElement = document.querySelector(".desc");
        const originalDesc = descElement.textContent.trim();

        if (descText !== originalDesc) {
            descElement.textContent = descText;
            changesMade = true;
        }
    }

    if (changesMade) {
        const check = document.getElementById('checkmark');
        const editbtn = document.getElementById('edit');
        check.style.opacity = "0"; 
        editbtn.style.opacity = "100%"; 
        const editIcons = document.querySelectorAll(".editprof");
        editIcons.forEach(icon => icon.style.opacity = "0");

        alert("Anda hanya dapat mengedit profil Anda sekali saja");
    }
}

function editField(field) {
    const profileField = document.querySelector(`.${field}`);
    const currentText = profileField.textContent.trim();

    if (field === 'name' || field === 'desc') {
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
        });
    }
}

document.getElementById("camerabtn").addEventListener("click", function () {
    document.getElementById("uploadBanner").click();
});

document.getElementById("uploadBanner").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
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

