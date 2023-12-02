let leftbox = document.querySelector(".boxleft");
let rightbox = document.querySelector(".boxright");
let lists = document.querySelectorAll(".list")

for(let list of lists){
    list.addEventListener("drag", function(e){
        let selectedList = e.target
        
        rightbox.addEventListener("dragover", function(e){
            e.preventDefault()
        })

        rightbox.addEventListener("drop", function(e){
            rightbox.appendChild(selectedList)
            selectedList = null
        })

        leftbox.addEventListener("dragover", function(e){
            e.preventDefault()
        })

        leftbox.addEventListener("drop", function(e){
            leftbox.appendChild(selectedList)
            selectedList = null
        })
    })
}