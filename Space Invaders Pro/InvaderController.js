import Invader from "./Invader.js";
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

    constructor(canvas) {
        this.canvas = canvas;
        this.createAliens();
    }

    draw(ctext) {
        this.drawInvaders(ctext);
    }

    drawInvaders(ctext){
        this.invaderRows.flat().forEach((invader)=>{
            invader.draw(ctext);
        });
    }

    createAliens() {
        this.invaders.forEach((row, rowIndex) =>{
            this.invaderRows[rowIndex] = [];
            row.forEach((invaderNumber, invaderIndex)=>{
                if(invaderNumber > 0){
                    this.invaderRows[rowIndex].push(new Invader(invaderIndex* 50, rowIndex * 35, invaderNumber)
                    );
                }
            });
        })
    }
}