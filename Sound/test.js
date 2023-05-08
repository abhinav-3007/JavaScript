var ct = 0
var x = setInterval(Hello, 1000)
function Hello() {
	var echo  = document.getElementById("echoes")
	var pic = document.getElementById("longitudinal")
		if(ct%2 == 0){
			echo.style.color = "red"
			pic.setAttribute("src", "longitudinal.png")
		}else{
			echo.style.color = "black"
			pic.setAttribute("src", "longitudinal2.png")
		}
//		if(ct===10){
//			clearInterval(x)
//		}
		console.log("hi")
		ct++

}
