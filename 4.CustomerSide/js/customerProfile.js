document.addEventListener("DOMContentLoaded", function () {
    const cameraIcon = document.getElementById("cameraIcon");
    const fileInput = document.getElementById("fileInput");
    const profilePicTop = document.getElementById("profilePic");
    const profilePicMain = document.getElementById("profilePic2");
    
    cameraIcon.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicMain.src = e.target.result;
                profilePicTop.src = e.target.result;

                profilePicMain.style.width = '38vw';
                profilePicMain.style.height = '38vw';
                profilePicMain.style.borderRadius = '50%';
                profilePicMain.style.objectFit = 'cover';

                profilePicTop.style.width = '12vw';
                profilePicTop.style.height = '12vw';
                profilePicTop.style.borderRadius = '50%';
                profilePicTop.style.objectFit = 'cover';
            };
            reader.readAsDataURL(file);
        }
    });
});

document.getElementById("simpanlanjut").addEventListener("click", function() {
    var nama = document.getElementById("namanama").value;
    var alamat = document.getElementById("Alamattemting").value;
    var email = document.getElementById("alamatemail").value;

    if (!email.endsWith("@gmail.com")) {
        alert("Alamat email harus berakhir dengan @gmail.com");
        return;
    }

    var namaWords = nama.trim().split(" ");
    if (namaWords.length > 2) {
        alert("Nama harus terdiri dari 2 kata");
        return;
    }

    var alamatWords = alamat.trim().split(" ");
    if (alamatWords.length > 9) {
        alert("Alamat tidak boleh lebih dari 9 kata");
        return;
    }

    document.getElementById("namanama").setAttribute("placeholder", nama);
    document.getElementById("alamatemail").setAttribute("placeholder", email);
    document.getElementById("Alamattemting").setAttribute("placeholder", alamat);

    document.getElementById("namanama").value = "";
    document.getElementById("alamatemail").value = "";
    document.getElementById("Alamattemting").value = "";
});