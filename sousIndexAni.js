window.onload=function(){
	//$("#danClock").fadeOut();
	var posDanClock;
	var posWhatSous;
	var posIndex;
	var sousIndex;
	var id;
	sousIndex = document.getElementById("sousI");
	console.log("ethiylguovwtehw");


		$("#danClock").fadeOut(1);
		console.log("ethwtehwbbbbbbbbbb");
		console.log("ethwtehw");
		//posWhatSous = $("#whatSous").offset();
	   posIndex = $("#sousI").offset();
		var height = $(window).scrollTop();
		//console.log("height " + height);
		//console.log("danClock " + posDanClock.top);
		if(height >= 250)
		{
console.log(height);
			$("#danClock").fadeIn(1500);

		}
		
		


	$(window).scroll(function() {

		var height = $(window).scrollTop();
		posDanClock = $("#danClock").offset(); // Needs to be set here. position of #danClock changes depending on 
		posIndex = $("#sousI").offset();
		//console.log("height2 " + height);
		//console.log("danClock2 " + posDanClock.top);
		var fontPx = 24;
		
		
			
			//console.log("fontSize rv " + posIndex.top);

		if(posIndex.top > 200)
		{
			sousIndex.style.fontSize = "1em";
			sousIndex.style.transition = "font-size 1s"; // Works fantastic! setinterval should only be used if this does not work and really only for on click functions
		}
		
		else
		{
			sousIndex.style.fontSize = "1.5em";
		}
		


	if(height >= posDanClock.top)
	{
		//document.getElementById("danClock").style.visibility = "visible";
		console.log("hey i am here");
		$("#danClock").fadeIn(1500);

	}
	    
});




	// https://stackoverflow.com/questions/17441065/how-to-detect-scroll-position-of-page-using-jquery
	// https://www.programmableweb.com/category/all/apis?keyword=recipe
}