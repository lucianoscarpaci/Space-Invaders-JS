export default class Invader {
    
    constructor(x,y,imageNumber){
        this.x = x;
        this.y = y;
        /* Set dimensions of the enemy image */
        this.width = 44;
        this.height = 32;
        /* Gets the images from the game */
        this.image = new Image();
        this.image.src = `game/enemy${imageNumber}.png`;
    }
    /* add a draw method */
    draw(ctext) {
        ctext.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    /*Move method for InvaderController */
    move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
    }

}