 /*Take locally stored data requested from the MealDB API and use it to fill the elements in recipInstruc.html with data or inother words use it and
represent it in recipInstruc.html  */
  window.onload=function(){
  var video;
		var foodImage=localStorage.getItem("foodImage");
		var foodTitle =localStorage.getItem("foodTitle");
		var i1 =localStorage.getItem("i1");
		var i2 =localStorage.getItem("i2");
		var i3 =localStorage.getItem("i3");
		var i4 =localStorage.getItem("i4");
		var i5 =localStorage.getItem("i5");
		var i6 =localStorage.getItem("i6");
		var i7 =localStorage.getItem("i7");
		var i8 =localStorage.getItem("i8");
		var i9 =localStorage.getItem("i9");
		var i10 =localStorage.getItem("i10");
		var i11 =localStorage.getItem("i11");
		var i12 =localStorage.getItem("i12");
		var i13 =localStorage.getItem("i13");
		var i14 =localStorage.getItem("i14");
		var i15 =localStorage.getItem("i15");
		var i16 =localStorage.getItem("i16");
		var i17 =localStorage.getItem("i17");
		var i18 =localStorage.getItem("i18");
		var i19 =localStorage.getItem("i19");
		var i20 =localStorage.getItem("i20");
		var Instructions =localStorage.getItem("Instructions");
		var cookVid =localStorage.getItem("cookVid");
		$("#foodTitle").text(foodTitle);
		$("#foodImg").attr('src',foodImage);
		$("#ingred1").text(i1);
		$("#ingred2").text(i2);
		$("#ingred3").text(i3);
		$("#ingred4").text(i4);
		$("#ingred5").text(i5);
		$("#ingred6").text(i6);
		$("#ingred7").text(i7);
		$("#ingred8").text(i8);
		$("#ingred9").text(i9);
		$("#ingred10").text(i10);
		$("#ingred11").text(i11);
		$("#ingred12").text(i12);
		$("#ingred13").text(i13 );
		$("#ingred14").text(i14);
		$("#ingred15").text(i15);
		$("#ingred16").text(i16);
		$("#ingred17").text(i17);
		$("#ingred18").text(i18);
		$("#ingred19").text(i19);
		$("#ingred20").text(i20);
		Instructions = Instructions.replace(/\n/g, "<br />");
		$("#Instructions p").html(Instructions);
		$("#cookVid").attr('src',"https://www.youtube.com/embed/" +cookVid);
		
		
		
	

} 