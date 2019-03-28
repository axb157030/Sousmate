/*timer.js provides the timing functionality for timer.html. This is needed for the timer presented in timer.html to work */

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_gettime
// https://www.timeanddate.com/timer/

// if submit in editTimeBox then the time variables are set

window.onload=function(){
var timeBox = document.getElementById('editTimeBox');

		timeBox.style.visibility = 'hidden'; // box to edit timer should initially be hidden
	
var hours = 0;
var minutes = 0;
var seconds = 0;
var edit = false;

document.getElementById('reset').addEventListener("click", function(e){ // box to edit timer should be visible when reset button is pressed
var timeBox = document.getElementById('editTimeBox');
edit = true;
	if(edit)
	{	
		timeBox.style.visibility = 'visible';
		timeBox.style.top = "50px";
		timeBox.style.transition = "top 1s";
		
		

	}
//console.log("on");

}); 
// box to edit timer should  be hidden when submit button on the box is pressed. When the #submitTime  button pressed which appears
// after user presses the reset button, all the values set by the user or by default within the box that appeared will be saved
document.getElementById('submitTime').addEventListener("click", function(e){ 
edit = false;

	
	
	if(!edit)
	{
		timeBox.style.visibility = 'hidden';
	}
	

hours = document.getElementsByName('hours')[0].value;

document.getElementById('hrs').innerHTML = pad(hours);
/*if (isNaN(hours)) // Detect if user if value of hour is NaN. Detects if it has a value or not
{	console.log("hello");
	hours = 0;
} */
hours = parseInt(hours);
//console.log(hours);

minutes = document.getElementsByName('minutes')[0].value;
//minutes = pad(minutes);
document.getElementById('mins').innerHTML = ":" + pad(minutes);

minutes = parseInt(minutes);
//console.log(minutes);

seconds = document.getElementsByName('seconds')[0].value;

document.getElementById('secs').innerHTML = ":" + pad(seconds);
if (isNaN(seconds))
{
	seconds = 0;
}
seconds = parseInt(seconds);
//console.log(seconds);
});

// when start button click. call start f() and change value constantly
document.getElementById('start').addEventListener("click", function(e){
// https://www.w3schools.com/jsref/met_win_setinterval.asp
start(hours, minutes, seconds);

});
function start(hours, minutes, seconds) // gives timer its functionaility. It will decrement the time 1 second at a time and changed the time set accordingly
{

setInterval(function(){

var timeSec = (hours * 60 * 60) + (minutes * 60) + seconds; // Total amount of time in seconds;
if(timeSec > 0)
{
	//console.log("timeSec", timeSec);
	timeSec--;
	hours = timeSec / (60 * 60);
	hours = Math.floor(hours);
	//console.log("hours", hours);
	minutes = (timeSec - (hours * 60 * 60)) / 60;
	minutes = Math.floor(minutes);
	//console.log("minutes", minutes);
	seconds = (timeSec - (hours * 60 * 60)) - (minutes * 60);
	seconds = Math.floor(seconds);
	document.getElementById('hrs').innerHTML = pad(hours);
	document.getElementById('mins').innerHTML = ":" + pad(minutes);
	document.getElementById('secs').innerHTML = ":" + pad(seconds);
}

else {
var alarmSound = new Audio('https://pictures-of-cats.org/media-files/meow-1.wav');
alarmSound.play(); // alarm sound when timer reaches 0
/*setTimeout(function(){ alarmSound.src = "";}, 3000); */

}

}, 1000);
		
		

	}
	


}

function pad(number) { // From https://stackoverflow.com/questions/5774042/format-a-number-exactly-two-in-length
    return (number < 10 ? '0' : '') + number;
}