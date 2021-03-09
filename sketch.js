const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world =  engine.world;

  DK = Bodies.circle(400,100,50);  
  World.add(world,DK);

  
var  options={
isStatic:true
}
  Daksh = Bodies.rectangle(400,390,800,10,options); 
  World.add(world,Daksh); 
  }

function draw() {
  background("lightblue"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(Daksh.position.x,Daksh.position.y,800,10);
ellipseMode(RADIUS)
  ellipse(DK.position.x,DK.position.y,50);
  drawSprites();
}