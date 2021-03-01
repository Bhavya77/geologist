class hammer{

    constructor(x,y,width,height){

      var  option={

        'density':2,
        'friction':1.0,
        'restitution':0.5
      };
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    
    display(){
        var pos=this.body.position
        pos.x=mouseX
        pos.y=mouseY
        
        rectMode(CENTER)
         
        fill("yellow")
        rect(pos.x,pos.y,this.width,this.height)
  
    }

}