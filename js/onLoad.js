function onLoadCall()
{
	var startAnimation = document.getElementById("startAnimation");							
	startAnimation.style.backgroundColor = "rgba(0, 0, 0, 0)";
	setTimeout(function(){startAnimation.style.display = "none"}, 1000);
}