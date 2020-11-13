class ground extends dustbinClass{
    
    constructor(x,y,width, height)
    {
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
        this.x=x;
        this.y=y;
        this.height=this.height;
        this.width=this.width;
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
        World.add(world, this.body);


    }
    display()
    {

        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("white")
        pop()
    }
}