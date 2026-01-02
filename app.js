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

closeIcon.addEventListener("click" , ()=>{
    isUpdate=false;
    titleTag.value= descTag.value= "";
    popupBox.classList.remove("show");
    document.querySelector("body").style.overflow = "auto";
});

function showNotes(){
    if(!notes) return;
    document.querySelectorAll(".note").forEach(li => li.remove());
    notes.forEach((note, id) => {
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
                                    <li onclick="deleteNote(${id})"><i class="ull ull-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
       addBox.insertAdjacentHTML("afterend", liTag); 
    });
}
showNotes();

function showMenu(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem){
            elem.parentElement.classList.remove("show");
        }
    });
}

function deleteNote(noteId) {
    let confirmDel = confirm("Do you really want to delete this note?");
    if (confirmDel) {
        notes.splice(noteId, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
    }
}

function updateNote(noteId, title, filterDesc) {
    let description = filterDesc.replaceAll('<br/>', '\n');
    isUpdate = true;
    updateId = noteId;
    addBox.click();
    titleTag.value=title;
    descTag.value = description;
    popupTitle.innerText = "Update a task";
    addBtn.innerText = "Update Task";
}

