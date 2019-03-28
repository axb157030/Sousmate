/*sousmenu.js adds animation to the index menu that is fixed at the top of the screen making the word Sousmate expand or shrink depending on whhat position the user is in 
on the webpage */
$(document).ready(function(){
	var posWhatSous;
	var posIndex;
	var sousIndex;
	var id;
	sousIndex = document.getElementById("sousI");
		//posWhatSous = $("#whatSous").offset();
	   posIndex = $("#sousI").offset();
		var height = $(window).scrollTop();
		//console.log("height " + height);



	$(window).scroll(function() {

		var height = $(window).scrollTop();
		posIndex = $("#sousI").offset();
		//console.log("height2 " + height);
		var fontPx = 24;
		
		
			
			//console.log("fontSize rv " + posIndex.top);

		if(posIndex.top > 200)
		{
			sousIndex.style.fontSize = "1em";
			sousIndex.style.transition = "font-size 1s"; // Works fantastic! setinterval should only be used if this does not work and really only for on click functions
			//console.log("fontSize rv ");
		}
		
		else
		{
			sousIndex.style.fontSize = "1.5em";
			
		}

	    
});


});