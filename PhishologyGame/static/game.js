// phishology - game.js (JavaScript)

// AUDIO SECTION

// when the user clicks on a button, a feedback click is played.
//var click = new Audio('static/audio/click.mp3');

// positive / negative audio (play positive sound when an answer is correct, and the opposite for when an answer is incorrect)


// distractions - (for testing whether users react differently with distractions in the bkacground)

////////////////// - END OF AUDIO SECTION

// SETTING UP THE LEVELS

// counter variable to track the current level of the game
let gameLevel = 1;

// counter variables to track how many the user got correct and incorrect
let gameScoreCorrect = 0;
let gameScoreIncorrect = 0;

// the user may have 5 chances to complete the game, everytime an answer is incorrect, they will lose a life.
let Lives = 5;

// function that once called, adds 1 to the level counter to progress the user
function nextLevel(){
    gameLevel++;
    managelevel();
}

// function that handles the behaviour for each level
function managelevel(){
    if(gameLevel == 1){
        // add first level behaviour

        //display layout sprites

    } else if (gameLevel == 2){
        // add second level behaviour
        
    } else if (gameLevel == 3){
        // add third level behaviour
        alert("you reached level 3")
        
    }
        // note: only 3 for now
}

// function that displays the level for the user
function displayLevel(){

}

function displayScore(){

}

///////// GAME START


// USER READS DETAILS
// USER CLICKS START
// 10 RANDOM EMAILS ARE SORTED INTO 10 QUESTIONS
// FIRST QUESTION IS DISPLAYED   

// note: this function takes place inside the iframe, not the parent index.html page.
function StartGame(){

    // initalise start button and description so it can be removed upon starting
    const startgamebutton = document.getElementById('btnStartGame');
    const startgamedescription = document.getElementById('Title');
    const nameofuser = document.getElementById('yourname');


    document.getElementById("emailframe").style.visibility = "visible";
    

    // remove the start button and description when the iframe is loaded.//
    startgamebutton.remove();
    startgamedescription.remove();
    nameofuser.remove();
    //////////////////////////////////////////////////////////////////////

    let iframe = document.getElementsByTagName('iframe')[0];

    iframe.setAttribute('src', '/static/LegitimateEmails/1 Simple Gmail Signin Attempt.html');


}





// BUTTON FUNCTIONS


function maliciousbuttonclick(){

    //////////// loading emails

    let iframe = document.getElementsByTagName('iframe')[0];

    iframe.setAttribute('src', '/static/LegitimateEmails/2 Twitter.html');

    //document.getElementById("emailframe").contentWindow.document.body.innerHTML = "/static/START.html";

  }


// END OF BUTTON SECTION



// SAVE DETAILS SECTION

// note: when a user has completed the game, the following information could be used to determine the user's score.

// - the score
// - which levels they got correct / incorrect
// - whether there was a distraction on the level
// - how quickly they answered the question
// - 
//
//
//
//