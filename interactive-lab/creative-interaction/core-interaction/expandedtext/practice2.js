

// dodge(emotions[1], speeds[0])
function dodge(word, speed, distance){

  // let myText = "Dodging lettersDodging%lettersDodgingsDodging%DodginglettersDodging lettersDodgingsDodging DodginglettersDodging DodginglettersDodging lettersDodgingsDodging DodginglettersDodging lettersDodgingsDodging DodginglettersDodging lettersDodgingsDodging DodginglettersDodging lettersDodgingsDodging DodginglettersDodging lettersDodgingsDodgin";

  let myText = word;
  $('h1.titolo').append("<div id='id"+ speed + "'></div>");

  for (i=0; i<myText.length; i++) {
    $("#id"+ speed).append((myText[i]=="%") ? "<br>" : "<span class='letter'>" + myText[i].toLowerCase() + "</span>");
  }

  let myDist = 60;

  /* from this point on, the code is not mine: I took it from
   * the homepage of http://creativecoding.club/
   * it's simply... AWESOME!!
   */

  $("#id"+ speed +" span").each(function(i, letter) {
    $(letter).data("baseLeft", $(letter).offset().left);
    $(letter).data("baseTop", $(letter).offset().top);
  });

  $(window).on("mousemove", function(e) {
    $("#id"+ speed +" span").each(function(i, letter) {
      // if (i != 0) { return }
      var $letter = $(letter);

      if (isNear($letter, myDist, e)) {
        evade($letter, e);
        //console.log("near to " + $letter);
      } else {
        if (
          parseInt($letter.css("top")) != 3 ||
          parseInt($letter.css("left")) != 9
        ) {
          //$letter.animate({ top: 0, left: 0 });
        }
      }
    });
  });

  function isNear($element, distance, event) {
    var left = $element.offset().left - distance,
      top = $element.offset().top - distance,
      right = left + $element.width() + 8 * distance,
      bottom = top + $element.height() + 8 * distance,
      // get current location of cursor
      x = event.pageX,
      y = event.pageY;

    return x > left && x < right && y > top && y < bottom;
  }

  function evade($element, evt) {
    var $this = $element,
      corner = $this.offset(),
      center = {
        x: corner.left + $this.outerWidth() / 1,
        y: corner.top + $this.outerHeight() / 2
      },
      dist = new Math.Vector(center.x - evt.pageX, center.y - evt.pageY),
      closest = myDist;

    // proximity test

    if (dist.length() >= closest) {
      return;
    }

    // calculate new position
    var delta = dist.normal().multeq(closest).sub(dist),
      newCorner = { left: corner.left + delta.x, top: corner.top + delta.y };

    // bounds check
    if (newCorner.left + $this.outerWidth() > $(document).width()) {
      newCorner.left = $(document).width() - $this.outerWidth();
    } else if (newCorner.top + $this.outerHeight() > $(document).height()) {
      newCorner.top = $(document).height() - $this.outerHeight();
    }

    // move letter
    $this.finish();
    newCorner.left = Math.max(
      Math.min(newCorner.left, $this.data("baseLeft") + distance),
      $this.data("baseLeft") - distance
    );
    newCorner.top = Math.max(
      Math.min(newCorner.top, $this.data("baseTop") + distance),
      $this.data("baseTop") - distance
    );

    $this.animate({
      top: newCorner.top - $this.data("baseTop"),
      left: newCorner.left - $this.data("baseLeft")
    },speed);

    $('.wrapper').addClass('gold-background')
  }

  Math.Vector = function(x, y) {
    this.x = x;
    this.y = y;
  };
  Math.Vector.prototype = {
    clone: function() {
      return new Math.Vector(this.x, this.y);
    },
    negate: function() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },
    neg: function() {
      return this.clone().negate();
    },
    addeq: function(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    },
    subeq: function(v) {
      return this.addeq(v.neg());
    },
    add: function(v) {
      return this.clone().addeq(v);
    },
    sub: function(v) {
      return this.clone().subeq(v);
    },
    multeq: function(c) {
      this.x *= c;
      this.y *= c;
      return this;
    },
    diveq: function(c) {
      this.x /= c;
      this.y /= c;
      return this;
    },
    mult: function(c) {
      return this.clone().multeq(c);
    },
    div: function(c) {
      return this.clone().diveq(c);
    },

    dot: function(v) {
      return this.x * v.x + this.y * v.y;
    },
    length: function() {
      return Math.sqrt(this.dot(this));
    },
    normal: function() {
      return this.clone().diveq(this.length());
    }
  };

};


var emotions = ["The French are glad to % ", "die for love% ", "they delight in fighting duels%", "but i prefer a man%", "who lives zidler's Jewels%", "a kiss on the hand%", "maybe quite continental%","but diamonds are a girl's best friend%","a kiss may be grand%","but it won't pay the rental%", "on your humble flat%", "or help you feed your pussycat%", "men grow cold%", "as girls grow old%", "and we all lose our charms in the end%", "but square cut or pear-shaped%","these rocks don't lose their shape%", "diamonds are a girl's best friend%", "cause we're living%", "in a materia world%", "and I'm a material girl%"];
var speeds = [30, 80, 60,50,70,90,76,40,100,45,42,36,180,110,210,88,46,33,20,47,190];
var distances = [30, 80, 60,50,70,90,76,40,100,45,42,36,180,110,210,88,46,33,20,47,190];

dodge(emotions[0], speeds[0], distances[0])
dodge(emotions[1], speeds[1], distances[1])
dodge(emotions[2], speeds[2], distances[2])
dodge(emotions[3], speeds[3], distances[3])
dodge(emotions[4], speeds[4], distances[4])
dodge(emotions[5], speeds[5], distances[5])
dodge(emotions[6], speeds[6], distances[6])
dodge(emotions[7], speeds[7], distances[7])
dodge(emotions[8], speeds[8], distances[8])
dodge(emotions[9], speeds[9], distances[9])
dodge(emotions[10], speeds[10], distances[10])
dodge(emotions[11], speeds[11], distances[11])
dodge(emotions[12], speeds[12], distances[12])
dodge(emotions[13], speeds[13], distances[13])
dodge(emotions[14], speeds[14], distances[14])
dodge(emotions[15], speeds[15], distances[15])
dodge(emotions[16], speeds[16], distances[16])
dodge(emotions[17], speeds[17], distances[17])
dodge(emotions[18], speeds[18], distances[18])
dodge(emotions[19], speeds[19], distances[19])
dodge(emotions[20], speeds[20], distances[20 ])

// for (var i = 0; i < emotions.length; i++) {
//   dodge(emotions[i], speeds[i])
//   console.log('hello')
// }
