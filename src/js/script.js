const scrollButton = document.getElementById("scroll__button")

console.log(scrollButton)


scrollButton.addEventListener('click', function () {
	window.scroll({
		top: 600,
		behavior: 'smooth',
	})
})