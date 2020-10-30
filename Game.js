class Game{
    constructor(){
        
    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage(exp_img);
    player1.scale = 0.7;
  
    player2 = createSprite(400,500);
    player2.addImage(exp_img);
    player2.scale = 0.7;
  

    player3 = createSprite(600,500);
    player3.addImage(exp_img);
    player3.scale = 0.7;
  

    players=[player1,player2,player3];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x = 100;
                 var y = 200;
                 var index = 0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y = 500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;

                    
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                     textSize(25);
                     fill("white");
                     text("Player 1 : "+allPlayers.player1.score,50,50);
                     text("Player 2 : "+allPlayers.player2.score,50,100);
                     text("Player 3 : "+allPlayers.player3.score,50,150);
                    
                     console.log(allPlayers);
                 
                 }
                console.log("E");
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     console.log("Hello");
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: fruits.addImage(fruit1_img);
                         break;
                         case 2: fruits.addImage(fruit2_img);
                         break;
                         case 3: fruits.addImage(fruit3_img);
                         break;
                         case 4: fruits.addImage(fruit4_img);
                         break;
                         
                         default:
                        break;
                     }
                    
                    
                     fruitGroup.add(fruits);
                   
                   
                       if(fruitGroup != null || fruitGroup != undefined){
                           for(var i = 0;i < fruitGroup.maxDepth();i++){
                            if(fruitGroup.get(i) != undefined){
                                if(fruitGroup.get(i).isTouching(player1)||fruitGroup.get(i).isTouching(player2)||fruitGroup.get(i).isTouching(player3)){
                                    fruitGroup.get(i).destroy();
                                    
                                    player.score = player.score + 1;
                                    player.update();
                                }
                            }
                           }
                       }
                 }

                 if(player.score >= 10){
                     game.update(3);
                 }
                 
                  
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
       treasure = createSprite(550,475);
       treasure.addImage(treasure_img);
       treasure.scale = 0.3;
    }
    secondlevel(){
       fruits.destroy();
        form.hide();
        player.getPlayersAtEnd();

        Player.getPlayerInfo();
         image(back_img2, 0, 0, 1000, 800);
         var x = 100;
         var y = 200;
         var index = 0;
         drawSprites();
         for(var plr in allPlayers){
            
            
             index = index+1;
             x = 500-allPlayers[plr].distance;
             y = 500;
             
             players[index -1].x = x;
             players[index - 1].y = y;

            
               
             if(index === player.index){
                 
                 fill("black");
                 textSize(25);
                 text(allPlayers[plr].name ,x-25,y+25);

                 
             }
             textSize(25);
             fill("white");
             text("Player 1 : "+allPlayers.player1.score,50,50);
             text("Player 2 : "+allPlayers.player2.score,50,100);
             text("Player 3 :"+allPlayers.player3.score,50,150);
            
             console.log(allPlayers);
         
         }
       // console.log("E");
        
         

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }
    
         if (frameCount % 30 === 0) {
             //console.log("Hello");
             coins = createSprite(random(100, 1000), 0, 100, 100);
             coins.velocityY = 7;
             
            coins.addImage(coin_img);
            coins.scale = 0.1;
            coinGroup.add(coins);
             }
            
            
            
           
           
               if(coinGroup != null || fruitGroup != undefined){
                   for(var i = 0;i < coinGroup.maxDepth();i++){
                    if(coinGroup.get(i) != undefined){
                        if(coinGroup.get(i).isTouching(player1)||coinGroup.get(i).isTouching(player2)||coinGroup.get(i).isTouching(player3)){
                            coinGroup.get(i).destroy();
                            
                            
                        }
                    }
                   }
               }
               if (frameCount % 30 === 0) {
                //console.log("Hello");
                books = createSprite(random(100, 1000), 0, 100, 100);
                books.velocityY = 7;
                
               books.addImage(book_img);
               books.scale = 0.3;
               bookGroup.add(books);
                }
               
               
               
              
              
                  if(bookGroup != null || bookGroup != undefined){
                      for(var i = 0;i < bookGroup.maxDepth();i++){
                       if(bookGroup.get(i) != undefined){
                           if(bookGroup.get(i).isTouching(player1)||bookGroup.get(i).isTouching(player2)||bookGroup.get(i).isTouching(player3)){
                               bookGroup.get(i).destroy();
                               
                               player.score = player.score + 1;
                               player.update();
                           }
                       }
                      }
                  }
                  if (frameCount % 30 === 0) {
                    //console.log("Hello");
                    keys = createSprite(random(100, 1000), 0, 100, 100);
                    keys.velocityY = 7;
                    
                   keys.addImage(key_img);
                   keys.scale = 0.2;
                   keyGroup.add(keys);
                    }
                   
                   
                   
                  
                  
                      if(keyGroup != null || keyGroup != undefined){
                          for(var i = 0;i < keyGroup.maxDepth();i++){
                           if(keyGroup.get(i) != undefined){
                               if(keyGroup.get(i).isTouching(player1)||keyGroup.get(i).isTouching(player2)||keyGroup.get(i).isTouching(player3)){
                                   keyGroup.get(i).destroy();
                                   
                                  
                               }
                           }
                          }
                      }
                     if(player.score >= 50){
                       
                         player.rank = player.rank + 1;
                         Player.updatePlayersAtEnd(player.rank);
                         end();
                     }
         }

        
         
          
        

 
 

 

    
}
