let btn = document.getElementById("button");

let randomColor = () => {
	let val = "0123456789ABCDEF";
	let constant = "#";
	for (let i = 0; i < 6; i++) {
		constant = constant + val[Math.floor(Math.random() * 16)];
	}
	return constant;
};
function changeRandomColor() {
	document.getElementById("canvas").style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
