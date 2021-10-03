class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        var options ={
            isStatic: true
        }
    
        this.body= Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height); 
    }
    
    
}