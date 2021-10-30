class bolaa {
    constructor(x,y,radiusX) {
      var options = {
         'density':1.2,
         'friction': 0,
         'restitution':0.3, 
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,radiusX);
      this.radiusX = radiusX
	  this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.radiusX);
	   imageMode(CENTER);
	   image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
    }
  };