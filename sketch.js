function preload(){
wallImg=loadImage("wall.png")
bgimg=loadImage("bg.png")
enemy2img=loadAnimation("nail1.png","nail2.png")
enemy1img=loadAnimation("enemy2.png","enemy3.png")
rotationenemy1img=loadAnimation("e1.png","e2.png")
castleimg=loadImage("castle.png")
heartimg=loadImage("heart.png")
rmainPlayerimg=loadAnimation("rman3.png","rman1.png","rman2.png")
lmainPlayerimg=loadAnimation("lman3.png","lman1.png","lman2.png")
jmainPlayerimg=loadAnimation("jman1.png","jman2.png")
smimg=loadImage("sm.png")
coinsound=loadSound("coinc.wav")
gameoversound=loadSound("gameover.wav")
jumpsound=loadSound("jump.wav")
mariodiessound=loadSound("mariodied.wav")
stageclearsound=loadSound("stagec.wav")
coinimg=loadImage("coin.png")
endingbg=loadImage("bg.jpg")
winbgimg=loadImage("winbg.png")
restartimg=loadImage("restart.png")
nextstage=loadSound("nextlevel.mp3")
}

function setup(){
createCanvas(1366,657)

 life=3
 coin=0

  

scorecoin=createSprite(720,70)
scorecoin.addImage(coinimg)
scorecoin.scale=0.4

mainPlayer=createSprite(470,599,50,50)
mainPlayer.addAnimation("abcd",lmainPlayerimg)
mainPlayer.scale=0.7



coin1=createSprite(200,350)
coin1.addImage(coinimg)
coin1.scale=0.3
coin1.rotationSpeed=1

coin2=createSprite(250,350)
coin2.addImage(coinimg)
coin2.scale=0.3
coin2.rotationSpeed=1

coin3=createSprite(300,350)
coin3.addImage(coinimg)
coin3.scale=0.3
coin3.rotationSpeed=1

coin4=createSprite(350,350)
coin4.addImage(coinimg)
coin4.scale=0.3
coin4.rotationSpeed=1

coin5=createSprite(400,350)
coin5.addImage(coinimg)
coin5.scale=0.3
coin5.rotationSpeed=1

coin6=createSprite(450,350)
coin6.addImage(coinimg)
coin6.scale=0.3
coin6.rotationSpeed=1

coin7=createSprite(150,220)
coin7.addImage(coinimg)
coin7.scale=0.3
coin7.rotationSpeed=1

coin8=createSprite(220,220)
coin8.addImage(coinimg)
coin8.scale=0.3
coin8.rotationSpeed=1

coin9=createSprite(270,170)
coin9.addImage(coinimg)
coin9.scale=0.3
coin9.rotationSpeed=1

coin10=createSprite(320,120)
coin10.addImage(coinimg)
coin10.scale=0.3
coin10.rotationSpeed=1

coin11=createSprite(410,220)
coin11.addImage(coinimg)
coin11.scale=0.3
coin11.rotationSpeed=1

coin12=createSprite(370,170)
coin12.addImage(coinimg)
coin12.scale=0.3
coin12.rotationSpeed=1

coin13=createSprite(480,220)
coin13.addImage(coinimg)
coin13.scale=0.3
coin13.rotationSpeed=1

coin14=createSprite(560,250)
coin14.addImage(coinimg)
coin14.scale=0.3
coin14.rotationSpeed=1

coin15=createSprite(630,300)
coin15.addImage(coinimg)
coin15.scale=0.3
coin15.rotationSpeed=1

coin16=createSprite(560,350)
coin16.addImage(coinimg)
coin16.scale=0.3
coin16.rotationSpeed=1

coin17=createSprite(630,400)
coin17.addImage(coinimg)
coin17.scale=0.3
coin17.rotationSpeed=1

coin18=createSprite(630,500)
coin18.addImage(coinimg)
coin18.scale=0.3
coin18.rotationSpeed=1

coin19=createSprite(560,450)
coin19.addImage(coinimg)
coin19.scale=0.3
coin19.rotationSpeed=1

coin20=createSprite(850,220)
coin20.addImage(coinimg)
coin20.scale=0.3
coin20.rotationSpeed=1

coin21=createSprite(1000,220)
coin21.addImage(coinimg)
coin21.scale=0.3
coin21.rotationSpeed=1

coin22=createSprite(1150,220)
coin22.addImage(coinimg)
coin22.scale=0.3
coin22.rotationSpeed=1

coin23=createSprite(1250,350)
coin23.addImage(coinimg)
coin23.scale=0.3
coin23.rotationSpeed=1

coin24=createSprite(900,350)
coin24.addImage(coinimg)
coin24.scale=0.3
coin24.rotationSpeed=1

coin25=createSprite(1070,350)
coin25.addImage(coinimg)
coin25.scale=0.3
coin25.rotationSpeed=1

coin26=createSprite(1000,470)
coin26.addImage(coinimg)
coin26.scale=0.3
coin26.rotationSpeed=1

coin27=createSprite(800,470)
coin27.addImage(coinimg)
coin27.scale=0.3
coin27.rotationSpeed=1

coin28=createSprite(1250,600)
coin28.addImage(coinimg)
coin28.scale=0.3
coin28.rotationSpeed=1

coin29=createSprite(1100,600)
coin29.addImage(coinimg)
coin29.scale=0.3
coin29.rotationSpeed=1

coin30=createSprite(950,600)
coin30.addImage(coinimg)
coin30.scale=0.3
coin30.rotationSpeed=1

castle=createSprite(810,567);
castle.addImage(castleimg)
castle.scale=0.3

heart1=createSprite(1250,70)
heart1.addImage(heartimg)
heart1.scale=0.2

heart2=createSprite(1300,70)
heart2.addImage(heartimg)
heart2.scale=0.2

heart3=createSprite(1200,70)
heart3.addImage(heartimg)
heart3.scale=0.2

enemy1=createSprite(790,215);
enemy1.addAnimation("abc",enemy1img)
enemy1.scale=0.5
enemy1.velocityX=2

enemy2=createSprite(390,215);
enemy2.addAnimation("abc",enemy2img)
enemy2.scale=0.4
enemy2.velocityY=-2

enemy3=createSprite(220,115);
enemy3.addAnimation("abc",enemy2img)
enemy3.scale=0.4
enemy3.velocityY=2

enemy4=createSprite(280,515);
enemy4.addAnimation("abc",enemy2img)
enemy4.scale=0.4
enemy4.velocityY=2

enemy5=createSprite(1290,345);
enemy5.addAnimation("abcd",rotationenemy1img)
enemy5.scale=0.5
enemy5.velocityX=-2

enemy6=createSprite(710,465);
enemy6.addAnimation("abcde",enemy1img)
enemy6.scale=0.5
enemy6.velocityX=2

enemyro3=createSprite(1150,465,5,50);
enemyro3.visible=false


enemyro2=createSprite(850,345,5,50);
enemyro2.visible=false

enemyro=createSprite(1150,200,5,50);
enemyro.visible=false

enemyro1=createSprite(690,200,5,50);
enemyro1.visible=false

fredline=createSprite(410,560,10,130)
fredline.shapeColor="red";
fredline.lifetime=20;

lift=createSprite(100,620,130,10)
lift.shapeColor="blue";


liftend=createSprite(111,370,10,10)
liftend.visible=false

lift1=createSprite(590,245,130,10)
lift1.shapeColor="blue";
liftindi1=createSprite(595,235,120,10)
liftindi1.visible=false


redb=createSprite(510,300,10,10)
redb.shapeColor="red"
redbutton=createSprite(510,300,1,10)
redbutton.shapeColor="red"

redb3=createSprite(39,550,10,10)
redb3.shapeColor="red"
redbutton3=createSprite(39,550,1,10)
redbutton3.shapeColor="red"

redb1=createSprite(40,200,10,10)
redb1.shapeColor="red"
redbutton1=createSprite(40,200,1,10)
redbutton1.shapeColor="red"

redb2=createSprite(730,550,10,10)
redb2.shapeColor="red"
redbutton2=createSprite(730,550,1,10)
redbutton2.shapeColor="red"

wall1=createSprite(465,500,130,20)
wall1.shapeColor="brown"
wall2=createSprite(255,250,530,20)
wall2.shapeColor="brown"
wall3=createSprite(525,440,20,400)
wall3.shapeColor="brown"
wall4=createSprite(350,380,330,20)
wall4.shapeColor="brown"
wall5=createSprite(400,450,20,120)
wall5.shapeColor="brown"
wall6=createSprite(175,445,20,150)
wall6.shapeColor="brown"
wall7=createSprite(665,255,20,500)
wall7.shapeColor="brown"
wall8=createSprite(525,80,20,120)
wall8.shapeColor="brown"
wall9=createSprite(705,500,100,20)
wall9.shapeColor="brown"
wall10=createSprite(745,570,20,140)
wall10.shapeColor="brown"
wall11=createSprite(915,250,500,20)
wall11.shapeColor="brown"
wall12=createSprite(1085,380,500,20)
wall12.shapeColor="brown"
wall13=createSprite(905,500,500,20)
wall13.shapeColor="brown"

leftwall=createSprite(-23,328.5)
leftwall.addImage(wallImg);
leftwall.rotation=90;
leftwall.scale=3

rightwall=createSprite(1389,328.5)
rightwall.addImage(wallImg);
rightwall.rotation=90;
rightwall.scale=3

downwall=createSprite(683,680)
downwall.addImage(wallImg)
downwall.scale=3

upperwall=createSprite(680,-23);
upperwall.addImage(wallImg)
upperwall.scale=3


liftre=createSprite(100,365,100,1)
liftre.visible=false

restart=createSprite(11720,450)
restart.addImage(restartimg)
restart.scale=0.3

bgg=createSprite(278,200)
  bgg.addImage(winbgimg)
  bgg.scale=1
  bgg.visible=false

}





