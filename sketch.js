var database;
var gamestate=0;
var playercount;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4,cars;

function preload(){
    c1 = loadImage("images/car1.png");
    c2 = loadImage("images/car2.png");
    c3 = loadImage("images/car3.png");
    c4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");

}

function setup(){
    createCanvas(displayWidth-100,displayHeight-200);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();


    
}

function draw(){
    background("white");
    
    if(playercount===4){
        game.update(1);
    }
    if(gamestate===1){
        clear();
        game.play();
    }
    if(gamestate===2){
        game.END();
    }

}

