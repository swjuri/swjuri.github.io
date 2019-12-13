setTimeout(function(){
       window.location.href = 'Linear-timept2.html';
    }, 10000);



window.location.hash="no-back-button";
window.location.hash="Again-No-back-button";//again because google chrome don't insert first hash into history
window.onhashchange=function(){window.location.hash="no-back-button";}


window.open ("yourPageURL","mywindow","status=1,toolbar=0");




// an array of strings (hex colors)
var colors = [
  '#c75757',
  '#c76457',
  '#c76957',
  '#C9705e',
  '#C9775e',
  '#cb8262',
  '#cc8566',
  '#cd8d6a',
  '#cd936a',
  '#cca366',
  '#cca866',
  '#ccbb66'

];
// a variable for the current color index
var currentColor = 0;

/* let's add an event listener to the window - Every time
 we click in the window, we execute the click function */
window.addEventListener('click', click);

// our click function
function click() {
  /* we need to check if the current color is the last object
   in the array. If it is, we set the value back to 0 (the
   first color in the array. Otherwise, we increment the
   current color by 1. */
  if (currentColor == colors.length-1) currentColor = 0;
  else currentColor++;
  /* now we can set the body's style - backgroundColor to the
   new color. */
  document.body.style.backgroundColor = colors[currentColor];
}

/* when the window has finished loading, update the body to
 the first color */
window.onload = function() {
  document.body.style.backgroundColor = colors[currentColor];
}
