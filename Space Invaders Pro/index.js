import InvaderController from "./InvaderController.js";
import Player1 from "./Player1.js";
import laserController from "./laserController.js";
const canvas = document.getElementById("game");
const ctext = canvas.getContext("2d");
canvas.width=600;
canvas.height=600;

const background = new Image();
background.src = "game/space.png";

const laserShootController = new laserShootController(canvas,10,"pink",true);
const invaderController = new InvaderController(canvas);
const player = new Player1(canvas, 3, laserShootController);

function startGame() {
    ctext.drawImage(background,0,0, canvas.width, canvas.height);
    invaderController.draw(ctext);
    player.draw(ctext);
}

setInterval(startGame,1000/60);
