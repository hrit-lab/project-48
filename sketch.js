
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var box,boxImg;
var ballGroup,ball,ballImg;
var invisibleGround;
var bomb, bombGroup, bombImg;
var backgroundImg;
var score = 0;
var collect;
var explode;
PLAY = 1;
END = 0;
var gameState = PLAY;
function preload()
{
	boxImg = loadImage("box.png");
  ballImg = loadImage("ball.png");
  bombImg = loadImage("bomb.png");
  backgroundImg = loadImage("background.jpg");
  collect = loadSound("collect.wav");
  explode = loadSound("bomb.wav");
}

function setup() {
  engine = Engine.create();
   world = engine.world;
	createCanvas(800, 600);

	//Create the Bodies Here.
   box = createSprite(400,550);
   box.addImage(boxImg);
   box.scale = 0.3;
  ballGroup = createGroup();
  ball2Group = createGroup();
  ball3Group = createGroup();
  ball4Group = createGroup();
  bombGroup = createGroup();
  invisibleGround = new Ground(400,580,820,20);
  score = 0;
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  textSize(30);
  fill(0);
  text("Score: " + score,50,50);
  invisibleGround.display();
  if(gameState === PLAY){
  if(keyDown(LEFT_ARROW)){
    box.velocityX = -5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.velocityX = 5;
  }
  spawnBalls();
  spawnBombs();
  if(ballGroup.isTouching(box)){
     ballGroup.destroyEach();
     score = score +1;
     collect.play();
  }
  if(ball2Group.isTouching(box)){
    ball2Group.destroyEach();
    score = score +1;
    collect.play();
 }
 if(ball3Group.isTouching(box)){
  ball3Group.destroyEach();
  score = score +1;
  collect.play();
}
if(ball4Group.isTouching(box)){
  ball4Group.destroyEach();
  score = score +1;
  collect.play();
}
  if(bombGroup.isTouching(box)){
    bombGroup.destroyEach();
    score = score -1 ;
    explode.play();
    gameState = END;
 }
} else if(gameState === END){
  textSize(40);
  fill("red");
  text("GAMEOVER",200,300);
  box.visible = false;
  ballGroup.setvelocityY = (-1);
  ballGroup.setLifetimeEach = (-1);
  bombGroup.setvelocityY = (-1);
  bombGroup.setLifetimeEach = (-1);
}

  drawSprites();
}

  function spawnBalls(){
  if(frameCount%120 === 0){
    ball = createSprite(200,0);
    ball.addImage(ballImg);
    ball.scale = 0.2;
    ball.velocityY = 7;
    ballGroup.add(ball);
  }
  if(frameCount%70 === 0){
    var ball2 = createSprite(400,0);
    ball2.addImage(ballImg);
    ball2.scale = 0.2;
    ball2.velocityY = 7;
    ball2Group.add(ball2);
  }
  if(frameCount%100 === 0){
    var ball3 = createSprite(550,0);
    ball3.addImage(ballImg);
    ball3.scale = 0.2;
    ball3.velocityY = 7;
    ball3Group.add(ball3);
  }
  if(frameCount%50 === 0){
    var ball4 = createSprite(700,0);
    ball4.addImage(ballImg);
    ball4.scale = 0.2;
    ball4.velocityY = 7;
    ball4Group.add(ball4);
  }
}

function spawnBombs(){
  if(frameCount%100 === 0){
    bomb = createSprite(470,0);
    bomb.addImage(bombImg);
    bomb.scale = 0.2;
    bomb.velocityY = 7;
    bombGroup.add(bomb);
  }
}
