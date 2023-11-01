const item = document.querySelector(".item")

const boxes = document.querySelectorAll(".box")

let selected

item.addEventListener("dragstart", function(e){
    selected = e.target
})

boxes.forEach((box)=>{
    box.addEventListener("dragover", function(e){
        e.preventDefault()
    })
    box.addEventListener("drop", function(e){
        e.target.append(selected)
    })
})
