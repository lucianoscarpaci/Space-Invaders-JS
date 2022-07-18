export default class Invader {
    
    constructor(x,y,imageNumber){
        this.x = x;
        this.y = y;
        /* Set dimensions of the enemy image */
        this.width = 44;
        this.height = 32;
        /* Gets the images from the game */
        this.game = new Game();
        this.game.src = 'game/enemy${imageNumber}.png';
    }
}