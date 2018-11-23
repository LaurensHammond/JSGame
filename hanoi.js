var stack1 = [], stack2 = [], stack3 = [];
stack1.push(5); stack1.push(4);stack1.push(3);stack1.push(2);stack1.push(1);
stack2.push(5); stack2.push(4);stack2.push(3);stack2.push(2);
stack3.push(5); stack3.push(4);stack3.push(3);
var currentDisk = 0;
var currentRod = 0;

function drawInitHanoi(){
	document.getElementById("game").innerHTML = 
	'<div class="rod" id="r1" onclick="myClick(1)"></div>'+
	'<div class="rod" id="r2" onclick="myClick(2)"></div>'+
	'<div class="rod" id="r3" onclick="myClick(3)"></div>';
}
function myClick(rod){
	currentRod = rod;
	switch(rod) {
		case 1:
			
			if(stack1.length>0){
				currentDisk = stack1.pop();
				document.getElementById("r1").innerHTML =((stack1.length+1) +'<br/>'+ currentDisk );
			}else{
				document.getElementById("r1").innerHTML =((stack1.length) +'<br/>'+ 0);
			}
			break;
		case 2:
			if(stack2.length>0){
				currentDisk = stack2.pop();
				document.getElementById("r2").innerHTML =((stack2.length+1) +'<br/>' +currentDisk);
			}else{
				document.getElementById("r2").innerHTML =((stack2.length) +'<br/>'+ 0);
			}
			break;
		case 3:
			if(stack3.length>0){
				currentDisk = stack3.pop();
				document.getElementById("r3").innerHTML =((stack3.length+1) +'<br/>'+ currentDisk);
			}else{
				document.getElementById("r3").innerHTML =((stack3.length) +'<br/>'+ 0);
			}
			break;
		default:
			document.getElementById("game").innerHTML = "WRONG ROD"
	}
}