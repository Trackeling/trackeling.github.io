document.addEventListener("DOMContentLoaded", function () {
  const ADDMENU = document.getElementById("ADDMENU");
  const fileInput = document.getElementById("fileInput");

  ADDMENU.addEventListener("click", function () {
      fileInput.click();
  });

  fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function (e) {
              ADDMENU.src = e.target.result;

              ADDMENU.style.width = '38vw';
              ADDMENU.style.height = '38vw';
              ADDMENU.style.borderRadius = '4.5vw';
              ADDMENU.style.objectFit = 'cover';
          };
          reader.readAsDataURL(file);
      }
  });
});

document.getElementById("simpanlanjut").addEventListener("click", function () {
  var menu = document.getElementById("namamenu").value;
  var desc = document.getElementById("namadesc").value;
  var price = document.getElementById("harganum").value;
  var category = document.getElementById("selkat").value;

  var menuWords = menu.trim().split(/\s+/);
  if (menuWords.length < 5) {
      alert("Menu harus terdiri dari lebih dari 4 kata.");
      return;
  }

  var descWords = desc.trim().split(/\s+/);
  if (descWords.length < 6) {
      alert("Deskripsi harus terdiri dari lebih dari 5 kata.");
      return;
  }

  if (!isNumeric(price)) {
      alert("Harga harus berupa angka tanpa koma.");
      return;
  }

  function isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
  }

});