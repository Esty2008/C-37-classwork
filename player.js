class Player{
    constructor(){
        //name,distance,index
        this.index = null,
        this.name = null,
        this.distance = 0
    }
getCount(){
    var playercountRef=database.ref('playerCount');
     playercountRef.on("value",function(data){
          playerCount=data.val();
         });
}

updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}

update(){
    var playerIndex = 'players/Player '+ this.index;
    database.ref(playerIndex).update({
        playerName:this.name,
        distance:this.distance
    })
}
//static is to not asociate with other object
static getPlayerInfo(){
    var playerInfoRef=database.ref('players');
    playerInfoRef.on("value",(data)=>{
    allPlayers=data.val(); });
}
}