const boom = document.querySelector("button");
const nuke = document.querySelector(".nuke");

boom.onclick = function triggerBoom() {
    console.log("you pressed the button BOOM");
    nuke.style.display = "block";
}
