const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");
console.log("Form submitted");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const fruitadd= document.getElementById("fruit-to-add");
    const newli = document.createElement("li");
    const newliText = document.createTextNode(fruitadd.value);
    newli.appendChild(newliText);
    const delt = document.createElement("button");
    const delttext = document.createTextNode("x");
    delt.appendChild(delttext);
    delt.className="delete-btn";
    newli.appendChild(delt);
    const edit = document.createElement("button");
    const edittext = document.createTextNode("Edit");
    edit.appendChild(edittext);
    edit.className="edit-btn";
    newli.appendChild(edit);
    fruits.appendChild(newli);
     
})

fruits.addEventListener("click", function(event){
    if ( event.target.classList.contains("delete-btn")){
        const del = event.target.parentElement;
        fruits.removeChild(del);
    }
})

