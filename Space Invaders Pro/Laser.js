export default class Laser{
    constructor(canvas,x,y,velocity, laserColor){
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.laserColor = laserColor;
        this.width = 5;
        this.height = 20;
        
    }
}