window.onload = function(){
  $(document).ready(function(){
    var anm = document.getElementById('pattap');
      var ctx = anm.getContext("2d");
      var dy = 15;
      var ac = 0.5;
      var bY = anm.height/2;
      var bX = anm.width/2;
      function draw(){
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,anm.width,anm.height);
        ctx.arc(bX,bY,10,0,2*Math.PI,true);
        ctx.fillStyle = "green";
        ctx.fill();
      }
      var x = document.createElement("audio");
      document.onkeydown = function(event){
        if(event.which==38){
          x.src = "Censor-sound.mp3";
          x.play();
          bX = anm.width/2;
          var id= setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY==anm.height/2){
              dy = 15;
              clearInterval(id);
            }
            draw();
          },100);
        }
        if(event.which==39){
          x.src = "Sci-fi-scanner.mp3";
          x.play();
          bX+=30;
          var id= setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY==anm.height/2){
              dy = 15;
              clearInterval(id);
            }
            draw();
          },100);
        }
        if(event.which==40){
          x.src = "Shutter-sound.mp3";
          x.play();
          bX+=-60;
          var id= setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY==anm.height/2){
              dy = 15;
              clearInterval(id);
            }
            draw();
          },100);
        }
        if(event.which==32){
          x.src = "Switch-click-sound.mp3";
          x.play();
          bX+=150;
          var id= setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY==anm.height/2){
              dy = 15;
              clearInterval(id);
            }
            draw();
          },100);
        }
        if(event.which==16){
          x.src = "Usb-connection-sound-effect.mp3";
          x.play();
          bX-=400;
          var id= setInterval(function(){
            bY-=dy;
            dy-=ac;
            if(bY==anm.height/2){
              dy = 15;
              clearInterval(id);
            }
            draw();
          },100);
        }
      }
  });
};