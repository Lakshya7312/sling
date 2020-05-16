const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var holdera1, holdera2;
var holderb;
var blok1, blok2, blok3, blok4, blok5;
var blok6, blok7, blok8, blok9, blok10;
var blok11, blok12, blok13, blok14;
var blk1, blk2, blk3, blk4, blk5;
var blk6, blk7, blk8, blk9, blk10;
var mainblok1, mainblok2;
var spring;
var ball;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 590, 795, 13);

  holdera1 = new Holder(620, 130, 8, 140);
  holdera2 = new Holder(569, 170, 165, 8);
  holderb = new Holder(580, 460, 180, 8);

  blok1 = new Block(511, 150);
  blok2 = new Block(551, 150);
  blok3 = new Block(571, 150);
  blok4 = new Block(591, 150);
  blok5 = new Block(531, 150);
  blok6 = new Block(520, 119);
  blok7 = new Block(540, 119);
  blok8 = new Block(560, 119);
  blok9 = new Block(580, 119);
  blok10 = new Block(530, 88);
  blok11 = new Block(550, 88);
  blok12 = new Block(570, 88);
  blok13 = new Block(540, 57);
  blok14 = new Block(560, 57);

  blk1 = new Block(520, 439);
  blk2 = new Block(520, 408);
  blk3 = new Block(520, 377);
  blk4 = new Block(520, 346);
  blk5 = new Block(520, 315);
  blk6 = new Block(640, 439);
  blk7 = new Block(640, 408);
  blk8 = new Block(640, 377);
  blk9 = new Block(640, 346);
  blk10 = new Block(640, 315);

  mainblok1 = new Block(580, 350);
  mainblok2 = new Block(580, 400);

  ball = new Ball(180, 400, 60, 70);
  
  spring = new Spring(ball.body, {x:180, y:400});
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  holdera1.display();
  holdera2.display();
  holderb.display();

  fill("cyan");
  blok1.display();
  fill("red");
  blok2.display();
  fill("yellow");
  blok3.display();
  fill("green");
  blok4.display();
  fill(1,248,2);
  blok5.display();
  fill("pink");
  blok6.display();
  fill("red");
  blok7.display();
  fill(1,248,2);
  blok8.display();
  fill("yellow");
  blok9.display();
  fill("purple");
  blok10.display();
  fill("white");
  blok11.display();
  fill(255,132,0);
  blok12.display();
  fill(0,130,212);
  blok13.display();
  fill("cyan");
  blok14.display();

  fill("white");
  blk1.display();
  fill("orange");
  blk2.display();
  fill("pink");
  blk3.display();
  fill("red");
  blk4.display();
  fill("cyan");
  blk5.display();
  fill("cyan");
  blk6.display();
  fill("red");
  blk7.display();
  fill("pink");
  blk8.display();
  fill("orange");
  blk9.display();
  fill("white");
  blk10.display();

  fill("silver");
  mainblok1.display();
  fill(240,187,23);
  mainblok2.display();

  ball.display();

  spring.display();
}

function mouseDragged() {
   Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});

}

function mouseReleased() {
   spring.fly();

}