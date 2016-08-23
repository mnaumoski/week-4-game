$( document ).ready(function() {

	var numberToGuess = 53;
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
				$("#wins").append(win);
				$("#yourNumber").empty(); 
				counter = 0;
			}
			else if (counter > numberToGuess) {
				alert('You lost!'); 
				loss++;
				$("#losses").append(loss);
				$("#yourNumber").empty(); 
				counter = 0;//this should be here; once I make the array a random number
				
		};
	});
});
