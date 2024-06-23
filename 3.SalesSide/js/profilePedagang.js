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

function uploadBannerImage(event) {
    const banner = document.getElementById('banner');
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        banner.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
}

function editName() {
    const name = document.getElementById('name');
    const nameInput = document.getElementById('nameInput');
    
    name.style.display = 'none';
    nameInput.style.display = 'block';
    nameInput.value = name.innerText.trim();
}

function editDesc() {
    const desc = document.getElementById('desc');
    const descInput = document.getElementById('descInput');
    
    desc.style.display = 'none';
    descInput.style.display = 'block';
    descInput.value = desc.innerText.trim();
}

function saveProfile() {
    const name = document.getElementById('name');
    const nameInput = document.getElementById('nameInput');
    const desc = document.getElementById('desc');
    const descInput = document.getElementById('descInput');

    if (nameInput.style.display === 'block') {
        name.innerText = nameInput.value;
        name.style.display = 'block';
        nameInput.style.display = 'none';
    }

    if (descInput.style.display === 'block') {
        desc.innerText = descInput.value;
        desc.style.display = 'block';
        descInput.style.display = 'none';
    }
}

document.getElementById('camerabtn').addEventListener('click', function() {
    document.getElementById('uploadBackground').click();
});

document.getElementById('checkmark').addEventListener('click', saveProfile);

