function onSuccess(position){
  console.log (position)
  var img = new Image();
img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=300x300&sensor=false";
document.body.appendChild(img);

}


function onFailure(){

}

navigator.geolocation.getCurrentPosition(onSuccess,onFailure)
