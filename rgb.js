
var colors=generateRandomColors(6);
	var pickedColor=pickColor();
	var colorDisplay=document.getElementById("colorDisplay");
	colorDisplay.textContent=pickedColor;
	var message=document.querySelector("#message"); 
	var h=document.querySelector("h1");
 var numSquares =6;	





	var resetButton=document.querySelector("#resetButton");
		resetButton.addEventListener("click",function()
		{
			colors=generateRandomColors(numSquares);
			pickedColor=pickColor();
			message.textContent="";
			this.textContent="New Colors!"
			colorDisplay.textContent=pickedColor;
	 		for(var i = 0; i <squares.length; i++){
	 		squares[i].style.backgroundColor=colors[i];	
	 		}	
	 		h.style.backgroundColor="steelblue";
	});
	





	var easyBtn=document.querySelector("#easyBtn");
	var hardBtn=document.querySelector("#hardBtn");
	easyBtn.addEventListener("click",function()
		{	hardBtn.classList.remove("selected");	
			easyBtn.classList.add("selected");
			numSquares=3;

			colors=generateRandomColors(numSquares);
    		
			pickedColor=pickColor();
			colorDisplay.textContent=pickedColor;
			for (var i = 0; i <squares.length; i++){
				if(colors[i])
				{
					squares[i].style.backgroundColor=colors[i];
				}

				else{
					squares[i].style.display="none";
				}


			}



		}
		);
	hardBtn.addEventListener("click",function()
		{		

			easyBtn.classList.remove("selected");
			hardBtn.classList.add("selected");
			numSquares=6;
			colors=generateRandomColors(numSquares);
			pickedColor=pickColor();
			colorDisplay.textContent=pickedColor;
			for (var i = 0; i <squares.length; i++){
				
				
					squares[i].style.backgroundColor=colors[i];
					squares[i].style.display="block";
				}
			}
		);




	 var squares=document.querySelectorAll(".square");
	 for (var i = 0; i <squares.length; i++)
 			{squares[i].style.backgroundColor=colors[i];
 
  					squares[i].addEventListener("click",function()
  						{
  							var clickedColor=this.style.backgroundColor;
  							console.log(clickedColor,pickedColor);
  							if(clickedColor===pickedColor){
  							h.style.backgroundColor=clickedColor;
  							message.textContent="CORRECT";
  							changeColor(clickedColor);
  							resetButton.textContent="Play Again!";
  						}
  							else{
  							this.style.backgroundColor="#232323";
  							message.textContent="Try again";
  						}


  						});

 }

 function changeColor(color)
 {for (var i = 0; i <colors.length; i++) {
 	squares[i].style.backgroundColor=color;
 }}
 function pickColor()
 {
 	var random =Math.floor(Math.random()*colors.length);
 	return colors[random];
 }
 function generateRandomColors(num)
 {
 	var arr=[];
 	for(var i=0;i<num;i++)
 	{
 		arr[i]=randomColor();

 	}


 	return arr;
 }

 function randomColor()
 { var r=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);

 return	"rgb(" + r + ", " + g + ", " + b + ")";


 }