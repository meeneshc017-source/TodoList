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
                                    

