var paper,ground;
var basketBottom,basketLeft,basketRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	ground = new Ground (width/2,height-35,width,20);
  
}


function draw() {
  rectMode(CENTER);
  background("maroon");
  Engine.update(Engine);
  ground.display();
  
  drawSprites();
 
}



