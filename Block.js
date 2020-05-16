class Block {
   constructor(x, y, width, height){
       var options = {
           isStatic: true
       }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = 18;
     this.height = 30;
     World.add(world, this.body);
   }

   display() {
       var pos = this.body.position;
       noStroke();
       rectMode(CENTER);
       rect(pos.x, pos.y, 18, 30);
   }
};