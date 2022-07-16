const grid_space = document.querySelector('.grid')
const display_results = document.querySelector('.results')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersid = null
let goingRight = true
let Aliens_removed = []
let results = 0

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
        if(!Aliens_removed.includes(i)) {
            each_square[Aliens[i]].classList.add('invaders')
        }
    }
}

display()

function remove_aliens() {
        for (let i=0; i < Aliens.length; i++) {
            if(!Aliens_removed.includes(i)) {
            each_square[Aliens[i]].classList.remove('invaders')
        }
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

function move_alien() {
    const LeftEdge = Aliens[0] % width === 0
    const RightEdge = Aliens[Aliens.length - 1] % width === width - 1
    remove_aliens()

    if (RightEdge && goingRight) {
        for (let i=0; i < Aliens.length; i++) {
            Aliens[i] += width +1
            direction = -1
            goingRight = false
        }
    }

    if (LeftEdge && !goingRight) {
        for (let i=0; i < Aliens.length; i++) {
            Aliens[i] += width -1
            direction = 1
            goingRight = true
        }
    }

    for (let i=0; i<Aliens.length; i++) {
        Aliens[i] += direction
    }
    
    display()

    if (each_square[currentShooterIndex].classList.contains('invaders', 'shooter')) {
        display_results.innerHTML = 'GAME OVER'
        clearInterval(invadersid)
    }

    for (let i=0; i < Aliens.length; i++) {
        if(Aliens[i] > (each_square.length + 100)) {
            display_results.innerHTML = 'GAME OVER'
            clearInterval(invadersid)
        }
    }
    if (remove_aliens.length === Aliens.length) {
        display_results.innerHTML = 'YOU WIN'
        clearInterval(invadersid)
    }
}
invadersid = setInterval(move_alien, 300)

function shoot(a) {
    let laser_id
    let current_laser_index = currentShooterIndex
    function move_laser() {
        each_square[current_laser_index].classList.remove('laser')
        current_laser_index -= width
        each_square[current_laser_index].classList.add('laser')
        if (each_square[current_laser_index].classList.contains['invaders']) {
            each_square[current_laser_index].classList.remove('laser')
            each_square[current_laser_index].classList.remove('invaders')
            each_square[current_laser_index].classList.add('kaboom')

            setTimeout(()=> each_square[current_laser_index].classList.remove('kaboom'), 300)
            clearInterval(laser_id)

            const Aliens_removed = Aliens.indexOf(current_laser_index)
            Aliens_removed.push(Aliens_removed)
            results++
            display_results.innerHTML = results
            console.log(remove_aliens)

        }

    }
    switch(a.key) {
        case'ArrowUp':
            laser_id = setInterval(move_laser, 100)
    }
}

document.addEventListener('keydown', shoot)