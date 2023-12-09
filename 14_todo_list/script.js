let input = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");
let listCard = document.querySelector(".list_card");

addBtn.addEventListener("click", addingList);
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addingList();
  }
});

//adding a list
function addingList() {
  if (input.value !== "") {
    let listBox = document.createElement("ul");
    listCard.appendChild(listBox);
    listBox.classList.add("listBox");

    let list = document.createElement("div");
    let divider = document.createElement("div");
    listBox.appendChild(list);
    list.classList.add("list");
    listBox.appendChild(divider);
    divider.classList.add("divider");

    let listContent = document.createElement("li");
    listContent.innerText = input.value;
    input.value = "";
    listContent.classList.add("listText");
    list.appendChild(listContent);

    let deleteIcon = document.createElement("span");
    list.appendChild(deleteIcon);
    deleteIcon.classList.add("material-symbols-outlined");
    deleteIcon.classList.add("delete_icon");
    deleteIcon.innerText = "delete";

    // deleting a list
    deleteIcon.addEventListener("click", () => {
      listBox.remove();
      progressCircle();
    });

    //completing task
    listContent.addEventListener("click", () => {
      listContent.classList.toggle("completed");
      progressCircle();
    });

    //progress circle
    function progressCircle() {
      let listBoxes = document.querySelectorAll(".listBox");
      let completedTasks = document.querySelectorAll(".completed");
      let totalTaskNumber = document.querySelector(".totalTaskNumber");
      let completedTaskNumber = document.querySelector(".completedTaskNumber");
      let circularProgress = document.querySelector(".circular_progress");
      totalTaskNumber.innerText = listBoxes.length;
      completedTaskNumber.innerText = completedTasks.length;
        circularProgress.style.background = `conic-gradient(#4d4dff ${(completedTaskNumber.innerText / totalTaskNumber.innerText * 100) * 3.6}deg, #dcdcdc 0deg)`
    }

    progressCircle();
  }
}
