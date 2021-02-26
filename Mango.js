class Mango {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0,
          'friction':1
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(x, y, 1,options,50,50);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image , 0, 0, this.widht, this.height);
      pop();
    }
  };