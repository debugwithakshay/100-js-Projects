let circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
  circle.style.cssText = `left:${e.clientX}px; top:${e.clientY}px`;
});
