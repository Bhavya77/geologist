
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;



var g;
var h;
var s;
var r;

function setup() {
var canvas=	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g=new ground(400,690,1000,20)
	h=new hammer(200,300,200,40)
	s=new stone(600,670,100,100)
	r=new rubber(100,650,100)


	
  
}


function draw() {
  background(0);
  Engine.update(engine);
 
 

 
  g.display()

  h.display()

  s.display()

  r.display()
}



