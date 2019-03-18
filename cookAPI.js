
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {

		$("#uplRecipe h1:first").text(data.meals[0].strMeal);
		$("#uplRecipe img:first").attr('src',data.meals[0].strMealThumb);
		video = data.meals[0].strYoutube;
		//console.log("11 ", data.meals[0].strYoutube.length);
		video = video.substr(32, 43);
		// when click make page
		$("#uplRecipe .buttonSub").click(function(e){
		//console.log("meal 5555", data.meals[0].strMeal);
		 
		sendRecipeData(data);
		window.open('recipInstruc.html', '_blank');
		
		});
	});
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {

		$(" #wh1.whatSous span" ).text(data.meals[0].strMeal); //#y.x { /* will select element of id="y" that also has class="x" }  https://stackoverflow.com/questions/4371733/can-i-use-div-class-and-id-together-in-css
		$("#wh1.whatSous img").attr('src',data.meals[0].strMealThumb);
		// for each getJSON click event to edit recpeInstruc see whether can have multiple recipeInstruc with different content and test whether you can give the recipe for recipe client requested
		$("#wh1").click(function(){
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank');
		});	
		
	});
	
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh2.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh2.whatSous img").attr('src',data.meals[0].strMealThumb);
		$("#wh2").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});
	
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh3.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh3.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh3").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});	
	
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh4.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh4.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh4").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});	

	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh5.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh5.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh5").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});		
	
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh6.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh6.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh6").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});
	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh7.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh7.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh7").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});	

	$.getJSON('https://www.themealdb.com/api/json/v1/1/random.php', function (data) {
		$(" #wh8.whatSous span" ).text(data.meals[0].strMeal); 
		$("#wh8.whatSous img").attr('src',data.meals[0].strMealThumb);

		$("#wh8").click(function(){ // 
			sendRecipeData(data)
		window.open('recipInstruc.html', '_blank'); // when the statement  window.open('recipInstruc.html', '_blank'); is in the sendRecipeData function links open automatically
		});	
	});	

$("#recipeSubmit").click(function(e){ 
	var form = new FormData(document.getElementById("form"));
	var recipe = document.getElementById('nameRecipe').value;
	console.log("recipe upload ", recipe);
	//console.log("recipe upload ", recipe);
	url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe;
	video = data.meals[0].strYoutube;
	video = video.substr(32, 43);
	e.preventDefault();

	$.getJSON(url, function (data) {
	
		sendRecipeData(data)
		window.open('recipInstruc.html', '_blank');
		
		});
	});
	function sendRecipeData(data)
	{
		var video;
		video = data.meals[0].strYoutube;
		video = video.substr(32, 43);
		localStorage.setItem("foodTitle", data.meals[0].strMeal);
		localStorage.setItem("foodImage", data.meals[0].strMealThumb);
		localStorage.setItem("i1", data.meals[0].strMeasure1 + " " +  data.meals[0].strIngredient1);
		localStorage.setItem("i2", data.meals[0].strMeasure2 + " " +  data.meals[0].strIngredient2);
		localStorage.setItem("i3", data.meals[0].strMeasure3 + " " +  data.meals[0].strIngredient3);
		localStorage.setItem("i4", data.meals[0].strMeasure4 + " " +  data.meals[0].strIngredient4);
		localStorage.setItem("i5", data.meals[0].strMeasure5 + " " +  data.meals[0].strIngredient5);
		localStorage.setItem("i6", data.meals[0].strMeasure6 + " " +  data.meals[0].strIngredient6);
		localStorage.setItem("i7", data.meals[0].strMeasure7 + " " +  data.meals[0].strIngredient7);
		localStorage.setItem("i9", data.meals[0].strMeasure8 + " " +  data.meals[0].strIngredient8);
		localStorage.setItem("i10", data.meals[0].strMeasure10 + " " +  data.meals[0].strIngredient10);
		localStorage.setItem("i11", data.meals[0].strMeasure11 + " " +  data.meals[0].strIngredient11);
		localStorage.setItem("i12", data.meals[0].strMeasure12 + " " +  data.meals[0].strIngredient12);
		localStorage.setItem("i13", data.meals[0].strMeasure13 + " " +  data.meals[0].strIngredient13);
		localStorage.setItem("i14", data.meals[0].strMeasure14 + " " +  data.meals[0].strIngredient14);
		localStorage.setItem("i15", data.meals[0].strMeasure15 + " " +  data.meals[0].strIngredient15);
		localStorage.setItem("i16", data.meals[0].strMeasure16 + " " +  data.meals[0].strIngredient16);
		localStorage.setItem("i17", data.meals[0].strMeasure17 + " " +  data.meals[0].strIngredient17);
		localStorage.setItem("i18", data.meals[0].strMeasure18 + " " +  data.meals[0].strIngredient18);
		localStorage.setItem("i19", data.meals[0].strMeasure19 + " " +  data.meals[0].strIngredient19);
		localStorage.setItem("i20", data.meals[0].strMeasure20 + " " +  data.meals[0].strIngredient20);
		
		localStorage.setItem("Instructions", data.meals[0].strInstructions);
		localStorage.setItem("cookVid", video);

		
	}		

