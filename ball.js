class ball
{
    constructor(x,y,r)
    {
      var options = 
      {
          restitution : 1,
          density : 0.5,
          friction : 0,
      }   
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      World.add(world, this.body);
    }
    display()
    {
        
         push();
         translate(this.body.position.x, this.body.position.y);
        
         rotate(this.body.angle);
         ellipseMode(RADIUS);
         fill("pink")
         ellipse(0,0,this.r)
         pop();
    }
 }