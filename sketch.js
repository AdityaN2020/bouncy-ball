const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;



function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world = engine.world;


  var options={
    isStatic : true

  }
  ground = Bodies.rectangle(200,390,50,50,options);
  World.add(world, ground);
console.log(ground);
  //console.log(object.position.x);
  //console.log(object.position.y);
 
var ball_options={

restitution:1

}
  ball=Bodies.circle(200,200,10,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);

  //rect(200,200,50,50);

  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);





}