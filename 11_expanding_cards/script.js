let panels = document.querySelectorAll(".panel");

for (let panel of panels) {
  panel.addEventListener("click", () => {
    pastPanel = document.querySelector(".active");
    pastPanel.classList.remove("active");
    panel.classList.add("active");
  });
}
