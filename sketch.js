//GAME STATES
var PLAY=1;
var END=0;
var gameState=PLAY;

var score = 0;
var count = 0;
var space;
var galaxianGroup, galaxian1Group, galaxian2Group, galaxian3Group;
var bulletGroup;
var storyImg;

var alien,alienImg;

var spaceImg,playerImg;
var enemyImg,enemyImg2,enemyImg3,enemyImg4;

var createGalaxian,createGalaxian1,createGalaxian2,createGalaxian3;

var burstImg, bulletImg, rockImg;

var laserImg;
var laserImg2;
var laserImg3;
var laserImg4;

var life,life2,life3,lifeImg,lifeImg2,lifeImg3;

var resetButton, gameOverMessage;

function preload(){

  //LOADING IMAGES
  //blackBgImage=loadImage("images/blackBg.jpg");
  
  spaceImg=loadImage("red ball img/bg.jpg");
  groundImage = loadImage("red ball img/ground.png");
  playerImg=loadImage("red ball img/redball.png");

  storyImg=loadImage("images/STORY.png");

  enemyImg=loadImage("red ball img/enemy.jpg");
  enemyImg2=loadImage("red ball img/enemy5.jpg");
  enemyImg3=loadImage("red ball img/enemy3.png");
  enemyImg4=loadImage("red ball img/enemy4.jpg");

  //alienImg=loadImage("images/alien.png");

  laserImg=loadImage("images/laserblue.png");
  laserImg2=loadImage("images/laserred.png");
  laserImg3=loadImage("images/laseryellow.png");
  laserImg4=loadImage("images/lasergreen.png");

  burstImg=loadImage("images/burst.jpg");
  bulletImg=loadImage("images/bullet.png");
  rockImg=loadImage("images/rock.png");
  stoneImg=loadImage("images/stone.png");

  //LIFE IMAGES
  lifeImg=loadImage("images/life.png");
  lifeImg2=loadImage("images/life.png");
  lifeImg3=loadImage("images/life.png");

  //BUTTONS
  resetButton=loadImage("images/reset.jpg");
  gameOverMessage=loadImage("images/over.jpg");


  //ARROW KEYS
  rightArrow=loadImage("images/rightArrow.jpg");
  leftArrow=loadImage("images/leftArrow.jpg");

  //LOADING SOUNDS
  hit=loadSound("sounds/shoot.wav");
  beep=loadSound("sounds/beep.mp3");

  explosion=loadSound("sounds/Big-explosion-8-bit.mp3");

  invader=loadSound("sounds/fastinvader1.wav");
  invader2=loadSound("sounds/fastinvader2.wav");
  invader3=loadSound("sounds/fastinvader3.wav");
  invader4=loadSound("sounds/fastinvader4.wav");

  laserBolt=loadSound("sounds/laserbolt.mp3");
  laserCannon=loadSound("sounds/lasercannon.mp3");

  laserGun=loadSound("sounds/lasergun.mp3");
  laserGun2=loadSound("sounds/lasergun2.mp3");
  laserGun3=loadSound("sounds/lasergun3.mp3");

  laserGunBlast=loadSound("sounds/lasergun4.mp3");
  laserGunBlast2=loadSound("sounds/lasergun5.mp3");

  laserGunCannon=loadSound("sounds/laserguncannonshot.mp3");
  laserGunPew=loadSound("sounds/lasergun10.mp3");

  zap=loadSound("sounds/laserzap2.mp3");
  killed=loadSound("sounds/invaderkilled.wav")
}


