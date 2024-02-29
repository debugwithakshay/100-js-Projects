let generateBtn = document.querySelector(".generateBtn");
let inputText = document.querySelector(".inputText");
let qrCode = document.querySelector(".qrcode--img");
let downloadBtn = document.querySelector(".downloadImg");

// generating QR
generateBtn.addEventListener("click", generate);
function generate() {
  qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;
}
