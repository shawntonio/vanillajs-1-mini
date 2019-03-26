let count = 0;
const counter = document.getElementById("counter")

function increase(){
	count++
	counter.innerText = count
}

function decrease(){
	count--
	counter.innerText = count
}

function reset(){
	count = 0
	counter.innerText = count
}

function selectTheme(theme){
	const body = document.getElementsByTagName("body")
	body[0].className = theme
	const main = document.getElementsByTagName("main")
	main[0].className = theme
	const buttons = document.getElementsByTagName("button")
	for (let i = 0; i < buttons.length; i++){
		buttons[i].className = theme
	}
}