function draw(){
  background(bgimg)
  

if(mainPlayer.isTouching(castle)){
  stageclearsound.play()
  mainPlayer.x=11110;
  bgg.visible=true
  restart.x=465; 

}

//camera.x=mainPlayer.x


  textSize(20)
  fill("green")
  text("=> " +coin,750,75)

  mainPlayer.collide(leftwall)
  mainPlayer.collide(rightwall)
  mainPlayer.collide(upperwall)
  mainPlayer.collide(downwall)
  mainPlayer.collide(lift)
  mainPlayer.collide(lift1)
  lift1.collide(downwall)
  mainPlayer.collide(wall1)
  mainPlayer.collide(wall2)
  mainPlayer.collide(wall3)
  mainPlayer.collide(wall4)
  mainPlayer.collide(wall5)
  mainPlayer.collide(wall6)
  mainPlayer.collide(wall7)
  mainPlayer.collide(wall8)
  mainPlayer.collide(wall9)
  mainPlayer.collide(wall10)
  mainPlayer.collide(wall11)
  mainPlayer.collide(wall12)
  mainPlayer.collide(wall13)
  enemy2.bounceOff(upperwall)
  enemy2.bounceOff(wall2)
  enemy3.bounceOff(upperwall)
  enemy3.bounceOff(wall2)
  enemy4.bounceOff(downwall)
  enemy4.bounceOff(wall4)
  liftindi1.collide(downwall)

  if(enemy1.isTouching(enemyro)){
    enemy1.velocityX=-2
    enemy1.addAnimation("abc",rotationenemy1img)
  }

  if(enemy6.isTouching(wall7)){
    enemy6.velocityX=2
    enemy6.addAnimation("abcde",enemy1img)
  }

  if(enemy6.isTouching(enemyro3)){
    enemy6.velocityX=-2
    enemy6.addAnimation("abcde",rotationenemy1img)
  }

  if(enemy5.isTouching(enemyro2)){
    enemy5.velocityX=2
    enemy5.addAnimation("abcd",enemy1img)
  }
  if(enemy5.isTouching(rightwall)){
    enemy5.velocityX=-2
    enemy5.addAnimation("abcd",rotationenemy1img)
  }

  if(enemy1.isTouching(enemyro1)){
    enemy1.velocityX=2
    enemy1.addAnimation("abc",enemy1img)
  }

  

  if(mainPlayer.isTouching(liftindi1)){
    lift1.velocityY=3
    mainPlayer.velocityY=3
    mainPlayer.x=570
    liftindi1.y=235
  }
  if(mainPlayer.isTouching(redbutton2)){
   
    mainPlayer.y=200
    
  }

  if(mainPlayer.isTouching(redbutton)){
    mainPlayer.y=220
    mainPlayer.x=100
  }
  if(mainPlayer.isTouching(redbutton1)){
    mainPlayer.y=350
    mainPlayer.x=470
    
  }

  if(mainPlayer.isTouching(redbutton3)){
    lift.velocityY=-3
   
  }

  if(lift.isTouching(liftend)){
    lift.velocityY=0
    
  }
  

 if(keyWentDown("up")){
  mainPlayer.velocityY = -12;
  jumpsound.play()
  
}

mainPlayer.velocityY = mainPlayer.velocityY + 0.6
 
 if(keyDown("down")){
  mainPlayer.y=mainPlayer.y+10
}
if(keyDown("left")){
  mainPlayer.x=mainPlayer.x-10
  mainPlayer.addAnimation("abcd",lmainPlayerimg)
}
if(keyDown("right")){
 mainPlayer.x=mainPlayer.x+10
 mainPlayer.addAnimation("abcd",rmainPlayerimg)
}

if(mainPlayer.isTouching(coin1)){
  coin=coin+1
  coin1.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin2)){
  coin=coin+1
  coin2.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin3)){
  coin=coin+1
  coin3.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin4)){
  coin=coin+1
  coin4.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin5)){
  coin=coin+1
  coin5.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin6)){
  coin=coin+1
  coin6.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin7)){
  coin=coin+1
  coin7.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin8)){
  coin=coin+1
  coin8.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin9)){
  coin=coin+1
  coin9.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin10)){
  coin=coin+1
  coin10.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin11)){
  coin=coin+1
  coin11.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin12)){
  coin=coin+1
  coin12.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin13)){
  coin=coin+1
  coin13.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin14)){
  coin=coin+1
  coin14.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin15)){
  coin=coin+1
  coin15.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin16)){
  coin=coin+1
  coin16.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin17)){
  coin=coin+1
  coin17.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin18)){
  coin=coin+1
  coin18.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin19)){
  coin=coin+1
  coin19.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin20)){
  coin=coin+1
  coin20.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin21)){
  coin=coin+1
  coin21.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin22)){
  coin=coin+1
  coin22.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin23)){
  coin=coin+1
  coin23.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin24)){
  coin=coin+1
  coin24.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin25)){
  coin=coin+1
  coin25.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin26)){
  coin=coin+1
  coin26.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin27)){
  coin=coin+1
  coin27.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin28)){
  coin=coin+1
  coin28.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin29)){
  coin=coin+1
  coin29.x=11110
  coinsound.play()
}
if(mainPlayer.isTouching(coin30)){
  coin=coin+1
  coin30.x=11110
  coinsound.play()
}

