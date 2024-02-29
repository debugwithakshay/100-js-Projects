let btn = document.querySelector(".btn");
let toast = document.querySelector(".toast");


btn.addEventListener("click", () => {
    toast.style.opacity = "1"
    toast.style.transform = "translateY(-4rem)"

    setTimeout(() => {
        toast.style.opacity = "0"
        toast.style.transform = "translateY(2rem)"
    }, 3000)
})