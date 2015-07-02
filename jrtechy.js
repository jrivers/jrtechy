// day of week of month's first day
function getFirstDay(theYear, theMonth){
    var firstDate = new Date(theYear,theMonth,1)
    return firstDate.getDay()
}
// number of days in the month
function getMonthLen(theYear, theMonth) {
    var oneDay = 1000 * 60 * 60 * 24
    var thisMonth = new Date(theYear, theMonth, 1)
    var nextMonth = new Date(theYear, theMonth + 1, 1)
    var len = Math.ceil((nextMonth.getTime() - 
        thisMonth.getTime())/oneDay)
    return len
}
// create array of English month names
var theMonths = ["January","February","March","April","May","June","July","August",
"September","October","November","December"]
// return IE4+ or W3C DOM reference for an ID
function getObject(obj) {
    var theObj
    if (document.all) {
        if (typeof obj == "string") {
            return document.all(obj)
        } else {
            return obj.style
        }
    }
    if (document.getElementById) {
        if (typeof obj == "string") {
            return document.getElementById(obj)
        } else {
            return obj.style
        }
    }
    return null
}

/************************
  DRAW CALENDAR CONTENTS
*************************/
// clear and re-populate table based on form's selections
function populateTable(form) {
    var theMonth = form.chooseMonth.selectedIndex
    var theYear = parseInt(form.chooseYear.options[form.chooseYear.selectedIndex].text)
    // initialize date-dependent variables
    var firstDay = getFirstDay(theYear, theMonth)
    var howMany = getMonthLen(theYear, theMonth)
    
    // fill in month/year in table header
    getObject("tableHeader").innerHTML = theMonths[theMonth] + 
    " " + theYear
    
    // initialize vars for table creation
    var dayCounter = 1
    var TBody = getObject("tableBody")
    // clear any existing rows
    while (TBody.rows.length > 0) {
        TBody.deleteRow(0)
    }
    var newR, newC
    var done=false
    while (!done) {
        // create new row at end
        newR = TBody.insertRow(TBody.rows.length)
        for (var i = 0; i < 7; i++) {
            // create new cell at end of row
            newC = newR.insertCell(newR.cells.length)
            if (TBody.rows.length == 1 && i < firstDay) {
                // no content for boxes before first day
                newC.innerHTML = ""    
                continue
            }
            if (dayCounter == howMany) {
                // no more rows after this one
                done = true
            }
            // plug in date (or empty for boxes after last day)
            newC.innerHTML = (dayCounter <= howMany) ? 
                dayCounter++ : ""
        }
        
    }
}

/*******************
  INITIALIZATIONS
********************/
// create dynamic list of year choices
function fillYears() {
    var today = new Date()
    var thisYear = today.getFullYear()
    var yearChooser = document.dateChooser.chooseYear
    for (i = thisYear; i < thisYear + 5; i++) {
        yearChooser.options[yearChooser.options.length] = new Option(i, i)
    }
    setCurrMonth(today)
}
// set month choice to current month
function setCurrMonth(today) {
    document.dateChooser.chooseMonth.selectedIndex = today.getMonth()
}
function dofirst(){
	barSize=500;
	thetime=document.getElementById('thetime')
	myMovie=document.getElementById('Themovie');
	Playbutton=document.getElementById('playbutton');
	Bar=document.getElementById('defaultBar');
	Progressbar=document.getElementById('progressBar');
	rewind=document.getElementById('rewind');
	Playbutton.addEventListener('click',playOrPause,false);
	rewind.addEventListener('click',goback,false);
	document.getElementById("rewind").addEventListener("click", function () {
                    setTime(-10);
                }, false);
	Bar.addEventListener('click',clickedBar,false);
}
function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){
		myMovie.pause();
		Playbutton.innerHTML='>';
		window.clearInterval(updateBar);
	}else{
		myMovie.play();
		Playbutton.innerHTML='||';
		updateBar=setInterval(update,500);
	}
	}
	function goback()
{
  if (myMovie.IsPlaying()){
    myMovie.StopPlay();
  }
  myMovie.Rewind();
}
	
	function update(){
			if(!myMovie.ended){
			var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
			Progressbar.style.width=size+'px';
			}else{
			Progressbar.style.width='0px';
			Playbutton.innerHTML='>';
			window.clearInterval(updateBar);
			
			
	}
	}
function clickedBar(e){
	if(!myMovie.paused && !myMovie.ended){
	var mouseX=e.pageX-Bar.offsetLeft;
	var newtime=mouseX*myMovie.duration/barSize;
	myMovie.currentTime=newtime;
	Progressbar.style.width=mouseX+'px';
	}
}
window.addEventListener('load',dofirst,false);
function printTime(){
	var now = new Date();
	var day1 = now.getDate();
	var month = now.getMonth()+1;
	var year = now.getYear()-100;
 	var hours = now.getHours();
	var minutes = now.getMinutes();
		if(hours>=12){
		var tdy = "PM";
	}else{
		tdy = "AM";
	}
	if(hours>12){
		hours-=12;		
	}
		if (minutes<10){
	minutes=("0"+minutes);
	}
	
	
	var x=(month+"-"+day1+"-20"+year+" "+hours+":"+minutes+" "+tdy+"<br/>");
	thetime.innerHTML= x;
	setInterval(printTime,60000);
}


function dropmenu(){
	
	document.getElementById('dropmenu1').style.display ="block";
	
}
function dropmenuhide(){
document.getElementById('dropmenu1').style.display="none";
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

var winwid= window.innerWidth;
function showwidth(){
	document.write(winwid);
}
