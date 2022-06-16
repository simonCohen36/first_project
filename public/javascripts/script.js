const box = document.querySelector('.box')
const slots = document.querySelectorAll('.slot')
const PAIRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const handleClick = () => {

}

const shuffleElements = () => {
    let elements = PAIRS.concat(PAIRS)
    let currentIndex = elements.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = elements[currentIndex]
        elements[currentIndex] = elements[randomIndex]
        elements[randomIndex] = temporaryValue
    }
    return elements
}

const init = () => {
    let mixedValues = shuffleElements()

    let i = 0
    slots.forEach(slot => {
        slot.innerHTML = String(mixedValues[i++])
        slot.addEventListener('click', handleClick)
    })
}

init()