
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinOb, paperOb, groundOb;
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperOb = new paper(200,450,40);
	dustbinOb = new dustbin(1200, 650);
	groundOb = new ground(650, 600, 1200, 40);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	//Create the Bodies Here.
	 Engine.run(engine);
  
}


function draw() {
  background(0);

	paperOb.display()
	dustbinOb.display()
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		paperOb.Body.applyForce(paperOb.body, paperOb.body.position,{x:85,y:-85});

	}
}