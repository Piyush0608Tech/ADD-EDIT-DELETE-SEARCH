const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const fruittoadd = document.getElementById("fruit-to-add");
    const newli = document.createElement("li");
    const newlitext = document.createTextNode(fruittoadd.value);
    newli.appendChild(newlitext);
    const del = document.createElement("button");
    const deltext = document.createTextNode("x");
    del.appendChild(deltext);
    del.className="delete-btn"
    newli.appendChild(del);
    const edit = document.createElement("button");
    const edittext = document.createTextNode("edit");
    edit.appendChild(edittext);
    edit.className="edit-btn"
    newli.appendChild(edit);
    fruits.appendChild(newli);
})

fruits.addEventListener("click", function(event){
    if(event.target.classList.contains("delete-btn")){
        const frudel = event.target.parentElement;
        fruits.removeChild(frudel);
    }
})

const filter = document.getElementById("filter");
filter.addEventListener("keyup", function(event){
    const textentered = event.target.value.toLowerCase();
    const fi = document.getElementsByClassName("fruit");
    for (let  i= 0;  i< fi.length; i++) {
        const cf = fi[i].firstChild.textContent.toLowerCase();
        if(cf.indexOf(textentered)=== -1){
            fi[i].style.display="none";
        }
        
    }

})