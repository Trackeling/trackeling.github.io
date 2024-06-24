let nameEdited = false;
let descEdited = false;
let backgroundEdited = false;
let profilePhotoEdited = false;

function editProfile() {
    const editIcons = document.getElementsByClassName('editprof');
    for (let i = 0; i < editIcons.length; i++) {
        editIcons[i].style.opacity = "100%";
    }

    const camerabtn = document.getElementById('camerabtn');
    const camerabtn2 = document.getElementById('camerabtn2');
    const editbtn = document.getElementById('edit');
    const check = document.getElementById('checkmark');

    if (!backgroundEdited) {
        camerabtn.style.display = "block";
    } else {
        camerabtn.style.display = "none";
    }

    if (!profilePhotoEdited) {
        camerabtn2.style.display = "block";
    } else {
        camerabtn2.style.display = "none";
    }

    editbtn.style.opacity = "0";
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

    const camerabtn2 = document.getElementById('camerabtn2');
    camerabtn2.style.display = "none"; 

    const editbtn = document.getElementById('edit');
    const check = document.getElementById('checkmark');

    editbtn.style.opacity = "100%";
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

    const profilePhotoInput = document.getElementById("uploadPhoto");
    const profilePhotoFile = profilePhotoInput.files[0];
    if (profilePhotoFile && !profilePhotoEdited) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profilephoto").src = e.target.result;
        }
        reader.readAsDataURL(profilePhotoFile);
        changesMade = true;
        profilePhotoEdited = true;
    } else if (profilePhotoFile && profilePhotoEdited) {
        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
        return;
    }

    if (changesMade) {
        checked(); 
        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
    }
}

function editField(field) {
    const profileField = document.querySelector(`.${field}`);
    const currentText = profileField.textContent.trim();

    if ((field === 'name' && !nameEdited) || (field === 'desc' && !descEdited) || (field === 'banner' && !backgroundEdited) || (field === 'photo' && !profilePhotoEdited)) {
        const inputElement = document.createElement(field === 'name' || field === 'desc' ? "input" : "textarea");
        inputElement.value = currentText;
        inputElement.classList.add("edit-input");

        profileField.innerHTML = '';
        profileField.appendChild(inputElement);

        if (field === 'banner') {
            document.getElementById("uploadBanner").click();
        } else if (field === 'photo') {
            document.getElementById("uploadPhoto").click();
        }

        inputElement.addEventListener('change', function () {
            profileField.textContent = inputElement.value;
            if (field === 'name') {
                nameEdited = true;
            } else if (field === 'desc') {
                descEdited = true;
            }
        });
    } else if ((field === 'banner' && backgroundEdited) || (field === 'photo' && profilePhotoEdited)) {
        alert("Anda hanya dapat mengubah setiap bagian dari profil Anda satu kali selama 3 bulan");
    }
}

document.getElementById("camerabtn").addEventListener("click", function () {
    document.getElementById("uploadBanner").click();
});

document.getElementById("camerabtn2").addEventListener("click", function () {
    document.getElementById("uploadPhoto").click();
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

document.getElementById("uploadPhoto").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file && !profilePhotoEdited) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profilephoto").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const check = document.getElementById('checkmark');
    check.addEventListener('click', checked);
});

