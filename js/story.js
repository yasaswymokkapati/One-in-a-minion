class Story {

    constructor() {
      this.button = createButton('continue');
    }
    hide(){
      this.button.hide();
    }
    display(){
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.button.hide();
      bg.addImage("game page", bg3);
    });
    }
  }
  