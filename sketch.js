
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,boyIMG,stone,treeIMG,mango1, mango2, mango3,mango4,mango5;

function preload()
{
	boyIMG = loadImage("sprites/boy.png")
	treeIMG = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,400,1800,10);
	ground.shapeColor = color(105,105,105);
	tree = new Tree(625,300,350,350);
	mango1 = new Mango(625,250);
	stone = new Stone(140,250,50,50);
	boy = createSprite(200,300,50,50)
	boy.addImage(boyIMG);
	boy.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  
  tree.display();
  mango1.display();
  ground.display();
  stone.display();
  drawSprites();
}



