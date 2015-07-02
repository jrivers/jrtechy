function CustomAlert(){
	this.render =function(dialog){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialoxbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH+"px"
		dialogbox.style.left = (winW/2)-(350 * .5)+"px";
		dialogbox.style.top = "60%";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Press OK To Continue";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button  class="alert" onclick="Alert.ok()">OK</button>';
		
		
	}
	this.ok =  function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
}
var Alert = new CustomAlert();
