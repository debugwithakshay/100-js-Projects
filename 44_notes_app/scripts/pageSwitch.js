

// switch to default on refresh
function switchToDefault() {
  defualtPage.style.display = "flex";
  viewnotePage.style.display = "none";
  addnotePage.style.display = "none";
}
switchToDefault();

//switch to add note page
iconaddNote.addEventListener("click", () => {
  defualtPage.style.display = "none";
  viewnotePage.style.display = "none";
  addnotePage.style.display = "inline";
  iconaddNote.style.transform = "rotate(20deg)";
  iconviewNote.style.transform = "rotate(0deg)";
});

//switch to all notes
iconviewNote.addEventListener("click", () => {
  defualtPage.style.display = "none";
  addnotePage.style.display = "none";
  viewnotePage.style.display = "inline";
  iconaddNote.style.transform = "rotate(0deg)";
  iconviewNote.style.transform = "rotate(20deg)";
});
