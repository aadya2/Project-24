const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;
var b1, b2, b3;
var hoop, hoopImg;

function preload()
{
	hoopImg = loadImage("hoop.png");
}

function setup() {
	createCanvas(1200, 400);
    engine = Engine.create();
	world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width/2, height-30, width, 10);
    ball = new Ball(100, 200);
    b1 = new Basket(1100, 350, 200, 10, PI*2);
    b2 = new Basket(1000, 300, 100, 10, PI/2);
    b3 = new Basket(1140, 300, 100, 10, PI/2);
    hoop = createSprite(1100, 270, 20, 20);
    hoop.addImage("hoopIMAGE", hoopImg);
    hoop.scale = 0.5;
    

	Engine.run(engine);  
}


function draw() {
	background(0);
    rectMode(CENTER);
    textSize(30);
    text("Basket the basketball", 450, 70);
    textSize(15);
    text("Tip: Hold the UP ARROW KEY for better shot", 440, 350);
    text("Press SPACEBAR for another chance", 900, 70);

    spacebarPressed();
  //  ground.display();
    ball.display();
  //  b1.display();
  //  b2.display();
   // b3.display();
   // keyPressed();
    drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball.body, ball.body.position,{x:150, y:-147.7});
   }
}

function spacebarPressed(){
    if(keyDown("space")){
        Matter.Body.setPosition(ball.body, {x: 100, y: 200})
    }
}
