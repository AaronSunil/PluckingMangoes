
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,boyIMG,stone,treeIMG,mango1, mango2, mango3,mango4,mango5;

function preload()
{
	mangoIMG = loadImage("sprites/mango.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,400,1800,10);
	ground.shapeColor = color(105,105,105);
	tree = new Tree(625,235,350,350);
	mango1 = new Mango(550,215);
	mango2 = new Mango(630,220);
	mango3 = new Mango(750,230);
	mango4 = new Mango(710,190);
	mango5 = new Mango(500,200);
	stone = new Stone(140,250,50,50);
	boy = new Boy(200,300,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  boy.display();
  drawSprites();
}



