$(document).ready(function () {

    // VARIABLE FOR YOUR GUESSED NUMBERS LOSSES AND WINS
    var userGuess = 0;
    var wins = 0;
    var losses = 0;

    // CREATE VARIABLES FOR THE IMAGES
    var crystal1 = $("<img>");
    var crystal2 = $("<img>");
    var crystal3 = $("<img>");

    //CREATE A RANDOM  NUMBER TO TRY TO MATCH
    var ranNum = Math.floor(Math.random() * 100);
    console.log(ranNum);

     //SET IMG CLASSES AND SOURCES
     crystal1.attr("src", "assets/images/crystal.jpg");
     crystal2.attr("src", "assets/images/crystal.jpg");
     crystal3.attr("src", "assets/images/crystal.jpg");

     crystal1.addClass("crystal1");
     crystal2.addClass("crystal35");
     crystal3.addClass("crystal12");
     crystal1.addClass("crystal");
     crystal2.addClass("crystal");
     crystal3.addClass("crystal");

     
     //SET NUMBER TEXT INTO PLACE
     $(".randNumb").text("Try to get to this number: " + ranNum);
     $(".yourNum").text("Your Total: " + userGuess);
     $(".wins").text("wins: " + wins);
     $(".losses").text("losses: " + losses);

     //APPEND DIVS
     $("#imgDiv").append(crystal1);
     $("#imgDiv").append(crystal2);
     $("#imgDiv").append(crystal3);

     // SET ON CLICK FUNCTIONALITY
    $(crystal1).click(function () {
        userGuess += 1;
        $(".yourNum").text("Your Total: " + userGuess);

        if (userGuess === ranNum) {
            wins++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".wins").text("wins: " + wins);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        } else if(userGuess > ranNum) {
            losses++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".losses").text("losses: " + losses);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        }
    });

    $(crystal2).click(function () {
        userGuess += 35;
        $(".yourNum").text("Your Total: " + userGuess);
        if (userGuess === ranNum) {
            wins++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".wins").text("wins: " + wins);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        } else if(userGuess > ranNum) {
            losses++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".losses").text("losses: " + losses);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        }
    })

    $(crystal3).click(function () {
        userGuess += 12;
        $(".yourNum").text("Your Total: " + userGuess);
        if (userGuess === ranNum) {
            wins++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".wins").text("wins: " + wins);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        } else if(userGuess > ranNum) {
            losses++;
            userGuess = 0;
            ranNum = Math.floor(Math.random() * 100);
            $(".losses").text("losses: " + losses);
            $(".randNumb").text("Try to get to this number: " + ranNum);
        } 
    })


    $(".crsytal").click(function () {
        
    
    //SET IF STATEMENT
    if (userGuess === ranNum) {
        wins++;
        userGuess = 0;
        ranNum = Math.floor(Math.random() * 100);
        $(".wins").text("wins: " + wins);
        $(".randNumb").text("Try to get to this number: " + ranNum);
    } else if(userGuess > ranNum) {
        losses++;
        userGuess = 0;
        ranNum = Math.floor(Math.random() * 100);
        $(".losses").text("losses: " + losses);
        $(".randNumb").text("Try to get to this number: " + ranNum);
    } else {
        userGuess += userGuess;
    }

});

     console.log(wins);
     console.log(losses);
})