function setup(){

     createCanvas(windowWidth,windowHeight);

     space = createSprite(windowWidth/2-160,windowHeight/2);
     space.addImage(spaceImg);
     space.scale = 1;
     space.x = space.width/2;
     space.velocityX = -(6+3*score/100);

     ground = createSprite(200,600,400,20);
     ground.addImage(groundImage);
     ground.x = ground.width /2;

     //black=createSprite(200,200);
     //black.addImage(blackBgImage);
     //black.scale=2;
     //black.visible=false;
     
     player = createSprite(windowWidth-1200, windowHeight-50);
     player.addImage(playerImg);
     player.scale=0.1;

     life=createSprite(windowWidth/2-630,windowHeight/2,5,windowHeight-500);


     // burst=createSprite(20,200,20,20);

     gameOver=createSprite(200,100);
     gameOver.addImage(gameOverMessage);
     gameOver.scale=0.3;
     gameOver.visible=false;

     resetGame=createSprite(windowWidth/2,windowHeight/2);
     resetGame.addImage(resetButton);
     resetGame.scale=0.5;
     resetGame.visible=false;

     //lifeBoost=createSprite(35,25);
     //lifeBoost.addImage(lifeImg);
     //lifeBoost.scale=0.1;

     //button=createSprite(20,360);
     //button.addImage(leftArrow);

     //button2=createSprite(65,360);
     //button2.addImage(rightArrow);
     //button2.scale=0.6;
     //life2=createSprite(50,25);
     //life2.addImage(lifeImg2);
     //life2.scale=0.1;
     //life2.visible=true;

     //life3=createSprite(80,25);
     //life3.addImage(lifeImg3);
     //life3.scale=0.1;
     //life3.visible=true;

     //alienGroup=createGroup();
     //alien.addImage(alienImg);

     //LASER GROUPS
     
     laserGroup=createGroup();
     laserGroup2=createGroup();
     laserGroup3=createGroup();
     laserGroup4=createGroup();

     //GROUPS
     galaxianGroup = createGroup();
     galaxian1Group = createGroup();
     galaxian2Group = createGroup();
     galaxian3Group = createGroup();

     bulletGroup = createGroup();
     
     rockGroup=createGroup();
     rockGroup2=createGroup();

     //lifeBoostGroup=createGroup();
      
     story=createSprite(200,200,20,20);
     story.addImage(storyImg);
     story.scale=0.3;
     story.visible=false;

     //enemyBulletGroup=createGroup();
}

