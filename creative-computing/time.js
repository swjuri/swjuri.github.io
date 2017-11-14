function updateTime() {
	
	var timeHolder = document.getElementById("time")
	var now = new Date()
	var time = now.toTimeString()
	timeHolder.innerHTML = time

	if (now.getSeconds() < 20) {
        timeHolder.style.color = "red"
    } else if (now.getSeconds() < 40) {
        timeHolder.style.color = "blue"
    } else {
        timeHolder.style.color = "green"
    }
}

setInterval(updateTime, 1000)

 

