window.onload = function(){
    var game = document.getElementById('demo1');
    var c = game.getContext("2d");
    //load images
    var bird = document.createElement("img");
    var Northpipe = document.createElement("img");
    var Southpipe = document.createElement("img");
    var bg  = document.createElement("img");
    var fg = document.createElement("img");
    if(game.width>window.innerWidth){
    game.width = window.innerWidth;
    }
    if(game.height>window.innerHeight){
    game.height = window.innerHeight;
    }
    bird.src = "bird.png";
    Northpipe.src = "pipeNorth.png";
    Southpipe.src = "pipeSouth.png";
    fg.src = "fg.png";
    bg.src = "bg.png";
    var gap = game.height*(13.8/100);
    var constant = game.height*(51.72/100)+gap;
    var bx = 0;
    var g = 9.8;
    var bX = 20+bx;
    var bY = game.height/2;
    document.onkeydown = function(e){
        if(e.key=="ArrowUp"){
            bY-=10;
        }
        if(e.key=="ArrowDown"){
            bY+=2;
        }
        if(e.key=="Space"){
            clearInterval(x);
        }
        
    }
    var pipe = [];
    pipe[0] = {
        x:game.width,
        y:0
    };
    let l =1;
    //draw
    bg.addEventListener('load',myfunc);
    var x;
    function myfunc(){
       x =  setInterval(function(){
            c.drawImage(bg,0,0,game.width,game.height);
            for(let i=0;i<pipe.length;i++){
                c.drawImage(Northpipe,pipe[i].x,pipe[i].y);
                c.drawImage(Southpipe,pipe[i].x,pipe[i].y+constant);
                pipe[i].x -=20;
                if(pipe[i].x<=bX && bX<=pipe[i].x+Northpipe.width){
                   if(bY-bird.height/2<=pipe[i].y+Northpipe.height||bY+bird.height/2>=pipe[i].y+constant){
                       location.reload();
                   }
                   document.getElementById('demo').innerHTML = l;
                   l++;
                }
                if(bY+bird.height>=game.height-fg.height){
                    location.reload();
                }
                if(pipe[i].x==game.width*(81.81/100)){
                    pipe.push({
                        x:game.width,
                        y:Math.floor(Math.random()*Northpipe.height)-Northpipe.height
                    });
                }
            }
            c.drawImage(fg,0,game.height- fg.height,game.width,game.height);
            c.drawImage(bird,bX,bY);
            bY+=g;
            //detection collision
            
        },200)
    }
}
