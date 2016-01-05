//The Code Your Own Adventure CHallenge from codecademy


//confirm command
//check if player is ready to play
confirm("I am ready to play");

//confirm age
//prompt = user input
var age = prompt("What is is your age?");

if (age<13){
    console.log("You are not allowed to Play. But if you do, your own fault!!");
}
else{
    console.log("You may enter!");
}

// some other stuff
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//user input/response
userAnswer = prompt("Do you want to race Beiber on stage?");
if (userAnswer=="yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}


//getting feedback
var feedback = prompt("Rate the game between 0 and 10...");
if (feedback>8){
    console.log("Thank you! We should race at the next concert!");
}
else{
    console.log("I'll keep practicing coding and racing.");
}
