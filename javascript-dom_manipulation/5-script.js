document.getElementById("update_header").addEventListener("click", updateHeader)
function updateHeader(){
    const headerText = document.querySelector("header");
    headerText.innerText = "New Header!!!"
}