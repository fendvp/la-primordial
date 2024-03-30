// Slider
const imgPositions = document.querySelectorAll(".inputPosition");
const imgs = document.querySelectorAll(".img");
const imgBox = document.querySelector(".imgBox");


// Slider funcional
imgPositions.forEach((pos,i) => {
	pos.addEventListener("click", (e) => {
		let vw = 100;
		imgBox.style.transform = `translateX(-${i*vw}vw)`;
		imgBox.style.transition = `transform .5s`;
	})
})


const searchText = document.querySelector(".searchText");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", (e) => {
	e.preventDefault()
})




// mousemove = movimiento del mouse
// mousedown = presionado
// mouseup = soltado


// imgBox.addEventListener("mousemove", (e) => {
// 	const x = e.pageX;
// 	console.log(x)
// })