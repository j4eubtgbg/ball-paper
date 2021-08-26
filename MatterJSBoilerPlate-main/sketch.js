var ball;
var g;
var left,right;
var gs = 1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	let ballopt={
		restitution:0.3,
		density:0.2,
		friction:0
	}
	ball = Bodies.circle(200,200,20,ballopt);
	World.add(world,ball);
  
	

	//Create the Bodies Here.
	g = new Ground(width/2,690,width,20)
	World.add(world,g);

	left = new Ground(1100,620,20,120);
	World.add(world,left);

	right = new Ground(900,620,20,120)
	World.add(world,right);
	Engine.run(engine);
  
}


function draw() {
if(gs = 1){ 
	
	rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20);
	g.show();
	right.show();
	left.show();

 if(keyDown('space')){
	 force();
 }
 reset();
}

}

function force(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-5})
	//console.log('test');
  }


  function reset(){
	  if(keyWentDown('w')){
		  gs = 1;
	  }
  }