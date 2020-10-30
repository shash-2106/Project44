 var player1,player2,player3;
 var database; 
 var back_img, back_img2; 
 var gameState =0; 
 var playerCount = 0;
 var allPlayers; 
 var score =0; 
 var player, form, game; 
 var player1,player2; 
 var players; 
 var fruits; 
 var fruitGroup; 
 var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img; 
 var player_img;
 var player1score =0;
 var player2score =0;
 var coin_img, key_img, book_img;
 var coins, books, keys;
 var treasure, treasure_img;

function preload(){
  exp_img = loadImage("explorer.png");

  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("pineapple2.png");
  fruit4_img = loadImage("orange2.png");
 

  back_img = loadImage("forest for game.jpg");
  back_img2 = loadImage("cave.jpg");

  coin_img = loadImage("coin.png");
  book_img = loadImage("books.png");
  key_img = loadImage("key.png");
  treasure_img = loadImage("treasure.png");
}

function setup() {
  createCanvas(1600,1600);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

fruitGroup = new Group();
coinGroup = new Group();
bookGroup = new Group();
keyGroup = new Group();
}

function draw() {
  background(255,255,255);  

  if(playerCount == 3){
    game.update(1);
  }  
  if(gameState == 1){
    game.play();
  }
  if(gameState == 2){
    game.end();

  }

  if(gameState == 3){
    game.secondlevel();
  }

  drawSprites();
}