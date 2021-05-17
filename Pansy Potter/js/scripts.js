// JavaScript Document for Pansy Potter
// Developed by John Green

// Function to change the theme to Light Mode
function setLightTheme() {
    document.getElementById("stylesheet").href = "css/style.css";
}

// Function to change the theme to Dark Mode
function setDarkTheme() {
    document.getElementById("stylesheet").href = "css/dark.css";
}



function setCookie() {
	// alert("Boo!");
	var confirmMsg = "This site uses cookies. \nClick OK to accept, Cancel to reject"
	var cookiesAccepted = confirm(confirmMsg);
}
	
	if(cookiesAccepted) {
		alert("Thank You for accepting!");
}
else {
	alert("No")
	location.href ='https//www.google.co.uk'; 
	
}
	function setLightTheme() {
	document.getElementById("stylesheet").href = "css/style.css"
	}
	
	function setDarkTheme() {
	document.getElementById("stylesheet").href = "css/dark.css"
	}