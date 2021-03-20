var database;
var player;
var game;
var form;
var playerCount;
var gameState = 0;


function setup(){

    database=firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.start();
    game.getState();



}

function draw(){
    background("white");
   
    drawSprites();
}




