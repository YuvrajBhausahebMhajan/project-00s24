const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper;
var ground;
var wall1, wall2, wall3;

function preload() {}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  papper = new Papper(300, 100, 50, 50);
  console.log(papper.x, "papper");
  ground = new Ground(400, 370, 800, 20);

  wall1 = new Wall(700, 350, 100, 20);
  wall2 = new Wall(650, 320, 20, 75);
  wall3 = new Wall(750, 320, 20, 75);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  papper.display();
  wall1.display();
  wall2.display();
  wall3.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.papper.aplayForce(papper.body.position, { x: 85, y: -85 });
  }
}
