function myFunction() {
    var results = [];
    var userAnswer = prompt("Do you choose rock, paper or scissors?");
    var userChoice = userAnswer.toLowerCase();
    var computerChoice = Math.random();

    if (userChoice === "scissors" | userChoice === "paper" | userChoice === "rock") {
        results[0] = "User: " + userChoice;
        
        if (computerChoice < 0.34) {
    	    computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
    	    computerChoice = "paper";
        } else {
    	    computerChoice = "scissors";
        } results[1] = "Computer: " + computerChoice;

        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {
            results[2] = "The result is a tie!";
            } else if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    results[2] = "rock wins";
                } else {
                    results[2] = "paper wins";
                };
            } else if (choice1 === "paper") {
                if (choice2 === "rock") {
                    results[2] = "paper wins";
                } else {
                    results[2] = "scissors wins";
                };
            } else if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    results[2] = "rock wins";
                } else {
                    results[2] = "scissors wins";
                };
            }; 
        };
        compare(userChoice, computerChoice)
    } else {
        results[0] = userChoice + " is not a valid entry.";
        results[1] = " ";
        results[2] = " ";
    };

    return results;
};