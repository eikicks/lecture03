var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloJapan = function(){
	var message = document.getElementById("helloJapan");
	message.setAttribute("class", "");
};

var showHelloJapanButton = document.getElementById("showHelloJapan");
showHelloJapanButton.addEventListener("click", helloJapan);
