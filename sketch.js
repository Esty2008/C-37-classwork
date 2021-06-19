var gamestate=0;
var player;
var form;
var playerCount = 0;
var gameObject;
var allPlayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  gameObject = new Game();
  gameObject.getState();
  gameObject.start();
}

function draw(){
  if(playerCount === 4){
    gameObject.update(1);
  }
  if(gamestate === 1){
    clear();
    gameObject.play();
  }
}
