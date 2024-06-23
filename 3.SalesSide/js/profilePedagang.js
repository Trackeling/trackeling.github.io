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
