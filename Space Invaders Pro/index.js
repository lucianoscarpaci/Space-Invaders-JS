import InvaderController from "./InvaderController.js";
import Player1 from "./Player1.js";
import laserController from "./laserController.js";
const canvas = document.getElementById("game");
const ctext = canvas.getContext("2d");

canvas.width=600;
canvas.height=600;

const background = new Image();
background.src = "game/space.png";
/* laserShootController controls the player */
const laserShootController = new laserController(canvas,10,"pink",true);
const invaderLaserController = new laserController(canvas,4,"white",false);
const invaderController = new InvaderController(
    canvas,
    invaderLaserController,
    laserShootController,
);
//const invaderController = new InvaderController(canvas, invaderLaserController);
const player = new Player1(canvas, 3, laserShootController);

let endGame = false;
let checkWin = false;

function startGame() {
   ctext.drawImage(background, 0, 0, canvas.width, canvas.height);
displayEndGame();
   if(!endGame){
   invaderController.draw(ctext);
   player.draw(ctext);
   laserShootController.draw(ctext);
   invaderLaserController.draw(ctext);
   }
}

function displayEndGame(){
    if (endGame) {
        let text = checkWin ? "You Win" : "Game Over";
        let textOffset = checkWin ? 3.5 : 5;

        ctext.fillStyle = "white";
        ctext.font = "70px Press Start 2P";
        ctext.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

function checkEndGame() {
    if(endGame){
        return;
    }

    if(invaderLaserController.collisionWith(player)){
        endGame = true;
    }
}

setInterval(startGame,1000/60);
