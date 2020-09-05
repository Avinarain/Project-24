class Ground{
    constructor(){
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(400,540,800,12,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        fill("purple")
        rect(400,540,850,12)
    }
}