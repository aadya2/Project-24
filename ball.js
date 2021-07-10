class Ball{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 0.2
        }
        this.body = Bodies.circle(x, y, 65, options);
        this.radius = 65;
        this.image = loadImage("Basketball.png");
        World.add(world, this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(RADIUS);
        // fill("Green");
        image(this.image, pos.x, pos.y, 65, 65);
        pop();
    }
}