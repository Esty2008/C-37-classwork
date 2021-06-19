class Game{
constructor(){

}
getState(){
    //fetching value from database
    var gamstateRef=database.ref('gamestate')
    //listining for changes in gamestateRef and fetches value inside data variable 
    //and storing insode gamestate variable
    gamstateRef.on('value',function( data){
        gamestate=data.val()
    })

}
update(state){
    database.ref('/').update({
        gamestate:state
        //Update all changes into database in gamestate variable with whatever is passed into sate
    })
}
/*start(){
    if(gamestate===0){
        player=new Player()
        player.getCount() 
        form=new Form()
        form.display()   
    }
}*/
async start(){ 
    if(gamestate === 0){ player = new Player(); 
    var playerCountRef = await database.ref('playerCount').once("value"); 
    if(playerCountRef.exists()){ playerCount = playerCountRef.val(); player.getCount(); 
    } 
    form = new Form() 
    form.display(); 
} 
}
play() { 
    form.hide(); 
    textSize(30); 
    text("Game Start", 120, 100) 
    Player.getPlayerInfo(); 
    console.log(allPlayers[0].name);
    if(allPlayers !== undefined)
    {
        var display_position = 130; 
        for(var plr in allPlayers)
        {
       // console.log(allPlayers[plr].name); 
        if (plr === "player" + player.index) 
        fill("red") 
        else 
        fill("black"); 
        display_position+=20; textSize(15); 
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position) 
    } 
    } 
}
}