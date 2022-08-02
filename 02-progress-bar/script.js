const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let step = 1;

prevBtn.addEventListener("click", () => {
  step--;
  if (step < 1) step = 1;
  update();
});

nextBtn.addEventListener("click", () => {
  step++;
  if (step > circles.length) step = circles.length;
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < step) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progressBar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (step === 1) {
    prevBtn.disabled = true;
  } else if (step === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
