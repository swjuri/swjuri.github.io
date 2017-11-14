document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(evt) {

	var key = evt.key
	console.log(key)

	var totalHeight = document.body.offsethHeight

	var targetHeight = percentage*totalHeight 

	console.log ("px"), targetHeight


	window.scrollTo(0,key*20)

}











