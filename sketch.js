var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;

var bg, bg2, bgimg, bg3;

var agnes, kevin, stuart, bob;

var vector, elmacho, bratt;

var i1, i2, i3, i4, i5, i6, i7;

var io, ip, iq;

var form;

function preload(){
    bgimg = loadImage("images/f23cfe6ed26e93d3fe7ab4a7336a1d40.jpg");
    bg2 = loadImage("images/despicable me.png");
    bg3 = loadImage("images/play ground.jpg");
    i1 = loadImage("images/agnes.png");
    i2 = loadImage("images/kevin.png");
    i3 = loadImage("images/bob.png");
    i4 = loadImage("images/stuart.png");
    i5 = loadImage("images/vector.png");
    i6 = loadImage("images/DM3_BRATT_CA_RD_03-768x1024.png");
    i7 = loadImage("images/elmacho.png");
    io = loadImage("images/stuart2.png");
    ip = loadImage("images/kevin2.png");
    iq = loadImage("images/bob2.jpeg");
}
function setup() {

    form = new Form();

    createCanvas(displayWidth-20, displayHeight-30);

    engine = Engine.create();
    world = engine.world;

    form = new Form();
    story = new Story();
 
    bg = createSprite(displayWidth/2 - 20, displayHeight/2 - 30, displayWidth-20, displayHeight-30);
    vector = createSprite(575, displayHeight/2-200, 50, 30);
    vector.visible = false;
    elmacho = createSprite(675, displayHeight/2-200, 50, 30);
    bratt = createSprite(775, displayHeight/2-200, 50, 30);
    agnes = createSprite(475, displayHeight/2-200, 50, 30);
    kevin = createSprite(275, displayHeight/2-200, 50, 30);
    stuart = createSprite(175, displayHeight/2-200, 50, 30);
    bob = createSprite(375, displayHeight/2-200, 50, 30);
    elmacho.visible = false;
    bratt.visible = false;

    bg.addImage("main page", bgimg);
    agnes.addImage("main page", i1);
    kevin.addImage("main page", i2);
    bob.addImage("main page", i3);
    stuart.addImage("main page", i4);
    vector.addImage("main page", i5);
    bratt.addImage("main page", i6);
    elmacho.addImage("main page", i7);
}
 
function draw() { 

    background(51);
 if(button.mousePressed() && World.frameCount > 100){
     agnes.visible = false;
     elmacho.isible = true;
     vector.visible = true;
     bratt.visible = true;
     bob.addImage("bob sad", iq);
     stuart.addImage("stuart sad", io);
     kevin.addImage("kein sad", ip);

 }
    

}