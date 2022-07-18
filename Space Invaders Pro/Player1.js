export default class Player1 {
    
    rightKeyboardPress = false;
    leftKeyboardPress = false;
    shootPressed = false;
    
    constructor(canvas, velocity, laserController){
        this.canvas = canvas;
        this.velocity = velocity;
        this.laserController = laserController;

        this.x = this.canvas.width / 2;
        this.y = this.canvas.height -75;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = "game/player.png";

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }

    draw(ctext){
        if(this.shootPressed) {
            this.laserController.shoot(this.x+this.width/2, this.y,4,10)
        }
        this.move();
        this.playerHitWall();
        ctext.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    playerHitWall() {
        if(this.x < 0){
            this.x = 0;
        }

        //right position
        if(this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    move(){
        if(this.rightKeyboardPress){
            this.x += this.velocity;
        }
        else if(this.leftKeyboardPress){
            this.x += -this.velocity;
        }
    }

    keydown = event =>{
        if(event.code == "ArrowRight"){
            this.rightKeyboardPress = true;
        }
        if(event.code == "ArrowLeft"){
            this.leftKeyboardPress = true;
        }
        if(event.code == "Space"){
            this.shootPressed = true;
        }
    }
    keyup = event =>{
        if(event.code == "ArrowRight"){
            this.rightKeyboardPress = false;
        }
        if(event.code == "ArrowLeft"){
            this.leftKeyboardPress = false;
        }
        if(event.code == "Space"){
            this.shootPressed = true;
        }
    }
}