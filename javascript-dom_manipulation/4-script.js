document.getElementById("add_item").addEventListener("click", add_li)
function add_li(){
    const ul = document.querySelector("ul.my_list");
    const li = document.createElement("li");
    li.innerHTML = "Item";
    ul.appendChild(li);
}