const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = []
var thunder1, thunder2, thunder3, thunder4, thunderS;
var thunder;
var maxDrops = 100
var umbrella;
var line1,line2

function preload() {
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}


function setup() {
    createCanvas(600, 900);

    engine = Engine.create();
    world = engine.world;

    thunder=createSprite(300,20,20,100);
    thunder.visible=false
    if(frameCount%50===0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Drops(random(0,400),random(0,200)))
        }
    }
    umbrella = new Umbrella(300, 500)
    umbrella.scale = 0.5;

    line1 = new Spo(300,220,150,10);
    line2 = new Spo(290, 280, 250, 10);
    Engine.run(engine)
}

function draw() {
    background(0);
    Engine.update(engine)
    if(frameCount%100===0){
        thunder.visible=true
        thunder.play()
    }else if(frameCount%100!==0){
        thunder.visible=false
    }
    for (var j = 0; j < drops.length; j = j + 50) {
        drops[j].display();

    }
    for (var k = 0; k < drops.length; k++) {
        drops[k].update();
    }
    line1.display();
    line2.display();
    //line3.display();
    umbrella.display();
    if (thunder !== null) {

        var rand = Math.round(random(1, 4))

        switch (rand) {
            case 1: thunder.addImage("thunder", thunder1)
                break;
            case 2: thunder.addImage("thunder", thunder2)
                break;
            case 3: thunder.addImage("thunder", thunder3)
                break;
            case 4: thunder.addImage("thunder", thunder4)
                break;
            default: break;
        }
    }
    drawSprites();
}
