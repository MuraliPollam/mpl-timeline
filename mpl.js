const progressbar = document.querySelector('progress')
let isScrolling = false
document.addEventListener('scroll', (e) => isScrolling = true)
render()
function render() {
	requestAnimationFrame(render)
	
	if (!isScrolling) return
	
	progressbar.value = window.scrollY / (article.offsetHeight - window.innerHeight) * 100
	
	isScrolling = false
	
}