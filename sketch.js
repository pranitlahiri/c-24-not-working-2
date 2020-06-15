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

  basketBottom=createSprite(650,height-50,200,20);
	basketBottom.shapeColor=color(168,32,190);

	basketLeft=createSprite(750,height-90,20,100);
	basketLeft.shapeColor=color(168,32,190);

	basketRight=createSprite(550,height-90,20,100);
  basketRight.shapeColor=color(168,32,190);

	Engine.run(engine);
  ground = new Ground (width/2,height-35,width,20);
  ball = new Ball (width/4,height-50,20,20);
  
}


function draw() {
  rectMode(CENTER);
  background("maroon");
  ground.display();
  ball.display();
  drawSprites();
}
function KeyPressed(){
  if(KeyCode === 32) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}



