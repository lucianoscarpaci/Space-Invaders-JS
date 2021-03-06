const grid_space = document.querySelector('.grid')
const display_results = document.querySelector('.results')
const display_levels = document.querySelector('.level')
let currentShooterIndex = 202
let width = 15
let direction = 1
let invadersid
let goingRight = true
let Aliens_removed = []
let results = 0

for (let i = 0; i < 225; i++) {
    const small_square = document.createElement('div')
    grid_space.appendChild(small_square)
}

const eachSquare = Array.from(document.querySelectorAll('.grid div'))


const Aliens = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function display() {
    for (let i=0; i < Aliens.length; i++) {
        if(!Aliens_removed.includes(i)) {
            eachSquare[Aliens[i]].classList.add('invaders')
        }
    }    
}


display()

function remove_aliens() {
    for (let i = 0; i < Aliens.length; i++) {
        eachSquare[Aliens[i]].classList.remove('invaders')
    }
}


eachSquare[currentShooterIndex].classList.add('shooter')



function make_move(a) {
    eachSquare[currentShooterIndex].classList.remove('shooter')
    switch(a.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex +=1
            break
    }
    eachSquare[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', make_move)

function move_alien() {
    const LeftEdge = Aliens[0] % width === 0
    const RightEdge = Aliens[Aliens.length - 1] % width === width -1
    remove_aliens()

    if (RightEdge && goingRight) {
        for (let i = 0; i < Aliens.length; i++) {
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

    if (eachSquare[currentShooterIndex].classList.contains('invaders', 'shooter')) {
        display_levels.innerHTML = 'YOU LOOSE!'
        display_results.innerHTML = 'GAME OVER'
        clearInterval(invadersid)
    }

    for (let i=0; i < Aliens.length; i++) {
        if(Aliens[i] > (eachSquare.length)) {
            display_results.innerHTML = 'GAME OVER'
            clearInterval(invadersid)
        }
    }
    if (Aliens_removed.length === Aliens.length) {
        display_levels.innerHTML = 'GAME OVER'
        display_results.innerHTML = 'YOU WIN!'
        clearInterval(invadersid)
    }
}
invadersid = setInterval(move_alien, 600)


function shoot(a) {
    let laser_id
    let currentLaserIndex = currentShooterIndex
    function move_laser() {
        eachSquare[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        eachSquare[currentLaserIndex].classList.add('laser')


        if (eachSquare[currentLaserIndex].classList.contains('invaders')) {
         eachSquare[currentLaserIndex].classList.remove('laser')
         eachSquare[currentLaserIndex].classList.remove('invaders')
         eachSquare[currentLaserIndex].classList.add('kaboom')

         setTimeout(()=> eachSquare[currentLaserIndex].classList.remove('kaboom'), 300)
         clearInterval(laser_id)

         const Alien_removed = Aliens.indexOf(currentLaserIndex)
         Aliens_removed.push(Alien_removed)
         results += 250
         let scoreText = "Score: "
         display_results.innerHTML = scoreText.concat(results)
         console.log(Aliens_removed)

        
        }

    }
    switch(a.key) {
        case'ArrowUp':
            laser_id = setInterval(move_laser, 100)
    }
}

document.addEventListener('keydown', shoot)