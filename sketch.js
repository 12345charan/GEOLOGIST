const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone,stone2,stone3,stone4,stone5,stone6;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(50,200,100);
    stone = new Stone(200,200,5,5);
    stone2 = new Stone(210,200,5,5);
    stone3 = new Stone(230,200,5,5);
    stone4 = new Stone(250,200,5,5);
    stone5 = new Stone(270,200,5,5);
    stone6 = new Stone(290,200,5,5);
    iron = new Iron(400,200,50,50)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    iron.display();
    
 
}