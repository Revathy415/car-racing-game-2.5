class Form
{
    constructor(){
        this.input=createInput("name");
        this.button=createButton('play');
        this.greeting=createElement('h3');
        this.title=createElement('h2');
        this.reset=createButton('Reset');

    }
    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
         this.title.hide();

    }
    display()
    {
        background(bg);
        var title=createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2,50);

      
       this.input.position(displayWidth/2+50,displayHeight/3-50);
        this.button.position(displayWidth/2+100,displayHeight/3-10);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
           this.input.hide();
            this.button.hide();
           player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight/4);
            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
game . update(0);
        })
    }
}