// enemy touching mario

if(life==2){
  heart2.visible=false
}
if(life==1){
  heart1.visible=false
}
if(life==3){
  

 
  

}
if(life==0){

  life=3

  heart3.visible=false
  gameoversound.play()
  
  
  textSize(20)
  fill("blue")
  stroke("black")
  text("PRESS ON RESTART TO RESTART",150,300)

  coin1.x=111100
  coin2.x=111100
  coin3.x=111100
  coin4.x=111100
  coin5.x=111100
  coin6.x=111100
  coin7.x=111100
  coin8.x=111100
  coin9.x=111100
  coin10.x=111100
  coin11.x=111100
  coin12.x=111100
  coin13.x=111100
  coin14.x=111100
  coin15.x=111100
  coin16.x=111100
  coin17.x=111100
  coin18.x=111100
  coin19.x=111100
  coin20.x=111100
  coin21.x=111100
  coin22.x=111100
  coin23.x=111100
  coin24.x=111100
  coin25.x=111100
  coin26.x=111100
  coin27.x=111100
  coin28.x=111100
  coin29.x=111100
  coin30.x=111100

 

  restart.x=465; 
  enemy1.velocityX=0
  enemy2.velocityY=0
  enemy4.velocityY=0
  enemy3.velocityY=0
  enemy5.velocityX=0
  enemy6.velocityX=0
  mainPlayer.x=11000
 
}

