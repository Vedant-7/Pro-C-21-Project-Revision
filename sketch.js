var bg,sleep,brush,Gym,eat,drink,move,bath;
var astronaut;

function preload(){
  
bg = loadImage("images/iss.png");
sleep = loadImage("images/sleep.png");
brush = loadImage("images/brush.png");
Gym   = loadAnimation("images/gym1.png","images/gym2.png");
eat   = loadAnimation("images/eat1.png","images/eat2.png");
drink = loadAnimation("images/drink1.png","images/dring2.png");
move  = loadAnimation("images/move.png","move1.png");
bath  = loadAnimation("images/bath1.png","images/bath2.png");

}

function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(250,250,300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 2;

}

function draw() {
  background(220);

 


  drawSprites();
}