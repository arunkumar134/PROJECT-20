var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 50, 50, 30);
  wall=createSprite(1580,200,30,400);
 speed=random(50,90);
 weight=random(400,1500)
 car.velocityX=speed;
 
}

function draw() {
  background(255,255,255);  
  
  
  console.log(deformation)
 

 if(wall.x-car.x < (car.width+wall.width)/2){
  deformation=0.5*weight*speed*speed/22500
   car.velocityX=0;
  if(deformation<100){
    car.shapeColor=color(0,250,0)
  }

  if(deformation>100 && deformation<180){
    car.shapecolor=color(255,0,0)
  }

  if(deformation>180){
    car.shapeColor=color(0,0,255)
  }
 }
  drawSprites();
}