class Player{
   
    constructor(){


    }
    
getCount(){
        var getCountref = database.ref("playerCount");
        getCountref.on("value", function(data){
   
           playerCount = data.val();
        })
   
   
    }
   
update(ball){
        database.ref("/").update({
            playerCount:ball
        })
    }

update1(name){

    var playerIndex="Player" + playerCount;

    database.ref(playerIndex).set({
        name:name
    })
    
}

}