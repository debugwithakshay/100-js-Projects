let link = document.querySelector("#link")
let copyIcon = document.querySelector(".copy-icon")
let copyFlag = document.querySelector(".copy_flag")

link.value = "https:fileshare.io/001-51"

// initilize copy flag
copyIcon.addEventListener("click", function(){
  copyFlag.style.display = "inline-block"
  navigator.clipboard.writeText(link.value)

  setTimeout(() => {
    copyFlag.style.display = "none"
  }, 3000);
});