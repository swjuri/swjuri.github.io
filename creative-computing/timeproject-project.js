

function updateTime() {

	var clockholder = document.getElementsByTagName("html")[0];


	var now = new Date();
	var hours = now.getHours()
	now = now.toTimeString()


	if (hours < 2){
      clockholder.style.backgroundColor = "#70c4c6";
	} else if (hours < 18){
		clockholder.style.backgroundColor = "#524b64";
		console.log('less than 18')
	}




// if ( now < 12){
//   message = 'Good Morning';     
// } else if ( now < 18 ) {
//   message = 'Good Afternoon';
// } else {
//   message = 'Good Evening';
// }

// greeting.innerHTML = message;

}

updateTime();