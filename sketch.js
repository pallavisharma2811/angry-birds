//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 400, 1200, 20);

    bird = new Bird(200, 50);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    bird.display();
}