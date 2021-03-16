
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(250,50,300,20);
	ball1 = new Ball(150,250,20);
	ball2 = new Ball(200,250,20);
	ball3 = new Ball(250,250,20);
	ball4 = new Ball(300,250,20);
	ball5 = new Ball(350,250,20);


	rope1 = new Rope(ball1.body,roof.body,-80,0)
	rope2 = new Rope(ball2.body,roof.body,-40,0)
	rope3 = new Rope(ball3.body,roof.body,0,0)
	rope4 = new Rope(ball4.body,roof.body,40,0)
	rope5 = new Rope(ball5.body,roof.body,80,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});

	}
}



