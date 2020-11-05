// declare class
 ///
// export class using module.exports

class shape { // es6 export way
    constructor() {
        this.color = "red";
    }
    drawShape() {
        console.log("Draw a shape");
    }
    calculateArea() {
        console.log("don't know area of unknown shape");
        return ;
    }
    
  }
  module.exports = shape;