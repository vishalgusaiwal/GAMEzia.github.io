let c = document.querySelector('canvas');
c.width=window.innerWidth;
c.height=window.innerHeight;
let k = c.getContext('2d');
var colorarray= [
    '#ff4352',
    '#00ff53',
    '#132ff4',
    '#ff0022',
    '#11ff00',
    '#000000',
]
//var minradius=4;
var maxradius=55;
var mouse={
    x:undefined,
    y:undefined
}
window.addEventListener("touchmove", function(event){
    mouse.x=event.x;
    mouse.y=event.y;
})
function Circle(x,y,dx,dy,radius) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.minradius= radius;
    this.dx=dx;
    this.dy=dy;
    this.color=colorarray[Math.floor(Math.random()*colorarray.length)];
    this.draw = function() {
        k.beginPath();
        k.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        k.fillStyle=this.color;
        k.fill();
    }
    this.update = function() {
        if(this.x+this.radius>innerWidth||this.x-this.radius<0)
        { this.dx = -this.dx;}
        if(this.y+this.radius>innerHeight||this.y-this.radius<0)
        { this.dy = -this.dy;}
        this.x+=this.dx;
        this.y+=(this.dy);
        //interactivity
        if(mouse.x-this.x<50&&mouse.x-this.x>-50&&mouse.y-this.y<50&&mouse.x-this.x>-50)
        {if(this.radius<maxradius)
            this.radius+=1;}
        else if(this.radius>this.minradius)
        {this.radius-=1;}
        this.draw();
    }
}

var circlearray = [];
for(var i=0;i<1000;i++)
{  var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var dx = (Math.random()-0.5)*10;
    var dy = (Math.random()-0.5)*5;
    var radius=Math.random()*4+4;
    circlearray.push(new Circle(x,y,dx,dy,radius));
}
//var circle = new Circle(100,100,2,2,30)

//circle.draw();
function animate() {
    requestAnimationFrame(animate);
    k.clearRect(0,0,innerWidth,innerHeight);
    for(let j=0;j<circlearray.length;j++)
    { circlearray[j].update(); }
}
animate();
