const grid_space = document.querySelector('grid')
let currentShooterIndex = 202
let width = 15

for (let i = 0; i < 225; i++) {
    const small_square = document.createElement('div')
    grid_space.appendChild(small_square)
}

const each_square = Array.from(document.querySelectorAll('.grid div'))


const Aliens = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function display() {
    for (let i=0; i < Aliens.length; i++) {
        each_square[Aliens[i]].classList.add('invaders')
    }
}

each_square[currentShooterIndex].classList.add('shooter')

function make_move(a) {
    each_square[currentShooterIndex].classList.remove('shooter')
    switch(a.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex +=1
            break
    }
    each_square[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', make_move)

