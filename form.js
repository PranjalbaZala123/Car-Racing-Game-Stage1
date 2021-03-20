class Form{

 constructor(){

 }

 display(){

    var Title = createElement("h3");
    Title.html("Car Racing Game");
    Title.position(130, 0);

    var Input = createInput("Name");
    Input.position(130, 160);

    var Button = createButton("Submit");
    Button.position(250, 200);

    var Greeting = createElement("h3");
    Button.mousePressed(function(){
        Input.hide();
        Button.hide();
        var name = Input.value();
        playerCount += 1;
        player.update(playerCount);
        player.update1(name);
        Greeting.html("Hello" + name);
        Greeting.position(136, 160);
    })

 }


}