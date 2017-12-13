




var pop = document.getElementById("container")
var  randcol= "";
var allchar="0123456789ABCDEF";

pop.addEventListener("click", handlePClick)

function handlePClick(evt) {


	
	console.log(evt.target)
    evt.target.style.backgroundColor = 'transparent';



    var  randcol= "";
	for(var i=0; i<6; i++){
   	randcol += allchar[Math.floor(Math.random()*16)];
	}
	document.body.style.backgroundColor= "#"+randcol;


    


}

//unsuccessfully tried to turn colors back on popped balloons after a certain time :'(
function changeColor(info) {
  evt.target.style.backgroundColor=info;  // "#000000";
}

function ChangeBackground() {
  evt.target.style.backgroundColor="transparent"; //immediately change the background color to white
  setTimeout("changeColor"('#000000'), 250) //after 100 milliseconds change the background to black.
}



