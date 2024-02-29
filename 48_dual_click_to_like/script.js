let post = document.querySelector(".post");
let likeIcon = document.querySelector(".like-icon");
let likeCount = document.querySelector(".like_count");

let postStatus = "unlike";

post.addEventListener("dblclick", doLike);
likeIcon.addEventListener("click", doLike);

function doLike() {
  if (postStatus == "unlike") {
    likeIcon.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2048px-Heart_coraz%C3%B3n.svg.png"
    );

    likeCount.innerText++;
    postStatus = "like";
    likeIcon.style.transform = "scale(1.5)";
    setTimeout(() => {
      likeIcon.style.transform = "scale(1)";
    }, 500);
  } else if (postStatus == "like") {
    likeIcon.setAttribute(
      "src",
      "https://www.svgrepo.com/show/117783/heart.svg"
    );
    likeCount.innerText--;
    postStatus = "unlike";
    likeIcon.style.transform = "scale(1.5)";
    setTimeout(() => {
      likeIcon.style.transform = "scale(1)";
    }, 500);
  }
}
