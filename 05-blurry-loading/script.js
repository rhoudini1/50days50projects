const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

let number = setInterval(blurring, 25);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(number);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Mapping range 0 to 100 to linearly correspond to decreasing range 1 to 0. Solution obtained via Stack Overflow post.
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
