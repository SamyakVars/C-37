class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide()
    text("Game Has Been Started", 120, 100)
    player.getPlayerInfo()
    if(allplayers !== undefined){
      var display_position = 130;
        if(plr == "player" + player.index()){
          fill(255, 0, 0)
        } else{
          fill(0)
        }




      display_position += 20

      textSize(15)
      text(allplayers[plr].name + ": " + allplayers[plr].distance, 120, display_position)

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 50
      player.update()
    }   
  }
}