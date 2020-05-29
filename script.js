
// Taking all the variables


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copyButon=document.getElementById('copy');
var directionValue='right';




// Functionality for direction buttons

function direction(up){
    
    directionValue=up;
	setGradient();
	
	
}




// Setting the gradient


css.textContent = 'linear-gradient(to right, rgb(48, 200, 207), rgb(255, 255, 0));';

function setGradient() {
	if(directionValue==="radial"){
	body.style.background = 
     "radial-gradient(circle , " + color1.value + ", " + color2.value + ")";
	}
	else{
	body.style.background = 
	"linear-gradient(to " + directionValue + ", " + color1.value + ", " + color2.value + ")";}

	css.textContent = body.style.background + ";";
}


// Adding a copy Button

function myFunction() {
	var text = document.getElementById('h3').innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
	document.body.removeChild(elem);
	
  }

  copyButon.addEventListener('mousedown',function(){
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copied";
  })
  copyButon.addEventListener('mouseup',function(){
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy to clipboard";
  })

// Calling the functions

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
