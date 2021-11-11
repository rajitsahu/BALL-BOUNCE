var canvas;
var music;
var ball
var surface1 
var surface2
var surface3
 var surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,590,180,20)
surface1.shapeColor="green"
surface2=createSprite(300,590,180,20)
surface2.shapeColor="orange"
surface3=createSprite(500,590,180,20)
surface3.shapeColor="red"
surface4=createSprite(700,590,180,20)
surface4.shapeColor="blue"
ball = createSprite(random(20,750),100, 40,40);
ball.shapeColor="white"

ball.velocityX=5
ball.velocityY=8


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
if(ball.x<0){
    music.stop()
    ball.velocityX=3
}
else if(ball.x>800){
music.stop()
ball.velocity=-3

}



    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)

    //add condition to check if box touching surface and make it box
if(surface1.isTouching(ball)&&ball.bounceOff(surface1)){
    ball.shapeColor="green"
    music.play()  
}
if(surface2.isTouching(ball)){
ball.shapeColor=rgb(255,128,0)
ball.velocityX=0
music.stop()
}
if(surface3.isTouching(ball)&&ball.bounceOff(surface3)){
    ball.shapeColor="red"
    music.play()

}
if(surface4.isTouching(ball)&&ball.bounceOff(surface4)){
    ball.shapeColor="blue"
    music.play()
}

if(ball.y<0){
    music.stop()
    ball.velocityY=3


}
drawSprites()
}




