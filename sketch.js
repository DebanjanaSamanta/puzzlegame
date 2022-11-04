var bg;
var player,playeri,front,right,left,back;
var treegroup,t1,t2,t3,t4,t5,t1i,t2i,t3i,t4i,t5i;
var giraffe,fox,dog,cat,lion,tiger;
var giraffei,foxi,dogi,cati,lioni,tigeri;
var ghost,ghostgrp,witchgrp,ghost1,ghosta,ghostb,ghost2,witch1,witch2,witcha,witchb;
var coin,diamondi,coingeroup,diamondgroup;
var hitsnd,goldsnd,diamondsnd,winsnd,loossnd,happysnd;

var PLAY=1
var END=0
var gameState=PLAY;

var score=0;
var life=3;
var animals=0;
var musicisplaying="false";

function preload(){

bg=loadImage("ground.jpg");


coin=loadImage("gold.png");
diamondi=loadImage("diamond.png")

//adding all the animals
giraffei=loadImage("animals/germanshepherd.png");
lioni=loadImage("animals/Husky.png");
dogi=loadImage("animals/pitbull.png");
cati=loadImage("animals/cat1.png");
foxi=loadImage("animals/cat2.png");
tigeri=loadImage("animals/cat3.png");

//adding all the trees
t1i=loadImage("trees/tree1.png");
t2i=loadImage("trees/tree2.png");
t3i=loadImage("trees/trees3.png");
t4i=loadImage("trees/tree4.png");
t5i=loadImage("trees/tree5.png");

//adding the animation of the player
playeri=loadImage("player/a1.png");
left=loadImage("player/b1.png");
right=loadImage("player/c1.png");
back=loadImage("player/d1.png");


//loading the enemies
ghost1=loadImage("ghosts.png");
ghost2=loadImage("ghosts.png");
witch1=loadImage("witch.png");
witch2=loadImage("witch.png")

}

function setup() {
 
  createCanvas(windowWidth,windowHeight);

  //creating the player
  player =createSprite(windowWidth/2-100,height/2+50, 50, 50);
  player.addImage(playeri);
  player.scale=2
//  player.setCollider("rectangle",0,0,player.width,player.hieght);
 // player.debug=false;

  //creating the trees
 t1=createSprite(width-50,height/2-180,50,50);
 t1.addImage(t1i);
 t1.scale=1;
 t1.depth=player.depth
 
 t2=createSprite(width-50,height/2+180,50,50);
 t2.addImage(t2i);
 t2.scale=1;
 t2.depth=player.depth

 t3=createSprite(width/2-450,height/2-180,50,50);
 t3.addImage(t3i);
 t3.scale=1;
 t3.depth=player.depth

 t4=createSprite(width/2-420,height/2+180,50,50);
 t4.addImage(t4i);
 t4.scale=1.3;
 t4.depth=player.depth

 t5=createSprite(width/2,height/2,50,50);
 t5.addImage(t5i);
 t5.scale=0.3;
 t5.depth=player.depth


//creating the animals 
giraffe=createSprite(width/2-380,height/2-180,50,50);
giraffe.addImage(giraffei);
giraffe.scale=0.5;
giraffe.visible=true

lion=createSprite(width/2+380,height/2-180,50,50);
lion.addImage(lioni);
lion.scale=0.5;

dog=createSprite(width/2-350,height/2+220,50,50);
dog.addImage(dogi)
dog.scale=0.5;

cat=createSprite(width/2+350,height/2+220,50,50);
cat.addImage(cati)
cat.scale=0.2;


//creating the ghosts
ghosta=createSprite(width/2,height/2+180,50,50);
ghosta.addImage(ghost1);
ghosta.scale=0.2
ghosta.depth = player.depth;
player.depth = player.depth + 1;
ghosta.velocityX=-15

ghostb=createSprite(width/2,height/2-180,50,50);
ghostb.addImage(ghost2);
ghostb.scale=0.2;
ghostb.depth = player.depth;
ghostb.velocityX=+15

witcha=createSprite(width/2-380,height/2,50,50);
witcha.addImage(witch1);
witcha.scale=0.2;
witcha.depth=player.depth;
witcha.velocityY=+10

witchb=createSprite(width/2+380,height/2,50,50);
witchb.addImage(witch2);
witchb.scale=0.2;
witchb.depth=player.depth;
witchb.velocityY=-10



//creating the groups
treegroup=new Group();
animals=new Group();
coingeroup=new Group();
diamondgroup=new Group();
ghostgrp=new Group();
witchgrp=new Group();


}

