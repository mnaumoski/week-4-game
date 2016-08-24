var beforeStart = alert("Welcome to Crystals Collector. Are you ready to play?");

$( document ).ready(function() {

	var numberToGuess = Math.floor(Math.random() * 100) + 19; //(max - min +1) + min
	var counter = 0;
	var numbers = [10, 5, 3, 7];
	var win = 0;
	var loss = 0;

	$("#number").text(numberToGuess);

	for (var i = 0; i < numbers.length; i++) {
		
			var imageCrystal = $('<img>'); //variable that addresses <img> in html; this is different than .crystalImage that represents a class
			
			imageCrystal.attr('data-num', numbers[i]);

			imageCrystal.attr('src', 'assets/images/red.jpeg');
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage');
			
			$('#crystals').append(imageCrystal);		
	}

	$(".crystalImage").on("click", function(){
			counter=counter+parseInt($(this).data('num'));// Need to understand this better; this.data('num')
		
			$("#yourNumber").text(counter);

			if (counter == numberToGuess) {
				alert('Congratulations! You won!');
				win++;
				$("#wins").text(win);
				$("#yourNumber").empty(); 
				counter = 0;
				numberToGuess = Math.floor(Math.random()*120 + 19);//there has to be a better way than this...
				$("#number").text(numberToGuess);
			}
			else if (counter > numberToGuess) {
				alert('You lost!'); 
				loss++;
				$("#losses").text(loss);
				$("#yourNumber").empty(); 
				counter = 0;//this should be here; once I make the array a random number
				numberToGuess = Math.floor(Math.random()*120 + 19);// this might not be DRY
				$("#number").text(numberToGuess);
		};
	});
});
