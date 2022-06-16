const box = document.querySelector('.box')
const slots = document.querySelectorAll('.slot')
const restart_btn = document.getElementById('restart-btn')
const PAIRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let BOARD = {}
let clickCount = 0
let firstElem


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
        BOARD[slot.id] = mixedValues[i++]
        slot.addEventListener('click', clickHandler)
    })
}

const clickHandler = (e) => {
    const slot = e.target
    clickCount++
    slot.style.background = '#5f85ad'
    if (clickCount === 1) {
        slot.innerHTML = BOARD[slot.id]
        firstElem = slot
    } else {
        clickCount = 0
        slot.innerHTML = BOARD[slot.id]
        if (slot.innerHTML === firstElem.innerHTML) {
            slot.style.background = '#009300'
            firstElem.style.background = '#009300'
            slot.removeEventListener('click', clickHandler)
            firstElem.removeEventListener('click', clickHandler)
        } else {
            slot.style.background = '#f31e1e'
            firstElem.style.background = '#f31e1e'

            setTimeout(() => {
                hideCells(slot)
            }, 1000)
        }
    }
}

hideCells = (slot) => {
    setTimeout(() => {
        slot.style.background = '#00008BFF'
        firstElem.style.background = '#00008BFF'
        slot.innerHTML = ''
        firstElem.innerHTML = ''
    }, 0)
}

init()