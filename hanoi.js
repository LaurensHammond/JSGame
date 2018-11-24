var stack1 = [], stack2 = [], stack3 = [];
var moves = 0;
stack1.push(5); stack1.push(4);stack1.push(3);stack1.push(2);stack1.push(1);
var currentDisk = 0;
var currentRod = 0;

function drawInitHanoi(){
	document.getElementById("game").innerHTML = 
	'<div class="rod" id="r1" onclick="myClick(1)" style="padding-top:'+((5-stack1.length)*49)+'px"></div>'+
	'<div class="rod" id="r2" onclick="myClick(2)" style="padding-top:'+((5-stack2.length)*49)+'px"></div>'+
	'<div class="rod" id="r3" onclick="myClick(3)" style="padding-top:'+((5-stack3.length)*49)+'px"></div>';
	drawStacks();
}
function myClick(rod){
	if(currentDisk<=0)
		takeDisk(rod);
	else
		putOnNewRod(rod);
	drawStacks();
	
	if((stack2.length == 5) || (stack3.length == 5))
		document.getElementById("game").innerHTML = '<div style="font-size:40px; padding-top:20px;">CONGRATS!! <br/> YOU WON!</div>'+
		'<br/> Your score is <b>'+moves+'</b> moves <br/><br/> <a href="hanoi.html" style="color:#000000;">Try again!</a>';
}

function takeDisk(rod){
	currentRod = rod;
	switch(rod) {
		case 1:
			if(stack1.length>0)
				currentDisk = stack1.pop();
			break;
		case 2:
			if(stack2.length>0)
				currentDisk = stack2.pop();
				
			break;
		case 3:
			if(stack3.length>0)
				currentDisk = stack3.pop();
			break;
		default:
			document.getElementById("game").innerHTML = "WRONG ROD";
	}
}
function putOnNewRod(rod){
	switch(rod) {
		case 1:
			if(stack1.length <=0 || (stack1.length > 0 && stack1[stack1.length-1] > currentDisk)){
				stack1.push(currentDisk);
				if(currentRod!=1) moves++;
			}
			else
				putDiskBack();
			break;
		case 2:
			if(stack2.length <=0 || (stack2.length > 0 && stack2[stack2.length-1] > currentDisk)){
				stack2.push(currentDisk);
				if(currentRod!=2) moves++;
			}
			else
				putDiskBack();
			break;
		case 3:
			if(stack3.length <=0 || (stack3.length > 0 && stack3[stack3.length-1] > currentDisk)){
				stack3.push(currentDisk);
				if(currentRod!=3) moves++;
			}
			else
				putDiskBack();
			break;
	}
	
	currentDisk = 0;	
}

function putDiskBack(){
	switch(currentRod){
		case 1:
			stack1.push(currentDisk);
			break;
		case 2:
			stack2.push(currentDisk);
			break;
		case 3:
			stack3.push(currentDisk);
			break;
		default:
			document.getElementById("game").innerHTML = "WRONG CHOICE";
	}
	currentDisk = 0;
}
function drawStacks(){
	document.getElementById("game").innerHTML = 
	'<div class="rod" id="r1" onclick="myClick(1)" style="padding-top:'+((5-stack1.length)*49)+'px"></div>'+
	'<div class="rod" id="r2" onclick="myClick(2)" style="padding-top:'+((5-stack2.length)*49)+'px"></div>'+
	'<div class="rod" id="r3" onclick="myClick(3)" style="padding-top:'+((5-stack3.length)*49)+'px"></div>'+
	'<div style="clear:both;"></div>';
		
	var i;
	for (i = stack1.length-1; i >=0 ; i--)
			document.getElementById("r1").innerHTML += '<img src="hanoiPic/disc' + stack1[i] + '.png" ></img>';
	for (i = stack2.length-1; i >=0 ; i--)
			document.getElementById("r2").innerHTML += '<img src="hanoiPic/disc' + stack2[i] + '.png"></img>';
	for (i = stack3.length-1; i >=0 ; i--)
			document.getElementById("r3").innerHTML += '<img src="hanoiPic/disc' + stack3[i] + '.png" ></img>';
	
	document.getElementById("current").innerHTML = "Moves: " + moves;
			
}