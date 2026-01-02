const addBox = document.querySelector("#add"),
remove=document.querySelector("#remove"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon= popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false, updateId;

addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add a new task";
    addBtn.innerText = "Add Task";
    popupBox.classList.add("show");
    document.querySelector("body").style.overflow = "hidden";
    if(window.innerWidth > 660) titleTag.focus();
});
remove.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();

});
























let filterDesc = note.description.replaceAll('\n', '<br/>');
let liTag = `<li class="note">
                <div class="details">
                    <p>${note.title}</p>
                    <span>${filterDesc}</span>
                </div>
                <div class="bottom-content">
                    <span>${note.date}</span>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="ull ull-ellipsis-h"></i>
                        <ul class="menu">
                            <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="ull ull-pen"></i>Edit</li>


