const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world
var block1 , polygon

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(585,310,300,15);
 
 ground1 = new Ground(600,700,1200,25);
 
  polygon = new Polygon(100,200,35,35);
  shooter = new SlingShot(polygon.body,{x:200,y:200});

   //level 1
  
  block1 = new block(500,279,30,40)
  block2 = new block(530,279,30,40)
  block3 = new block(560,279,30,40)
  block4 = new block(590,279,30,40)
  block5 = new block(620,279,30,40)
  block6 = new block(650,279,30,40)
  block7 = new block(680,279,30,40)
  //level 2
 
  block8 = new block(530,240,30,40)
  block9 = new block(560,240,30,40)
  block10 =new block(590,240,30,40)
  block11= new block(620,240,30,40)
  block12 =new block(650,240,30,40)

  //level 3

  block13 =new block(560,200,30,40)
  block14= new block(590,200,30,40)
  block15 =new block(620,190,30,40)
  //top
  block16= new block(590,150,30,40)
 
  
  
}

function draw() {
 
 Engine.update(engine)
  background(255,255,255);  
  ground.display();
  ground1.display();  
  polygon.display();
  shooter.display();
  block1.display();  
  block2.display();  
  block3.display();  
  block4.display();  
  block5.display();  
  block6.display();  
  block7.display();  
  block8.display();  
  block9.display();  
  block10.display(); 
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shooter.fly();
}