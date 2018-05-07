(function() {
  var touchstart = false,
    card = false,
    initPos = {},
    delta = {},
    rotate = 0;

  document.body.addEventListener("touchstart", touch);
  document.body.addEventListener("touchend", release);
  window.addEventListener("touchmove", move);

  function move(e) {
    if (touchstart) {
      var currPos = {};
      currPos.y = (event.targetTouches[0] ? event.targetTouches[0].pageY : event.changedTouches[event.changedTouches.length-1].pageY) || e.touches[0].clientY;
      currPos.x = (event.targetTouches[0] ? event.targetTouches[0].pageX : event.changedTouches[event.changedTouches.length-1].pageX) || e.touches[0].clientX;

      if (!initPos.x) {
        initPos.y = currPos.y;
        initPos.x = currPos.x;
      }

      delta.x = currPos.x - initPos.x;
      delta.y = currPos.y - initPos.y;

      rotate = delta.x * 0.05;

      var css =
        "translate(" +
        delta.x +
        "px, " +
        delta.y +
        "px) rotate(" +
        rotate +
        "deg)";
      card.style.transform = css;
    }
  }

  function release() {
    if (card) {
      if (delta.x > 50 || delta.x < -50) {
        var animleft;

        if (delta.x > 50) {
          animleft = window.innerWidth;
        } else if (delta.x < -50) {
          animleft = -window.innerWidth;
        }

        card.style.transform =
          "translate(" +
          animleft +
          "px, " +
          delta.y * 4 +
          "px) rotate(" +
          rotate * 4 +
          "deg)";

        setTimeout(function() {
          var c = document.body.querySelector(".card.animating-out");
          c.style.transform = "none";
        }, 500);
      } else {
        card.style.transform = "none";
      }
    }

    touchstart = false;
    initPos = {};
    card = false;
  }

  function touch(e) {
    var target = e.target;
    if (target.classList.contains("card")) {
      target.classList.add("moving");

      card = target;
      touchstart = true;
    }
  }
})();
