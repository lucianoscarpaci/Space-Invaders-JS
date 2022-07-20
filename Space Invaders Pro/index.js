import InvaderController from "./InvaderController.js";
import Player1 from "./Player1.js";
import laserController from "./laserController.js";
const canvas = document.getElementById("game");
const ctext = canvas.getContext("2d");
canvas.width=600;
canvas.height=600;

const background = new Image();
background.src = "game/space.png";

const laserShootController = new laserController(canvas,10,"pink",true);
//const invaderLaserController = new laserShootController(canvas,4,"white",false);
//const invaderController = new InvaderController(canvas, invaderLaserController);
//const player = new Player1(canvas, 3, laserShootController);

function startGame() {
    ctext.drawImage(background,0,0, canvas.width, canvas.height);
   // InvaderController.draw(ctext);
   // Player1.draw(ctext);
   laserShootController.draw(ctext);
}

setInterval(startGame,1000/60);
