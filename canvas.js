var c = document.querySelector("canvas");
c.width=window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext('2d');
var colorarray= [
    '#ff4352',
    '#00ff53',
    '#132ff4',
    '#ff0022',
    '#11ff00',
    '#000000',
    '#131ff6',
    '#349ff3',
]
var mouse={
    x:undefined,
    y:undefined
};
/*window.addEventListener("touchmove", function(event){
    ontouchmove.x=event.x;
    ontouchmove.y=event.y;
});*/
function CircleMotion(x,y,radius) {
    this.x=x;
    this.y=y;
    this.radian = Math.random()*Math.PI*2;
    this.radius= radius;
    this.distancefrmcntr = Math.random();
    this.color=colorarray[Math.floor(Math.random()*colorarray.length)];
    var a = 0;
    var b = 0;
    this.update = function () {
        a = this.x;
        b = this.y;
        this.x +=Math.cos(this.radian)*(this.distancefrmcntr*100+100);
        this.y +=Math.sin(this.radian)*(this.distancefrmcntr*100+100);
        this.radian += 0.09;
        this.draw();
    }
      this.draw =() => {
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.moveTo(a,b);
          ctx.lineTo(this.x,this.y);
          ctx.lineWidth = this.radius;
          ctx.stroke();
          ctx.closePath();
      }

}
var array = [];
for(var i=0;i<100;i++)
{
    var x = innerWidth/2;
    var y = innerHeight/2;
    const radius = Math.random()*2+1;
    array.push(new CircleMotion(x,y,radius));
}
//var particle = new CircleMotion(innerWidth/2,innerHeight/2);
function animate() {
   requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.fillRect(0,0,c.width,c.height);
   for(var j=0;j<100;j++)
   {array[j].update();}

}
animate();
