const NotesContainer = document.querySelector('.notes-container');
const Button = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

Button.addEventListener("click",function(){
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    NotesContainer.appendChild(inputBox).appendChild(img);

})
NotesContainer.addEventListener("click",function(e){
    if(e.target.tagName == 'IMG'){
        e.target.parentElement.remove();
    }
})