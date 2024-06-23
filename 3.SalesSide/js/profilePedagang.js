function editProfile(){
    const camerabtn = document.getElementById('camerabtn')
    const editbtn = document.getElementById('edit')
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

function checked(){
    const camerabtn = document.getElementById('camerabtn')
    const editbtn = document.getElementById('edit')
    const hiddenEditBtn = document.getElementsByClassName('editprof');
    const check = document.getElementById('checkmark')

    for (let i = 0; i < hiddenEditBtn.length; i++) {
        hiddenEditBtn[i].style.opacity = "0"; 
    }
    camerabtn.style.display = "none";
    editbtn.style.opacity = "100%";
    backbtn.style.display = 'flex'
    check.style.opacity = "0";
}

function checked() {
    alert("Profile changes saved!");
}

function editProfile() {
    alert("Edit profile mode enabled!");
    document.getElementById("camerabtn").style.display = "block";
    
    const profileName = document.querySelector(".name");
    const profileDesc = document.querySelector(".desc");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = profileName.innerText;
    nameInput.classList.add("edit-input");

    const descInput = document.createElement("textarea");
    descInput.value = profileDesc.innerText;
    descInput.classList.add("edit-input");

    profileName.parentNode.replaceChild(nameInput, profileName);
    profileDesc.parentNode.replaceChild(descInput, profileDesc);
}

document.getElementById("camerabtn").addEventListener("click", function() {
    alert("Change profile picture");
});

document.querySelectorAll(".editprof").forEach(function(editIcon) {
    editIcon.addEventListener("click", function() {
        editProfile();
    });
});


