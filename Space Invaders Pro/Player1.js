export default class Player1 {
    
    rightKeyboardPress = false;
    leftKeyboardPress = false;
    
    constructor(canvas, velocity){
        this.canvas = canvas;
        this.velocity = velocity;

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
        this.move();
        ctext.drawImage(this.image,this.x,this.y,this.width,this.height);
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
        if(event.code == 'ArrowRight'){
            this.rightKeyboardPress = true;
        }
        if(event.code == 'ArrowLeft'){
            this.leftKeyboardPress = true;
        }
    }
    keyup = event =>{
        if(event.code == 'ArrowRight'){
            this.rightKeyboardPress = false;
        }
        if(event.code == 'ArrowLeft'){
            this.leftKeyboardPress = false;
        }
    }
}