if(mousePressedOver(restart)){
  console.log("restart")
  life=3
  bgg.visible=false
  coin=0
  heart1.visible=true
  heart2.visible=true
  heart3.visible=true
  
  nextstage.play()

  gameoversound.stop()
  coinsound.stop()
  mariodiessound.stop()
  jumpsound.stop()
  stageclearsound.stop()

  lift.y=620
  lift1.y=245
  liftindi1.y=235

  coin1.x=200
  coin2.x=250
  coin3.x=300
  coin4.x=350
  coin5.x=400
  coin6.x=450
  coin7.x=150
  coin8.x=220
  coin9.x=270
  coin10.x=320
  coin11.x=410
  coin12.x=370
  coin13.x=480
  coin14.x=560
  coin15.x=630
  coin16.x=560
  coin17.x=630
  coin18.x=630
  coin19.x=560
  coin20.x=850
  coin21.x=1000
  coin22.x=1150
  coin23.x=1250
  coin24.x=900
  coin25.x=1070
  coin26.x=1000
  coin27.x=800
  coin28.x=1250
  coin29.x=1100
  coin30.x=950

   restart.x=11000
 
    mainPlayer.x=470
    mainPlayer.y=549
    mainPlayer.addAnimation("abcd",lmainPlayerimg)

    enemy1.addAnimation("abc",enemy1img)
    enemy1.velocityX=2
    
    enemy2.addAnimation("abc",enemy2img)
    enemy2.velocityY=-2
    
    enemy3.addAnimation("abc",enemy2img)
    enemy3.velocityY=2
    
    enemy4.addAnimation("abc",enemy2img)
    enemy4.velocityY=2
    
    enemy5.addAnimation("abcd",rotationenemy1img)
    enemy5.velocityX=-2
    
    enemy6.addAnimation("abcde",enemy1img)
    enemy6.velocityX=2
    
}