function draw() {
  background(bg);  
  drawSprites();

  if(gameState===PLAY){

    edges= createEdgeSprites();
    player .collide(edges);
    player.visible=true;
    //arrow function to the player
    if(keyDown("UP_ARROW")||touches.length>0){
      player.y = player.y-30
      player.addImage(back)
    }
    if(keyDown("DOWN_ARROW")||touches.length>0){
     player.y = player.y+30
     player.addImage(playeri)
    }

    if(keyDown("LEFT_ARROW")||touches.length>0){
      player.x= player.x-30
      player.addImage(left)
    }
    if(keyDown("RIGHT_ARROW")||touches.length>0){
     player.x = player.x+30
     player.addImage(right)
    }

    if(ghosta.x<=0){
      ghosta.velocityX=+15
    }
    if(ghosta.x>=windowWidth){
      ghosta.velocityX=-15
    }

    if(ghostb.x<=0){
      ghostb.velocityX=+15
    }
    if(ghostb.x>=windowWidth){
      ghostb.velocityX=-15
    }


    if(witcha.y<=0){
      witcha.velocityY=+10
    }
    if(witcha.y>=windowHeight){
      witcha.velocityY=-10
    }

    if(witchb.y<=0){
      witchb.velocityY=+10
    }
    if(witchb.y>=windowHeight){
      witchb.velocityY=-10
    }

    if(player.isTouching(t1)){
      life=life-1
    }
    if(player.isTouching(t2)){
      life=life-1
    }

    if(player.isTouching(t3)){
      life=life-1
    }

    if(player.isTouching(t4)){
      life=life-1
    }

    if(player.isTouching(giraffe)){
      giraffe.visible=false
      animals=animals+1
    }

    if(player.isTouching(lion)){
      lion.visible=false
      animals=animals+1
    }

    if(player.isTouching(cat)){
      cat.visible=false
      animals=animals+1
    }

    if(player.isTouching(dog)){
      dog.visible=false
      animals=animals+1
    }

    createCoins();
    createCrystals();


    if(coingeroup.isTouching(player)){
      coingeroup.destroyEach()
      score=score+5

    }

    if(diamondgroup.isTouching(player)){
      diamondgroup.destroyEach()
      score=score+10

    }

  
    if(witcha.isTouching(player)) {
      gameState=END;
      player.visible=false;
      
      coingeroup.destroyEach();
      diamondgroup.destroyEach();
      coingeroup.setVelocityYEach(0);
      diamondgroup.setVelocityYEach(0);

      gameOver();

    }

    if(witchb.isTouching(player)) {
      gameState=END;
      player.visible=false;
      
      coingeroup.destroyEach();
      diamondgroup.destroyEach();
      coingeroup.setVelocityYEach(0);
      diamondgroup.setVelocityYEach(0);

      gameOver();

    }

    if(ghosta.isTouching(player)) {
      gameState=END;
      player.visible=false;
      
      coingeroup.destroyEach();
      diamondgroup.destroyEach();
      coingeroup.setVelocityYEach(0);
      diamondgroup.setVelocityYEach(0);

      gameOver();

    }

    if(ghostb.isTouching(player)) {
      gameState=END;
      player.visible=false;
      
      coingeroup.destroyEach();
      diamondgroup.destroyEach();
      coingeroup.setVelocityYEach(0);
      diamondgroup.setVelocityYEach(0);

      gameOver();

    }



  

}

function createCoins() {
  if (World.frameCount % 150 == 0) {
  var jwellery = createSprite(Math.round(random(width-50,width/2-420),40, 10, 10));
  jwellery.addImage(coin);
  jwellery.scale=0.3;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  coingeroup.add(jwellery);
  }
}

function createCrystals() {
  if (World.frameCount % 150 == 0) {
  var diamond = createSprite(Math.round(random(width-50,width/2-420),40, 10, 10));
  diamond.addImage(diamondi);
  diamond.scale=0.2;
  diamond.velocityY = 3;
  diamond.lifetime = 150;
  diamondgroup.add(diamond);
  }
}
}
 function gameOver(){

if(score>10){
  
  swal(


    {
      title:`Try again!!`,
      confirmButtonText:`Play again`,


    },


  )


}
  
  
  }




 