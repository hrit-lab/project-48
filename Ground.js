class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        noStroke();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        pop();
    }
}