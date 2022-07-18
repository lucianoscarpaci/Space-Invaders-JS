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

    draw(ctext) {
        this.y -= this.velocity;
        ctext.fillStyle = this.laserColor;
        ctext.fillRect(this.x, this.y, this.width, this.height);
    }
}