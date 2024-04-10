const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".accordion-description");

    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector(".accordion-icon").style.transform = "rotate(45deg)";
    } else {
      description.style.height = `${0}px`;
      item.querySelector(".accordion-icon").style.transform = "rotate(0deg)";
    }
  });
});
