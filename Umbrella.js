class Umbrella {
    constructor(x, y) {
        var options = { 
            isStatic: true }
        this.image = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");

        this.umbrella = Bodies.circle(x, y, 50, options);

        World.add(world, this.umbrella)
    }
    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        animation(this.image, pos.x, pos.y + 20, 150, 150);
    }
}