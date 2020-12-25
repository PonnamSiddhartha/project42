class Drops {
    constructor(x, y) {
        var options = {
            friction: 0.000009,
            restitution: 0.001
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);


        World.add(world, this.body);
    }
    display() {
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
    update() {
        if (this.body.position.y > 800) {
            Matter.Body.setPosition(this.body, { x: random(0, 800), y: random(0, 400) })
        }
    }
}