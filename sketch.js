
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    rof = new Roof(400,100,400,20);
    b1 = new Bob(320,400,20);
    b2 = new Bob(360,400,20);
    b3 = new Bob(400,400,20);
    b4 = new Bob(440,400,20);
    b5 = new Bob(480,400,20)


    r1 = new Rope(b1.body,rof.body,-80,0);
    r2 = new Rope(b2.body,rof.body,-40,0);
    r3 = new Rope(b3.body,rof.body,0,0);
    r4 = new Rope(b4.body,rof.body,40,0);
    r5 = new Rope(b5.body,rof.body,80,0);


}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  rof.display();
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display(); 
  
  drawSprites();
 
}
function keyPressed() { 
 	if (keyCode === UP_ARROW){
    Matter.Body.applyForce(b1.body,b1.body.position,{x:-3,y:-3})
  } 
} 

