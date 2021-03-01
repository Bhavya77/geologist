class rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }

        this.body=Matter.Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=radius

       
    }
    display(){
        var pos=this.body.position

       

        
     
        
        fill("grey")
    ellipse(pos.x,pos.y,this.radius,this.radius)

  
    }
 
}