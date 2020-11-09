const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var crumbledpaper,crumbledIMG;
var trashbin,trashIMG;
var crumbledbody;

function preload(){
	crumbledIMG=loadImage("1103887-200.png");
	trashIMG=loadImage("trash-bin-1595556-1349582.png");
}

function setup() {
	createCanvas(1250, 575);

	crumbledpaper=createSprite(50,510,100,100);
	crumbledpaper.addImage(crumbledIMG);
	crumbledpaper.scale=0.425;

	trashbin=createSprite(1150,475,1,1);
	trashbin.addImage(trashIMG);
	trashbin.scale=0.35;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		restitution:0.75,
		friction:2,
		density:4,
	}
    crumbledbody=Bodies.circle(50,250,35,options);
	World.add(world,crumbledbody);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Wall(1150,545,87.5,10);
  Wall(1110,490,10,110);
  Wall(1190,490,10,110);

  Ground(625,565,1250,20);

  drawSprites();
  crumbledpaper.x=crumbledbody.position.x;
  crumbledpaper.y=crumbledbody.position.y;

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(crumbledbody,crumbledbody.position,{x:85,y:-300});
	}
}



