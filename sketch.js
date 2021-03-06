
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1,bob2,bobt3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {

	createCanvas(1365, 620);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(680, 200, 450, 30);

	bob1 = new Bob(535, 450, 35);
	bob2 = new Bob(605, 450, 35);
	bob3 = new Bob(675, 450, 35);
	bob4 = new Bob(745, 450, 35);
	bob5 = new Bob(815, 450, 35);

	rope1=new Rope(bob1.body,roof1.body,-140,0);
	rope2=new Rope(bob2.body,roof1.body,-70,0);
	rope3=new Rope(bob3.body,roof1.body,0,0);
	rope4=new Rope(bob4.body,roof1.body,70,0);
	rope5=new Rope(bob5.body,roof1.body,140,0);
	


	


	Engine.run(engine);
  
}
//0,230,200


function draw() {

	background(0,230,200);

	rectMode(CENTER);

	fill("black")
    textSize(30);
    textFont("georgia");
	text("Newton's Cradle",570,150);

	roof1.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
 

    drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Body.applyForce(bob1.body, bob3.body.position, {x:-200, y:-200});
	}

}