if(mainPlayer.isTouching(enemy4)){
  life=life-1;
  mainPlayer.x=470;
  mainPlayer.y=599;
  mainPlayer.addAnimation("abcd",lmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}

if(mainPlayer.isTouching(enemy2)){
  life=life-1;
  mainPlayer.y=220
  mainPlayer.x=100
  mainPlayer.addAnimation("abcd",lmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}
if(mainPlayer.isTouching(enemy3)){
  life=life-1;
  mainPlayer.y=220
  mainPlayer.x=100
  mainPlayer.addAnimation("abcd",lmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}

if(mainPlayer.isTouching(enemy1)){
  life=life-1;
  mainPlayer.x=680;
  mainPlayer.y=200;
  mainPlayer.addAnimation("abcd",rmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}

if(mainPlayer.isTouching(enemy5)){
  life=life-1;
  mainPlayer.y=200
  mainPlayer.x=680
  mainPlayer.addAnimation("abcd",rmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}
if(mainPlayer.isTouching(enemy6)){
  life=life-1;
  mainPlayer.y=200
  mainPlayer.x=680
  mainPlayer.addAnimation("abcd",rmainPlayerimg)
  mariodiessound.play()
  coinsound.stop()
gameoversound.stop()
jumpsound.stop()
stageclearsound.stop()
}





drawSprites();  
}