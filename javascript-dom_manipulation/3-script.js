document.getElementById("toggle_header").addEventListener("click", toggleclass)
function toggleclass(){
    const header = document.querySelector("header");
    header.classList.toggle("red");
    header.classList.toggle("green");
}