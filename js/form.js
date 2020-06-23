class Form {

    constructor() {
      this.button = createButton('Play');
      this.title = createElement('h2');
    }
    hide(){
      this.button.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("One in a minion");
      this.title.position(displayWidth/2 - 50, 0);

      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.button.hide();
        this.title.hide();
        bg.addImage("story page", bg2);
      });
  
    }
  }
  