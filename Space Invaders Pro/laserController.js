import Laser from "./Laser.js";
export default class laserController {
    lasers = [];
    timeTilNextLaserAllowed = 0;
    
    constructor(canvas, maxNoOfLasers, laserColor, shouldSound){
        this.canvas = canvas;
        this.maxNoOfLasers = maxNoOfLasers;
        this.laserColor = laserColor;
        this.shouldSound = shouldSound;

        this.shooterSound = new Audio("sound/shoot.wav");
        this.shooterSound.volume = 0.5;
    }

    shoot(x, y, velocity, timeTilNextLaserAllowed = 0) {
        if(this.timeTilNextLaserAllowed <= 0 && this.lasers.length < this.maxNoOfLasers
            ) {
                const laser = new Laser(this.canvas,x,y,velocity,this.laserColor);
                this.lasers.push(laser);
                if(this.shouldSound){
                    this.shooterSound.currentTime = 0;
                    this.shooterSound.play();
                }
                this.timeTilNextLaserAllowed = timeTilNextLaserAllowed;
            }
        }
    }
    
