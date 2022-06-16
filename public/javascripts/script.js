const box = document.querySelector('.box')
const slots = document.querySelectorAll('.slot')

const handleClick = () => {

}

const init = () => {
    slots.forEach(slot => {
        slot.addEventListener('click', handleClick)
    })
}

init()