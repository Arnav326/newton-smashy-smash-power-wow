class Chain 
{
    constructor(a,b,xoffset)
    {
        var chain_options = 
        {
                bodyA: a,
                bodyB: b
               
        }
        this.offsetX = xoffset;
        this.chain =  Constraint.create(chain_options);
        World.add(world,this.chain);
    }

    display()
    {
       var pointA = this.chain.bodyA.position
       var pointB = this.chain.bodyB.position
       strokeWeight(3)
          line(pointA.x,pointA.y,this.offsetX,pointB.y);
         
    }
}