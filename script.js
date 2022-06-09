const boxes = document.querySelectorAll(".container")

window.addEventListener("scroll", checkBoxes)

checkBoxes()

function checkBoxes(){
const triggerBottom = window.innerHeight / 6 * 4

boxes.forEach(container => {

    const containerTop = container.getBoundingClientRect().top

if(containerTop < triggerBottom){
    container.classList.add('show')
} else {
    container.classList.remove('show')
}

})

}