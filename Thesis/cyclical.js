let container,
    results;

const
sendAlert = (msg) => {
  let removeClass, removeChild;
  let modal = document.createElement('div');
  modal.id = 'modal';
  modal.setAttribute('data-msg', msg);
  container.appendChild(modal);

  let dismiss = document.createElement('button');
  dismiss.id = 'btnDismiss';
  dismiss.innerHTML = 'Okay';
  modal.appendChild(dismiss);
  dismiss.onclick = () => {
    modal.classList.remove('visible');
    clearTimeout(removeClass);
    clearTimeout(removeChild);
    setTimeout(() => {
      container.removeChild(modal);
      container.onclick = onContainerClick;
    }, 500);
  };

  setTimeout(() => {
    modal.classList.add('visible');
  }, 100);

  removeClass = setTimeout(() => {
    modal.classList.remove('visible');
  }, 3000);

  removeChild = setTimeout(() => {
    container.removeChild(modal);
    container.onclick = onContainerClick;
  }, 3500);
},

onContainerClick = () => {
  let hex = results.innerHTML.toUpperCase(),
      range = document.createRange();

  window.getSelection().removeAllRanges();

  range.selectNode(results);
  window.getSelection().addRange(range);
  let success = document.execCommand('copy');

  success ? sendAlert(`Successfully copied ${hex} to clipboard`) : sendAlert(`Unable to copy ${hex} to clipboard`);

  window.getSelection().removeAllRanges();

  container.onclick = null;
},

doubleDigit = (num) => {
  let strNum = String(num),
      newNum;

  if (strNum.length < 2) {
    newNum = '0' + strNum;
  } else {
    newNum = strNum;
  }

  return newNum;
},

rgbToHex = (rgb) => {
  r = parseInt(rgb[0], 10).toString(16);
  g = parseInt(rgb[1], 10).toString(16);
  b = parseInt(rgb[2], 10).toString(16);

  r = doubleDigit(r);
  g = doubleDigit(g);
  b = doubleDigit(b);

  return `#${r}${g}${b}`;
},

onContainerMouseMove = (e) => {
  let ww = window.innerWidth,
      wh = window.innerHeight,
      posX,
      posY,
      percX,
      percY,
      hslX,
      hslY,
      rgb;

  posX = e.clientX;
  posY = e.clientY;

  percX = Math.floor(posX / ww * 100);
  percY = Math.floor(posY / wh * 100);

  hslX = Math.floor((percX / 100) * 360);
  hslY = percY;

  container.style.backgroundColor = `hsl(${hslX}, 50%, ${hslY}%)`;

  rgb = window.getComputedStyle(container).backgroundColor.replace('rgb(', '').replace(')', '').split(', ');

  results.innerHTML = rgbToHex(rgb);
},

eventListeners = () => {
  container.onmousemove = onContainerMouseMove;
  container.onclick = onContainerClick;
},

initFns = () => {
  container = document.querySelector('#container');
  results = document.querySelector('#results');
  eventListeners();
};

document.onreadystatechange = () => {
  if (document.readyState == 'complete') {
    initFns();
  }
}
