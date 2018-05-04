const mouseEventToCoordinate = mouseEvent => {
  mouseEvent.preventDefault();
  return { x: mouseEvent.clientX, y: mouseEvent.clientY };
};
const touchEventToCoordinate = touchEvent => {
  touchEvent.preventDefault();
  return {
    x: touchEvent.changedTouches[0].clientX,
    y: touchEvent.changedTouches[0].clientY
  };
};

let target = document.querySelectorAll(".boxcontent");
let mouseDowns = Rx.Observable.fromEvent(target, "mousedown").map(
  mouseEventToCoordinate
);
let mouseMoves = Rx.Observable.fromEvent(window, "mousemove").map(
  mouseEventToCoordinate
);
let mouseUps = Rx.Observable.fromEvent(window, "mouseup").map(
  mouseEventToCoordinate
);

let touchStarts = Rx.Observable.fromEvent(target, "touchstart").map(
  touchEventToCoordinate
);
let touchMoves = Rx.Observable.fromEvent(target, "touchmove").map(
  touchEventToCoordinate
);
let touchEnds = Rx.Observable.fromEvent(window, "touchend").map(
  touchEventToCoordinate
);

let dragStarts = mouseDowns.merge(touchStarts);
let moves = mouseMoves.merge(touchMoves);
let dragEnds = mouseUps.merge(touchEnds);

let drags = dragStarts.concatMap(dragStartEvent => {
  return moves.takeUntil(dragEnds).map(dragEvent => {
    const x = dragEvent.x - dragStartEvent.x;
    const y = dragEvent.y - dragStartEvent.y;
    return { x, y };
  });
});

let ends = dragStarts.concatMap(dragStartEvent => {
  return dragEnds.first().map(dragEndEvent => {
    const x = dragEndEvent.x - dragStartEvent.x;
    const y = dragEndEvent.y - dragStartEvent.y;
    return { x, y };
  });
});

dragStarts.forEach(() => {
  $(".boxcontent")
    .last()
    .css({
      transition: "initial",
      cursor: "grabbing"
    });
});

drags.forEach(coordinate => {
  $(".boxcontent")
    .last()
    .css({
      left: coordinate.x,
      top: coordinate.y,
      transform: "rotate(" + -coordinate.x / 10 + "deg)"
    });
  $(".box:nth-last-of-type(2) .boxcontent").css({
    width: Math.min(100, 90 + Math.abs(coordinate.x) / 200 * 10) + "%",
    height: Math.min(100, 90 + Math.abs(coordinate.x) / 200 * 10) + "%",
    margin: Math.max(0, (1 - Math.abs(coordinate.x) / 200) * 5) + "%"
  });
});

ends.forEach(coordinate => {
  const minSwipeLength = 300;
  if (coordinate.x > minSwipeLength) {
    like();
  } else if (coordinate.x < -minSwipeLength) {
    nope();
  } else {
    cancel();
  }
});


function nope() {
  $(".boxcontent")
    .last()
    .css({
      transition: "left 0.5s",
      left: -500
    });
  setTimeout(() => {
    $(".box")
      .last()
      .remove();
  }, 500);
}

function cancel() {
  const last = $(".box:last .boxcontent");
  last.css({
    transition: "left 0.5s, top 0.5s, transform 0.5s",
    left: 0,
    top: 0,
    transform: "rotate(0deg)"
  });
  last.find(".like").css({
    transition: "opacity 0.5s",
    opacity: 0
  });
  last.find(".nope").css({
    transition: "opacity 0.5s",
    opacity: 0
  });
}






$(function() {
	var windowWidth = $(".window").width();
	var windowHeight = $(".window").height();
	var i = 0;
	var panelAmount = $(".sp-panel").length;

	// Give the panels a fitting H/W
	$(".sp-panel").css("width", windowWidth);
	$(".sp-panel").css("height", windowHeight);

	// Click on "Right" to move forward
	$(".right").click(function() {
		i += 1;

		if (i < 0) {
			i = panelAmount - 1;
		}

		if (i >= panelAmount) {
			i = 0;
		}

		var pos = i * windowWidth;
		$(".sp-panel-set").css("left", -pos + "px");
	});

	// Click on "Left" to move backward
	$(".left").click(function() {
		i -= 1;

		if (i < 0) {
			i = panelAmount - 1;
		}

		if (i >= panelAmount) {
			i = 0;
		}

		var pos = i * windowWidth;
		$(".sp-panel-set").css("left", -pos + "px");
	});

	// Attempted Mobile Swipe Alternative

	// Swipe Forward
	$(".sp-panel-set").on("swipeleft", function(event) {
		i += 1;

		if (i < 0) {
			i = panelAmount - 1;
		}

		if (i >= panelAmount) {
			i = 0;
		}

		var pos = i * windowWidth;
		$(".sp-panel-set").css("left", -pos + "px");
	});

	// Swipe Backward
	$(".sp-panel-set").on("swiperight", function(event) {
		i -= 1;

		if (i < 0) {
			i = panelAmount - 1;
		}

		if (i >= panelAmount) {
			i = 0;
		}

		var pos = i * windowWidth;
		$(".sp-panel-set").css("left", -pos + "px");
	});
});
