
  // export class using module.exports
  
  // import using require

// declare class


// export class using module.exports

const shape = require('./shape');
  
class circle extends shape {
   constructor() {
     super();
   }
     calculateArea(){
         console.log ("area of circle is 2pi *R^2 and color is:"+this.color);
 
         return (3.14*5*5);
     }
     
 }
 module.exports = circle;
    //

// export class using module.exports