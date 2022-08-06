const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// With the idea to make an infinite scroll look-alike
function checkBoxes() {
	const trigger = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		if (boxTop < trigger) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}
