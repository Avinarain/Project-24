class Dustbin{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width=width
        this.height=height  
        }
        
    
    display(){
        var pos =this.body.position;
        Matter.Body.setStatic(this.body,true)
        rectMode(CENTER)
        fill("blue")
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}