var beforeStart = alert("Welcome to Crystals Collector. Are you ready to play?");

$(document).ready(function() {

    var numberToGuess = Math.floor(Math.random() * 100) + 19; //(max - min +1) + min
    var counter = 0;
    var colors = ["blue", "green", "red", "pink"];
    var win = 0;
    var loss = 0;

    $("#number").text(numberToGuess);

    function createCrystals() {
        $('#crystals').empty();

        for (var i = 0; i < colors.length; i++) {



            var imageCrystal = $('<img>'); //variable that addresses <img> in html; this is different than .crystalImage that represents a class

            var clickCrystal = colors[i] + ".jpeg";

            // imageCrystal.attr('data-num', colors[i]);

            imageCrystal.attr('src', clickCrystal);

            imageCrystal.attr('alt', 'crystals');

            imageCrystal.addClass('crystalImage');

            imageCrystal.attr("data-value", Math.floor(Math.random() * 12) + 1);

            $('#crystals').append(imageCrystal);

        }
    }

    createCrystals();

    $(document).on("click", ".crystalImage", function() {
        counter = counter + parseInt($(this).data('value')); // Need to understand this better; this.data('num')

        $("#yourNumber").text(counter);

        if (counter == numberToGuess) {
            alert('Congratulations! You won!');
            win++;
            $("#wins").text(win);
            $("#yourNumber").empty();
            counter = 0;
            numberToGuess = Math.floor(Math.random() * 100) + 19; //there has to be a better way than this...
            $("#number").text(numberToGuess);
            createCrystals();



        } else if (counter > numberToGuess) {
            alert('You lost!');
            loss++;
            $("#losses").text(loss);
            $("#yourNumber").empty();
            counter = 0; //this should be here; once I make the array a random number
            numberToGuess = Math.floor(Math.random() * 100) + 19; // this might not be DRY
            $("#number").text(numberToGuess);
            createCrystals();

        };
    });


});
