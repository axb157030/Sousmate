/*SousIndexGet.js will request and store data searched up by user in the SousIndex page if it is available in the MealDB API */

$("#recipeSubmit").click(function(e){ 
	
	// Saving name of food inputted by user
	var form = new FormData(document.getElementById("form"));
	var recipe = formWeth.get("nameRecipe");
	//console.log("recipe upload ", recipe);
	

	url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe; // making url to search up on API
	video = data.meals[0].strYoutube; 
	video = video.substr(32, 43); // Saving source of recipe video
	e.preventDefault();
	
	// $.getJSON will request data from the MealDB API from a specfic url and store it locally
	$.getJSON(url, function (data) {
	
		sendRecipeData(data)
		window.open('recipInstruc.html', '_blank');
		
		});
	});
	
	// The sendRecipeData function stores Recipe related data of the food searched up so that it will be available for the recipInstruc.html. Without this function
	// no food searched up or clicked on will be available on another tab 
	
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