function draw() {    
  //BACKGROUND COLOR AS BLACK
  background(0);

  life.shapeColor="green";

   //MOVES THE SPACESHIP WITH RESPECT OF MOUSE ARROW (ONLY IN HORIZONTAL LINE)

   //player.x = World.mouseX;

   if(keyDown("right"))
   {
     player.velocityX =10;
   }

   if(keyDown("up"))
   {
    player.velocityY = -10;
   }
   player.velocityY = player.velocityY + 0.8
   player.collide(ground);
   
    

   /*if(keyDown("down"))
   {
     player.velocityY = 10;
   }*/

   if(keyDown("left"))
   {
    player.velocityX = -10;
   }


   if (keyWentUp("up")||keyWentUp("left")||keyWentUp("right")||keyWentUp("down")||keyWentUp("space")||keyWentUp("shift")) {
    player.setVelocity(0, 0);
  }


  /*if (keyDown("space")) 
  {
    createBullet();
    //FIRE SOUND
    hit.play();
  }*/
  
  space.velocityX = -2;
  
  if (space.x < 200) 
   {
    space.x = space.width/2;
   }

   /*if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }*/

   if(galaxianGroup.isTouching(player)){
    life.height = life.height * 50/130;
    laserGun2.play();
    score--;
  }
  
 if(galaxian1Group.isTouching(player)){
    life.height = life.height * 50/130;
    laserGun3.play();
    score--;
  } 
  
if(galaxian2Group.isTouching(player)){
    life.height = life.height * 50/130;
    laserGun2.play();
    score--;
  }
  
  if(galaxian3Group.isTouching(player)){
    life.height = life.height * 50/130;
    laserGun3.play();
    score--;
  }
  
  if(life.height < 60 && life.height > 40){
    life.shapeColor="orange";
  }
  if(life.height<40 && life.height > 20){
    life.shapeColor ="orange";
  }
    if(life.height<20 ){
    life.shapeColor="red";
  }

  /*if(lifeBoostGroup.isTouching(player))
  {
    life.height=windowHeight-500;
    lifeBoostGroup.destroyEach();
    laserBolt.play();
  }*/


if(life.height<7)
{
  resetGame.visible=true;
  //black.visible=true;
  life.destroy();

laserGroup.setVelocityEach(0,0);
laserGroup2.setVelocityEach(0,0);
laserGroup3.setVelocityEach(0,0);
laserGroup4.setVelocityEach(0,0);

rockGroup.setVelocityEach(0,0);
rockGroup2.setVelocityEach(0,0);

galaxianGroup.setVelocityEach(0,0);
galaxian1Group.setVelocityEach(0,0);
galaxian2Group.setVelocityEach(0,0);
galaxian3Group.setVelocityEach(0,0);

//lifeBoostGroup.setVelocityEach(0,0);

space.velocityX=0;
space.velocityY=0;

laserGroup.destroyEach();
laserGroup2.destroyEach();
laserGroup3.destroyEach();
laserGroup4.destroyEach();

rockGroup.destroyEach();
rockGroup2.destroyEach();

galaxianGroup.destroyEach();
galaxian1Group.destroyEach();
galaxian2Group.destroyEach();
galaxian3Group.destroyEach();

bulletGroup.destroyEach();

//lifeBoostGroup.destroyEach();

count=0;
}

if(mousePressedOver(resetGame))
{
  reset();
  //black.visible=false;
}

  //createGalaxian();
  //createGalaxian1();
  //createGalaxian2();
  //createGalaxian3();

  //createLaser();
  //createLaser2();
  //createLaser3();
  //createLaser4();

  //createRock();
  //createRock2();



  //if(mousePressedOver(button)){
 //player.velocityX=-5;
  //}
  //if(mouseDown(button)){
   // player.velocityX=0;
  //}

  //if(mousePressedOver(button2)){
    //player.velocityX=5;
  //}
  //if(mouseDown(button2)){
    //player.velocityX=0;
  //}

  //if(World.frameCount%150==0){
   // createAlien();
  //}


  

    //if(galaxianGroup.isTouching(player)||galaxian1Group.isTouching(player)||galaxian2Group.isTouching(player)||galaxian3Group.isTouching(player)){
    //  life3.visible=false;
    //}
    
    //if(player.isTouching(galaxianGroup)||player.isTouching(galaxian1Group)||player.isTouching(galaxian2Group)||player.isTouching(galaxian3Group)){
   //   life3.visible=false;
   // }

   // if(galaxianGroup.collide(player)||galaxian1Group.collide(player)||galaxian2Group.collide(player)||galaxian3Group.collide(player)){
    //  life3.visible=false;
    //}
    
   // if(player.collide(galaxianGroup)||player.collide(galaxian1Group)||player.collide(galaxian2Group)||player.collide(galaxian3Group)){
   //   life3.visible=false;
    //}

  
    //END STATE

    //if(player.isTouching(galaxianGroup)||player.isTouching(galaxian1Group)||player.isTouching(galaxian2Group)||player.isTouching(galaxian3Group)){
    //  life3.destroy();
    //}

    //if(galaxianGroup.collide(player)||galaxian1Group.collide(player)||galaxian2Group.collide(player)||galaxian3Group.collide(player)){
     // life3.destroy();}
    
    //if(player.collide(galaxianGroup)||player.collide(galaxian1Group)||player.collide(galaxian2Group)||player.collide(galaxian3Group)){
     // life3.destroy(); }
  
     if (bulletGroup.isTouching(galaxianGroup)) 
     {
       galaxianGroup.destroyEach();
       bulletGroup.destroyEach();
       score = score + 2;
       zap.play();
     }
      else if (bulletGroup.isTouching(galaxian1Group)) 
     
     {
       galaxian1Group.destroyEach();
       bulletGroup.destroyEach();
       score = score + 1;
       killed.play();
     } 
     else if (bulletGroup.isTouching(galaxian2Group)) 
     {
       galaxian2Group.destroyEach();
       bulletGroup.destroyEach(); 
       score = score + 2;
       zap.play();
     } 
     else if (bulletGroup.isTouching(galaxian3Group)) 
     {
   
       galaxian3Group.destroyEach();
       bulletGroup.destroyEach();
       score = score + 1;
       killed.play();
     }
   
     if(laserGroup.isTouching(player))
     {
       laserGroup.destroyEach();
       score=score-2;
       invader.play();
     }
     if(laserGroup2.isTouching(player))
     {
       laserGroup2.destroyEach();
       score=score-1;
       invader2.play();
     }
     if(laserGroup3.isTouching(player))
     {
       laserGroup3.destroyEach();
       score=score-3;
       invader3.play();
     }
     if(laserGroup4.isTouching(player))
     {
       laserGroup4.destroyEach();
       score=score-2;
       invader4.play();
     }


     /*if(World.frameCount%800==0){
        createBoost();
     }*/
   
   //ROCK AS THE NON PLAYER CONTROL ELEMENT (ASTEROID)
   var rock = Math.round(random(0,1))
   if(World.frameCount%100==0){
     if(rock==0){
     createRock();
     }
     else if(rock==1){
       createRock2();
     }
   }
   
   if(galaxianGroup.isTouching(player)){
     galaxianGroup.destroyEach();
    }
   if(galaxian1Group.isTouching(player)){
    galaxian1Group.destroyEach();
    }
   if(galaxian2Group.isTouching(player)){
    galaxian2Group.destroyEach();
    }
   if(galaxian3Group.isTouching(player)){
    galaxian3Group.destroyEach();
    }
   
   
   //LASER APPEARANCE
   if(World.frameCount%80==0){
     createLaser();
   }
   if(World.frameCount%100==0){
     createLaser2();
   }
   if(World.frameCount%120==0){
     createLaser3();
   }
   if(World.frameCount%140==0){
     createLaser4();
   }
   
   var select_enemy = Math.round(random(0,3));
   
   if (World.frameCount %50 == 0)
     {
     if (select_enemy == 0) 
     {
        createGalaxian();
     } 
     else if (select_enemy == 1)
     {
       createGalaxian1();
     }
     else if (select_enemy == 2) 
     {
       createGalaxian2();
     }
      else if (select_enemy==3)
     {
       createGalaxian3();
     }
   }
   
   //SHOWS THE DISTANCE TRAVELLED BT THE PLAYER.
   count = count + Math.round(World.frameRate/60);
   
       
  
   if(keyDown("space")){
     createBullet(player.x);
   }

  drawSprites();
  
  fill("blue");
  text("POINTS: "+ score, windowWidth/2-600, windowHeight/2-270);
  fill("black");
  text("DISTANCE COVERED: "+ count +"m",windowWidth/2+460, windowHeight/2-270);

}


