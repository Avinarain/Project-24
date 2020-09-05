
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var box,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground();
	 paper = new Paper();
	 box = new Dustbin();
	 box2= new Dustbin(550,400,20,100)
	 box3 = new Dustbin(750,400,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
   keyPressed();
  
	ground.display();
	paper.display();
	box.display();
	box2.display();
	box3.display();

  drawSprites();
	}
	function keyPressed(){
		if(keyCode===UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,({x:85,y:-85}))
			
			}
		  }
