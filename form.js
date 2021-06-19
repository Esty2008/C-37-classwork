class Form{
    constructor(){
        this.input = createInput('Name')
        this.button = createButton('PLAY')
        this.greeting = createElement('h5')
    }

    display(){
        var title = createElement('h1')
        title.html('car racing game')
        title.position(400,100)

        this.input.position(300,200)
        this.button.position(300,270)
        //this refers to the oject calling the function which is form
        //this.button refers to the button and not the form 
        /*this.button.mousePressed(function(){
            this.button.hide()
            this.input.hide()
            
            //storing input value or "name" inside of name variable
            var name = this.input.value()
            //Incrementing playerCount variable by 1
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            this.greeting.html('Welcome to Car Racing Game ' + name);
            this.greeting.position(300,200);
        })*/
        this.button.mousePressed(()=>
         //this.button it refers to button 
         {   //hence whatevevr is inside it refers to button 
            //but we want it should refer to form only 
            this.input.hide(); 
            this.button.hide(); 
            var name = this.input.value(); 
            player.name = name;
            playerCount += 1; 
            player.index = playerCount;
            player.update(name); 
            player.updateCount(playerCount); 
            this.greeting.html("Hello " + name); 
            this.greeting.position(650, 400); });

        
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}