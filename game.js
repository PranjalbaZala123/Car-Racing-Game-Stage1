class Game{

    constructor(){

    }

 getState(){
     var getStateref = database.ref("gameState");
     getStateref.on("value", function(data){

        gameState = data.val();
     })


 }

 updateState(ball){
     database.ref("/").update({
         gameState:ball
     })
 }

 start(){
     if (gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();

     }
 }

}