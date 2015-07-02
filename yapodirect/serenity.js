function total(){
    var c = document.getElementById('cost').innerHTML;
	var n = document.getElementById('NOI').value;
	var m = document.getElementById('minimum').innerHTML;	
	var total = c * n;
	if(m<n){	
	document.getElementById('Tot').style.display = "block";
	document.getElementById('Tot').innerHTML = "$" + total;
	document.getElementById('errormsg').style.display = "none";
	document.getElementById("price").r	
	
	
	}
else if(m>n) {
	document.getElementById('errormsg').style.display = "block";
	document.getElementById('errormsg').innerHTML = "Please input an order of units greater than "+ m + " units";
	document.getElementById('Tot').style.display = "none";	
	
	 
	
}
	
	
	}

function showWidth(){
	var w = window.innerWidth;
	document.getElementById("show").innerHTML = w;
}
function toggleMenu(objID){
	if(!document.getElementById)return;
	var ob = document.getElementById(objID).style;
	ob.display = (ob.display =='block')?'none':'block';
}

function CustomAlert(){
	this.render =function(dialog){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		
		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialoxbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH+"px"
		dialogbox.style.left = (winW/2)-(350 * .5)+"px";
		dialogbox.style.top = "30%";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Press OK To Continue";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxfoot').innerHTML = '<button class="alert" onclick="Alert.ok()">OK</button><button  class="alert" onClick="Alert.windowopen()" >BUY</button>';
		
	'';	
		
	}
	this.ok =  function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
	}
	this.passite = function(site){
		
		
		var x = site;
		
		
	
	this.windowopen = function(){
		window.open(site,'_self',false)
		
	}
	
	}
}
var Alert = new CustomAlert();

function goBack(){
	window.history.back();	
}