$(document).ready(function () {

    console.log("Document is Ready");

    var wins = 0
    var losses = 0;
    var totalScore = 0;

    var randomNumber = 0;

    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    //random number from 19 to 120
    newRandom();
    setScore(totalScore);

    //assigning initial crystal numbers
    setCrystalNumbers();

    function setCrystalNumbers() {
        //each crystal gets a random number between 1 and 12
        console.log("settings crystal numbers")
        crystal1 = Math.floor(Math.random() * 13 + 1);
        crystal2 = Math.floor(Math.random() * 13 + 1);
        crystal3 = Math.floor(Math.random() * 13 + 1);
        crystal4 = Math.floor(Math.random() * 13 + 1);
        console.log(crystal1+" "+crystal2+" "+crystal3+" "+crystal4+" ");
    }

    function newRandom() {
        randomNumber = Math.floor(Math.random() * 121) + 19;
        $("#randomNumber").text(randomNumber);
        console.log("Set new random number to:"+randomNumber);
    }

    function checkGame() {

        if ( totalScore === randomNumber) {
            console.log("Starting won procedure");
            won();
        } else if (totalScore > randomNumber) {
            console.log("Starting loss procedure");
            loss();
        }
    }

    function won() {
        wins += 1;
        setWins(wins);
        totalScore = 0;
        newRandom();
        setText("You have won!")
        setScore(0);
        setCrystalNumbers()
    }

    function loss() {
        losses += 1;
        setLosses(losses);
        totalScore = 0;
        newRandom();
        setText("You have lost :(")
        setScore(0);
        setCrystalNumbers()
    }

    function setLosses( myLosses ) {
        console.log("Setting losses html to: Losses: "+myLosses)
        $("#losses").text("Losses: "+myLosses);
    }

    function setWins( myWins ) {
        console.log("Setting wins html to: Wins: "+myWins)
        $("#wins").text("Wins: "+myWins);
    }

    function setText(myText) {
        console.log("Setting text of #winlosstitle to: "+myText);
        $("#winlosstitle").text(myText);
    }

    function setScore(myScore) {
        console.log("Setting text of #score to: "+myScore);
        $("#score").text(myScore);
    }

    $(".button").on("click", function () {

        var crystalId = $(this).attr("id");
        
        if( crystalId === "crystal1" ) {
            totalScore += crystal1;
        } else if ( crystalId === "crystal2" ) {
            totalScore += crystal2;
        } else if ( crystalId === "crystal3" ) {
            totalScore += crystal3;
        } else {
            totalScore += crystal4;
        }

        console.log("Setting score to: "+totalScore);
        setScore(totalScore);

        console.log("Checking to see if user won or lost.");
        checkGame();

    });

});