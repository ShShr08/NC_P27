class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
        display(){
            var pointA= this.rope.bodyA.position;
            var pointB= this.rope.bodyB.position;

            
            strokeWeight (1)
            var point1X = pointA.x
            var point1Y = pointA.y
            
            var point2X = pointB.x+this.offsetX
            var point2Y = pointB.y+this.offsetY
            line(point1X,point1Y,point2X,point2Y);
        }
        
}