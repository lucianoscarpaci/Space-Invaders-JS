import Invader from "./Invader.js";
import InvaderDirection from "./invaderDirection.js";
export default class InvaderController {
    /* 1 in map = enemy 1
       2 in map = enemy 2
       3 in map = enemy 3 */
    
    invaders = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];

    invaderRows = [];
    /* Define properties */
    currentMovingDirection = InvaderDirection.Right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;
    timerMoveDownDefaultValue = 30;
    timerMoveDown = this.timerMoveDownDefaultValue;

    constructor(canvas) {
        this.canvas = canvas;
        this.createAliens();
    }
    /* The draw method */
    draw(ctext) {
        this.timerMoveDownDecrement();
        this.updateVelocityAndDirection();
        this.drawInvaders(ctext);
        this.resetTimerMoveDown();
    }

    resetTimerMoveDown() {
        if(this.timerMoveDown <= 0) {
            this.timerMoveDown = this.timerMoveDownDefaultValue;
        }
    }

    timerMoveDownDecrement(){
        if (
            this.currentMovingDirection === InvaderDirection.downLeft || 
            this.currentMovingDirection === InvaderDirection.downRight
        ) {
            this.timerMoveDown--;
        }
    }

    updateVelocityAndDirection() {
        /* Moving right */
        for(const invaderRow of this.invaderRows) {
            if (this.currentMovingDirection == InvaderDirection.Right) {
                this.xVelocity = this.defaultXVelocity;
                this.yVelocity = 0;
                /*Get the last item in the array */
                const rightInvader = invaderRow[invaderRow.length - 1];
                if(rightInvader.x +rightInvader.width >= this.canvas.width) {
                    this.currentMovingDirection = InvaderDirection.downLeft;
                    break;
                }
            } else if(this.currentMovingDirection === InvaderDirection.downLeft) {
                if(this.moveDown(InvaderDirection.Left)){
                    break;
                }/* check current direction */
            } else if(this.currentMovingDirection === InvaderDirection.Left) {
                this.xVelocity = -this.defaultXVelocity; //value -1
                this.yVelocity = 0;
                const leftMostInvader = invaderRow[0];
                if(leftMostInvader.x <= 0) {
                    this.currentMovingDirection = InvaderDirection.downRight;
                    break;
                }
            } else if(this.currentMovingDirection === InvaderDirection.downRight) {
                if(this.moveDown(InvaderDirection.Right)) {
                    break;
                }
            }
        }
    }
    

    moveDown(newDirection){
        this.xVelocity = 0;
        /* make enemy move downward direction */
        this.yVelocity = this.defaultYVelocity;
        if(this.timerMoveDown <= 0) {
            this.currentMovingDirection = newDirection;
            return true;
        }
        return false;
    }

    drawInvaders(ctext){
        this.invaderRows.flat().forEach((invader)=>{
            invader.move(this.xVelocity, this.yVelocity);
            invader.draw(ctext);
        });
    }

    createAliens() {
        this.invaders.forEach((row, rowIndex) =>{
            this.invaderRows[rowIndex] = [];
            row.forEach((invaderNumber, invaderIndex)=>{
                if(invaderNumber > 0){
                    /* InvaderIndex controls the spacing between invaders, rowIndex increases distance between invaders */
                    this.invaderRows[rowIndex].push(new Invader(invaderIndex* 50, rowIndex * 35, invaderNumber)
                    );
                }
            });
        })
    }
}