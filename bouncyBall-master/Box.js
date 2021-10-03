class Box {
    constructor(x,y,w,h){
        this.height = h;
        this.width= w;
        this.x=x;
        this.y = y;

        var options={
            'restitution':0.3,
            'friction' : 1,
            'density' :1
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}