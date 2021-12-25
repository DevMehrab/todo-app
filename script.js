var evnt = document.querySelector(".event");
var date = document.querySelector(".date");
var links = document.querySelector(".links");
var btn = document.querySelector(".btn");
var hd1 = document.querySelector(".hd1");


btn.addEventListener("click", function () {
   hd1.classList.remove("hd1")
    if (evnt.value===''){
        alert("input can't be empty")
    }
    else{
        var todo = {
            task: evnt.value,
            time: date.value
        }
        var newTask = document.createElement("p");
        newTask.classList.add("task")
        newTask.innerHTML = (evnt.value)
    
        var newTime = document.createElement("p");
        newTime.classList.add("time")
        newTime.innerHTML = (date.value);
    
        var newDiv = document.createElement("div");
        newDiv.classList.add("link")
        newDiv.appendChild(newTask)
        newDiv.appendChild(newTime)
        links.appendChild(newDiv)

        newDiv.addEventListener("click", function(){
            newDiv.classList.toggle("taskdone");
        })
        newDiv.addEventListener("dblclick", function(){
            newDiv.remove();
        })
    }
    evnt.value= '';
    date.value='';
})