const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var treasure,rope;
var treasure_con;

var bg_img;
var jewel;
var chest;

function preload()
{
  bg_img = loadImage('bg_1.png');
  jewel = loadImage('diamonds.png');
  chest = loadImage('chest_open-removebg-preview.png');
}

function setup() 
{
  createCanvas(800,700);
  frameRate(80);

  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  button= createImg('cut_button.png');
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:240,y:30});
  
  diamond = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,diamond);

  diamond_con = new Link(rope,diamond);
  treasure= createSprite(225,620,100,100);
  treasure.addImage(chest);
  treasure.scale = 0.4
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,700,690);

  image(jewel,diamond.position.x,diamond.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();
  drawSprites();

  
 
   
}
function drop(){
  rope.break()
  diamond_con.detach()
  diamond_con = null
}
