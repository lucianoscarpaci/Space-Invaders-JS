import InvaderController from "./InvaderController.js";
const canvas = document.getElementById("game");
const ctext = canvas.getContext("2d");
canvas.width=600;
canvas.height=600;

const background = new Image();
background.src = "game/space.png";

const invaderController = new InvaderController(canvas);

function startGame() {
    ctext.drawImage(background,0,0, canvas.width, canvas.height);
    invaderController.draw(ctext);
}

setInterval(startGame,1000/60);
