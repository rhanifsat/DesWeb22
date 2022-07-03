var myImage = document.querySelector('img');

myImage.onclick = function() {
	var myScr = myImage.getAttribute('scr');
	if(myScr === 'images/firefox-icon.png') {
	  myImage.setAttribute ('scr','images/firefox2.png');
	} else {
	  myImage.setAttribute ('scr','images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}