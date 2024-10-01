const inputElement = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputElement.value == ''){
        alert('You must write something!');
    }else{
        let li=document.createElement("li");
        let p = document.createElement("p")
        let span = document.createElement("span");
        p.innerHTML = inputElement.value;
        span.innerHTML = "\u00d7";
        li.appendChild(p)
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputElement.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();