document.getElementById("direction").onclick = function() {
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("direction").style.visibility = "hidden";
}

document.getElementById("quick").onclick = function() {

    document.getElementById("numberquick").style.visibility = "visible";
    document.getElementById("time").style.visibility = "hidden";


}

document.getElementById("tries").onclick = function() {

    document.getElementById("numbertries").style.visibility = "visible";
    document.getElementById("time").style.visibility = "hidden";


}

document.getElementById("every").onclick = function() {

    document.getElementById("numberevery").style.visibility = "visible";
    document.getElementById("time").style.visibility = "hidden";


}
