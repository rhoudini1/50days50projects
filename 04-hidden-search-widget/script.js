const btn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");

btn.addEventListener("click", (e) => {
  input.classList.toggle("active");
  input.focus();
});
