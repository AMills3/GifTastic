$(document).ready(function() {

    var athletes = ["Kobe Bryant", "Allen Iverson", "Walter Payton", "Randy Moss", "Kevin Garnett", "Byron Buxton", "Derrick Rose", "Kylian Mbappe", "Alexander Ovechkin", "Michael Vick", "Wayne Rooney"];


    function makeButtons() {
        $("#athleteButtons").html(" ");

	//Loop through the array to make each athlete button
	for (var i = 0; i < athletes.length; i++) {
		$("#athleteButtons").append("<button class='btn btn-danger data-athlete ='" + athletes[i] + "'>" + athletes[i] + "</button>");
	};
};
    makeButtons();

    //Adding new button of choice
    $("#add-button").on("click", function () {
        var newAthlete = $("#user-input").val().trim();
		athletes.push(newAthlete);
		makeButtons();
		return;
	});

    //Getting the GIFs (Not working. I know I'm so close but can't quite get it to work..)
    $("button").on("click", function() {
        var athlete = "Kobe Bryant"; // $(this).attr(athletes[0]);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + athlete + "&api_key=hPaTztoPkkaBjeBEGIeN08HdiEBxkBYp&limit=10";
        console.log(queryURL)

    $.ajax({
        URL: queryURL,
        method: "GET"
    })

    .then(function(response) {
    var results = response.data;
        
        for(var j = 0; j < results.length; j++) {

    var athleteDiv = $("<div>");
    var athleteImg = $("<img>");
    $("#superstars").prepend(athleteDiv);
        athleteImg.attr("src", results[i].images.fixed_still.url);
			athleteImg.attr("data-still", results[i].images.fixed_still.url);
			athleteImg.attr("data-animate", results[i].images.fixed.url);
			athleteImg.attr("data-state", "still");
			athleteImg.attr("class", "gif");
            athleteDiv.append(athleteImg);
            
			}
		});
    });
    
});
    //Making the GIFs start/stop

    function stopStart(){
		var state = $(this).attr("data-state");
		var animateGif = $(this).attr("data-animate");
		var stillGif = $(this).attr("data-still");

    if (state === "still") {

        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    } 
    
    else {

        $(this).attr("src", $(this).attr("still"));
        $(this).attr("data-state", "still");
    }
}

    