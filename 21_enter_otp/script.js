let inputs = document.querySelectorAll(".input");
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
        inputs[index] = "";
      setTimeout(() => {
        inputs[index + 1].focus();
      }, 100);
    } else if(e.key === "Backspace") {
        setTimeout(() => {
            inputs[index - 1].focus();
          }, 100);
    }
  });
});
