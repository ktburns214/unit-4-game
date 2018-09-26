var winCount = 0;
var lossCount = 0;
var currentScore = 0;
var targetNumber = 0;


for (var i = 0; i < 4; i++) {

    var imageCrystal = $(".crystals");

    imageCrystal.attr("src", "assets/images/crystal"+i+".png");

    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1) + 1));
    $("#crystals").append(imageCrystal);
}  


function gameSetup() {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#number-to-guess").text(targetNumber);

    currentScore = 0;
    $("#current-score").text(currentScore);

    var imageCrystal = $(".crystal-image");
    console.log(imageCrystal);
    for (var i = 0; i < 4; i++) {
        $(imageCrystal[i]).attr("data-crystalvalue", Math.floor(Math.random() * (12 - 1) + 1));
    }
}

gameSetup();
$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    currentScore += crystalValue;

    $("#currentScore").text(currentScore);

    if (currentScore === targetNumber) {
        alert("You win!");
        winCount++;
        $("#totalWins").text(winCount);
        gameSetup();
    } else if (currentScore >= targetNumber) {
        alert("You lose!!");
        lossCount++;
        $("#totalLosses").text(lossCount);
        gameSetup();
    }

})