function createGalaxian() 
{
  galaxian = createSprite(windowWidth, Math.round(random(windowWidth/2-600, windowWidth-50)), 10, 10);
  galaxian.addImage(enemyImg);
  speed=Math.round(random(-5,-10));
  galaxian.velocityX = speed;
  galaxian.scale=0.025;
  galaxian.lifetime = 500;
  galaxianGroup.add(galaxian);
}

function createGalaxian1() {
  galaxian1 = createSprite(windowWidth, Math.round(random(windowWidth/2-600, windowWidth-50)), 10, 10);
  galaxian1.addImage(enemyImg2);
  galaxian1.scale=0.2;
  speed=Math.round(random(-4,-9));
  galaxian1.velocityX = speed;
  galaxian1.lifetime = 500;
  galaxian1Group.add(galaxian1);
}

function createGalaxian2() 
{
  galaxian2 = createSprite(windowWidth, Math.round(random(windowWidth/2-600, windowWidth-50)), 10, 10);
  galaxian2.addImage(enemyImg3);
  galaxian2.scale=0.25;
  speed=Math.round(random(-3,-10));
  galaxian2.velocityX = speed;
  galaxian2.lifetime = 500;
  galaxian2Group.add(galaxian2);
}

function createGalaxian3() {
  galaxian3=createSprite(windowWidth, Math.round(random(windowWidth/2-600, windowWidth-50)), 10, 10);
  galaxian3.scale=0.5;
  galaxian3.addImage(enemyImg4);
  speed=Math.round(random(-5,-9));
  galaxian3.velocityX =speed;
  galaxian3.lifetime =500;
  galaxian3Group.add(galaxian3);
}

