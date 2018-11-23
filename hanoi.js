var stack1 = [], stack2 = [], stack3 = [];
stack1.push(5); stack1.push(4);stack1.push(3);stack1.push(2);stack1.push(1);
stack2.push(5); stack2.push(4);stack2.push(3);stack2.push(2);
stack3.push(5); stack3.push(4);stack3.push(3);
var currentDisk = 0;
var currentRod = 0;

function drawInitHanoi(){
	document.getElementById("game").innerHTML = 
	'<div class="rod" id="r1" onclick="myClick(1)">'+stack1+'</div>'+
	'<div class="rod" id="r2" onclick="myClick(2)">'+stack2+'</div>'+
	'<div class="rod" id="r3" onclick="myClick(3)">'+stack3+'</div>';
}
function myClick(rod){
	if(currentDisk<=0)
		takeDisk(rod);
	else
		putOnNewRod(rod);
	drawInitHanoi();
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
			stack1.push(currentDisk);
			currentDisk=0;
			break;
		case 2:
			stack2.push(currentDisk);
			currentDisk=0;
			break;
		case 3:
			stack3.push(currentDisk);
			currentDisk=0;
			break;
		default:
			document.getElementById("game").innerHTML = "WRONG ROD";
	}
	
}