var ball;
var magicBall;
var database,position
var form,player,game;
var gameState=0;
var playerCount;
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game = new Game(); game.getState(); game.start();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    magicBall=createSprite(340,260,10,10);
    magicBall.shapeColor ="blue";

var magicBallposition=database.ref('ball/position');
    magicBallposition.on("value",readposition);


}
function draw(){

    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    magicBall.x = magicBall.x + x;
    magicBall.y = magicBall.y + y;
}
function readposition(data)
{
    position=data.val();
    magicBall.x=position.x;
    magicBall.y=position.y;


}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y


    })

    
    
}