function createBullet(x) {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.y = player.y;
  bullet.x = player.x;                                           
  bullet.addImage(bulletImg);
  bullet.scale=0.3;
  //bullet.velocityY = -35;
  bullet.velocityX = 35
  bullet.lifetime = 500;
  bulletGroup.add(bullet);
}

//function createAlien(){
  //alien=createSprite(0,Math.round(random(40,360)),10,10);
  //alien.addImage(alienImg);
  //speed=Math.round(random(5,15));
  //alien.scale=0.6;
  //alien.velocityX=speed;
  //alien.lifetime=500;
  //alienGroup.add(alien);
  //}

function createLaser(){
  laser=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup.add(laser);
}

function createLaser2(){
  laser=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg2);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup2.add(laser);
}

function createLaser3(){
  laser=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg3);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup3.add(laser);
}

function createLaser4(){
  laser=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  laser.scale=0.6;
  laser.addImage(laserImg4);
  speed=Math.round(random(10,20));
  laser.velocityY =speed;
  laser.lifetime =500;
  laserGroup4.add(laser);
}

function createRock(){
  rock=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  rock.scale=01;
  rock.addImage(rockImg);
  Yspeed=Math.round(random(10,20));
  Xspeed=Math.round(random(-10,10));
  rock.velocityY = Yspeed;
  rock.velocityX = Xspeed;
  rock.lifetime =500;
  rockGroup.add(rock);
}

function createRock2(){
  rock=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  rock.scale=01;
  rock.addImage(stoneImg);
  Yspeed=Math.round(random(10,20));
  Xspeed=Math.round(random(-10,10));
  rock.velocityY = Yspeed;
  rock.velocityX = Xspeed;
  rock.lifetime =500;
  rockGroup2.add(rock);
}

/*function createBoost(){
  boost=createSprite(Math.round(random(windowWidth/2-600, windowWidth-50)),-50,10,10);
  boost.scale=0.15;
  boost.addImage(lifeImg);
  Yspeed=Math.round(random(15,25));
  Xspeed=Math.round(random(-10,10));
  boost.velocityY = Yspeed;
  boost.velocityX = Xspeed;
  boost.lifetime =500;
  lifeBoostGroup.add(boost);
}*/



function reset(){
  player.x=windowWidth/2;
  player.y=windowHeight-50;
  player.x=World.mouseX;
  score=0;
  count=0;
  resetGame.visible=false;

  life=createSprite(windowWidth/2-630,windowHeight/2,5,windowHeight-500);

  if(galaxianGroup.isTouching(player)){
    life.height = life.height * 50/160;
    laserGun2.play();
  }
  
 if(galaxian1Group.isTouching(player)){
    life.height = life.height * 50/160;
    laserGun3.play();
  } 
  
if(galaxian2Group.isTouching(player)){
    life.height = life.height * 50/160;
    laserGun2.play();
  }
  
  if(galaxian3Group.isTouching(player)){
    life.height = life.height * 50/160;
    laserGun3.play();
  }
  
  if(life.height < 60 && life.height > 40){
    life.shapeColor="yellow";
  }
  if(life.height<40 && life.height > 20){
    life.shapeColor ="orange";
  }
    if(life.height<20 ){
    life.shapeColor="red";
  }


//if(life.height<3)
//{
  //resetGame.visible=true;
  //reset();
  //life.visible=false;
//}

if(life.height<7)
{
  resetGame.visible=true;
  //black.visible=true;
  life.destroy();
  reset();
}


laserGroup.destroyEach();
laserGroup2.destroyEach();
laserGroup3.destroyEach();
laserGroup4.destroyEach();

rockGroup.destroyEach();
rockGroup2.destroyEach();

galaxianGroup.destroyEach();
galaxian1Group.destroyEach();
galaxian2Group.destroyEach();
galaxian3Group.destroyEach();

bulletGroup.destroyEach();

//lifeBoostGroup.destroyEach();


space.velocityY=2;



  fill("blue");
  text("POINTS: "+ score, windowWidth/2-600, windowHeight/2-270);
  fill("black");
  text("DISTANCE COVERED: "+ count+ "m",windowWidth/2+460, windowHeight/2-270);
}