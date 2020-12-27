
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400, 100, 400, 20);

	ball3 = new ball(400, 500, 30);
	ball2 = new ball(340, 500, 30)
	ball4 = new ball(460, 500, 30)
	ball1 = new ball(280, 500, 30)
	ball5 = new ball(520, 500, 30)
	chain3 = new Chain(ball3.body, roof1.ground, 400)
	chain2 = new Chain(ball2.body, roof1.ground, 340)
	chain4 = new Chain(ball4.body, roof1.ground, 460)
	chain1 = new Chain(ball1.body, roof1.ground, 280)
	chain5 = new Chain(ball5.body, roof1.ground, 520)
	Engine.run(engine);
  
}


function draw() {
  background(255);
  roof1.display();
  ball3.display();
  ball2.display();
  ball4.display();
  ball1.display();
  ball5.display(); 
  chain3.display();
  chain2.display();
  chain4.display();
  chain1.display();
  chain5.display();
}
function mouseDragged(){
	
		Matter.Body.setPosition(ball1.body,{x:mouseX, y:mouseY})
  }



