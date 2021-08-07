var bg_img,alien,alien_img,i,r,laserImg,laser,laser2Img,laser2;
var spacecraft_img,spacecraft;
var laserGroup,alienGroup
var over,gameover

function preload() {
  bg_img = loadImage("bg.jpg")
  spacecraft_img = loadImage("spacecraft.png")
  alien_img = loadImage("alien.png")
  laserImg = loadImage("02.png")
  laser2Img = loadImage("05.png")
  over=loadImage("gameOvr.png");

}
function setup() {
  createCanvas(1200,750);
  

  spacecraft=createSprite(600,500);
  spacecraft.addImage(spacecraft_img)
  spacecraft.scale=0.2
 
  gameover= createSprite(displayWidth/2-100 ,displayHeight/2,10,10);
  gameover.addImage("Gameover_image",over);
  gameover.visible=false;
  gameover.scale=0.7

  spacecraft.setCollider("circle",0,0,10)
  //spacecraft.debug=true;
  laserGroup = new Group();
  alienGroup=new Group();
}

function draw() {
  background(bg_img);  

  if(keyDown(LEFT_ARROW)){
    spacecraft.x-=10
      }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x+=10
      }
  if(keyDown(UP_ARROW)){
    spacecraft.y-=10
  
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.y+=10
  }
 if(keyWentDown("space")){
  laser2 = createSprite(spacecraft.x,spacecraft.y,10,10)
  laser2.addImage(laser2Img)
  laser2.velocityY = -10
 }
   enemy();
 if(laserGroup.isTouching(spacecraft)){
  spacecraft.destroy();
  //textSize(30)
  //text("You Lose",500,500)
 
  alienGroup.setVelocityXEach(0);
  gameover.visible=true;

  laserGroup.setVelocityXEach(0)
  alienGroup.setLifetimeEach(-1);
  laserGroup.setLifetimeEach(-1);
}
  
  drawSprites();
  
}

function enemy() {
 if(frameCount%200===0){
   var r = Math.round((random(50,1000)))
   var i = Math.round(random(-3,3))
   var alien = createSprite(r,100,10,10)
   laser = createSprite(r,100,10,10)
   laser.addImage("laser",laserImg)
   laser.velocityY = 7



   alien.addImage("alien",alien_img)
   alien.scale = 0.2
    alien.velocityX = i

  alien.lifetime=200;
  laserGroup.add(laser);
  alienGroup.add(alien);
  
 }

  

    

 
}
 
 
