class Game{
    constructor(){

    }
   getState(){
       var gamestateref = database.ref("gamestate");
       gamestateref.on('value', function(data){
           gamestate=data.val();
       })
   }
   update(state){
       database.ref('/').update({
           gamestate:state
       })
   }
   async start(){
    if(gamestate===0){
        player=new Player();
        var playercountRef=await database.ref('playercount').once("value");
        if(playercountRef.exists()){
            playercount = playercountRef.val();
           player.getCount();
        }
        form=new Form();
        form.display();
    }
        car1 = createSprite(100,200);
        car1.addImage(c1);
        car2 = createSprite(300,200);
        car2.addImage(c2);
        car3 = createSprite(500,200);
        car3.addImage(c3);
        car4 = createSprite(700,200);
        car4.addImage(c4);

        cars = [car1,car2,car3,car4];
}
   play(){
       form.hide();
       Player.getPlayerInfo();
       if(allPlayers!==undefined){
           background(ground);
           image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
           var index=0;
           var x=175;
           var y;
           for(var plr in allPlayers){
             index+=1;
             x = x+200;
             y=displayHeight-allPlayers[plr].distance;
             cars[index-1].x=x;
             cars[index-1].y=y;   
             if(index===player.index){
                 fill("blue");
                 circle(x,y,60);
                 cars[index-1].shapeColor="red";
                 camera.position.x=displayWidth/2;
                 camera.position.y=cars[index-1].y;
             }      
            }
       }
       if(keyDown(UP_ARROW)&& player.index!==null){
           player.distance+=50;
           player.update();
       }
       if(player.distance>3860){
           gamestate=2;

       }
       drawSprites();
   }
   END(){
       console.log('game END');
   }
   
}