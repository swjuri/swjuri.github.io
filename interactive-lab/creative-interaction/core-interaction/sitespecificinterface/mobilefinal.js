(function() {
  var mousedown = false,
    card = false,
    initPos = {},
    delta = {},
    rotate = 0;

  document.body.addEventListener("mousedown", touch);
  document.body.addEventListener("mouseup", release);
  window.addEventListener("mousemove", move);

  function move(e) {
    if (mousedown) {
      var currPos = {};
      currPos.y = e.clientY || e.touches[0].clientY;
      currPos.x = e.clientX || e.touches[0].clientX;

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

    mousedown = false;
    initPos = {};
    card = false;
  }

  function touch(e) {
    var target = e.target;
    if (target.classList.contains("card")) {
      target.classList.add("moving");

      card = target;
      mousedown = true;
    }
  }
})();
