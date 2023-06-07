let inputBox = document.getElementById("todo-input");
let box = document.getElementById("buttons-div");
let btnbox = document.getElementById("Superbtn")
let list = document.querySelector(".ul-todo")
let buttons = document.querySelector(".close,.close-btn")
function addText() {
    let p = document.createElement("p")


    p.innerHTML = inputBox.value;


    inputBox.value = ""
}



function how(){
     if(inputBox.value === ""){
        alert("Nimadir yozing ...")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;

        list.appendChild(li)
        let btn = document.createElement("button")

        btn.innerHTML = "-"
        li.appendChild(btn)

        btn.addEventListener("click", function(){
            li.remove()
        })
        let btn2 = document.createElement("button")

        btn2.innerHTML = "+"
        li.appendChild(btn2)


        btn2.addEventListener("click", function(){
            li.remove()
        })
        
    }

    inputBox.value = ""
   
}

