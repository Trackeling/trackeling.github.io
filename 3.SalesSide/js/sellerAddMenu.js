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

function goToNextPage(){
  const isNameValid = getNameValidity(menuName);
  const isDescValid = getDescValidity(menuDesc);
  const isPriceValid = getPriceValidity(price);

  if(isNameValid && isDescValid && isPriceValid){
    location.href = "homepage(pedagang).html";
  }
  else{
    alert(danger);
    danger = '';
  }
}

function getNameValidity(input){
  const inputValue = input.value.trim();

  if(inputValue === ''){
    danger += 'Nama Produk tidak boleh kosong\n';
    return false;
  }

  return true;
}

function getDescValidity(input){
  const inputValue = input.value.trim();

  if(inputValue === ''){
    danger += 'Deskripsi Produk tidak boleh kosong\n';
    return false;
  }

  return true;
}

function getPriceValidity(input){
  const inputValue = input.value.trim();

  if(inputValue === ''){
    danger += 'Harga Produk tidak boleh kosong\n';
    return false;
  }

  return true;
}