class Ball{
   constructor(x, y, d){
       var options = {
           'restitution': 0.4,
           'friction': 1.3,
           'density': 0.8
       }
     this.body = Bodies.circle(x, y, 25, options);
     World.add(world, this.body);
   }

   

   display() {
       var pos = this.body.position;
       noStroke();
       fill("orange");
       ellipseMode(RADIUS);
       ellipse(pos.x, pos.y, 25);

   }
};
