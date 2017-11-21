// document.addEventListener("click", handleDocumentClick)

// function handleDocumentClick() {

	



// 	if (document.body.style.house1-wall.color="#3DE2C2") {
// 		document.bbody.style.house1-wall.color="white"
// 	}   else {document.body.style.house1-wall.color="#3DE2C2"}

// }

var isOn = false;

document.onkeypress=function(e){
	/* this is where u change color*/
	if(isOn == false){
		document.getElementById("my-houses").style.color = 'red';
		isOn = true;
	} else {
		document.getElementById("my-houses").style.color = 'white';
		isOn = false;
	}
}
	


