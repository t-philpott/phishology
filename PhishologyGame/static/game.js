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

// Initialise list of emails, both malicious and legitimate
const emailist = [
    ///////////////////////////////////////////////////////////////////
    // LEGITIMATE //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/LegitimateEmails/1 Simple Gmail Signin Attempt.html',
    category: 'legitimate'
    },

    ///////////////////////////////////////////////////////////////////
    // MALICIOUS //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/MaliciousEmails/1 Other Gmail Signin Attempt.html',
    category: 'malicious'
    },
                ]

// array to store randomly chosen emails
let randomized_emaillist = [];
// array to store answered emails to prevent them from being displayed again
let answered_questions = [];


// initiating question number to track which email the user is on
let questionnum = 0;

// tracking how many questions the user got correct / incorrect
let correctanswernum = 0;
let incorrectanswernum = 0;



// note: this function takes place inside the iframe, not the parent index.html page.
function StartGame(){

    // initalise start button and description so it can be removed upon starting
    const startgamebutton = document.getElementById('btnStartGame');
    const startgamedescription = document.getElementById('Title');
    //const nameofuser = document.getElementById('yourname');


    document.getElementById("emailframe").style.visibility = "visible";
    document.getElementById("headeremail").style.visibility = "visible";


    // choose 10 random emails from the emaillist (not yet complete)
    //let randomized_emaillist = emailist.sort(() => Math.random() - 0.5).slice(0, 10);

    // pick 10 random emails from the emaillist, and push them into the randomized email list.
    for (let num = 0; num < 10; num++){
        let emailnum = Math.floor(Math.random() * emailist.length);
        
        // store email
        let randomemail = emailist[emailnum];

        // prevent duplicate emails being added to the list
        if (!randomized_emaillist.includes(randomemail)){
            randomized_emaillist.push(emailist[emailnum]);
        } 
        
    }
    

    // remove the start button and description when the iframe is loaded.//
    startgamebutton.remove();
    startgamedescription.remove();
    //nameofuser.remove();
    //////////////////////////////////////////////////////////////////////

    //get iframe
    let iframe = document.getElementsByTagName('iframe')[0];

    // gamestart //

    //window.alert(randomized_emaillist[0].category)

    iframe.setAttribute('src', randomized_emaillist[questionnum].path);


    // show question number upon starting the game
    document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
}

// displays the next question from the questionnum
function showQuestion() {
    // display first random email in iframe 
    let iframe = document.getElementsByTagName('iframe')[0];
    iframe.setAttribute('src', randomized_emaillist[questionnum].path);
}

// function checkQuestion() {
//     // check if the user's input matches with the question

//     const correctanswer = randomized_emaillist[questionnum].category;

//     window.alert(correctanswer);

//     if (this.id === "btnMalicious" && correctanswer === "malicious"){
//         // answer is malicious
//         correctanswer++;

//         // move to next question
//         questionnum++;
//     }
//     else if (this.id === "btnLegitimate" && correctanswer === "legitimate"){
//         // answer is legitimate
//         correctanswer++;

//         // move to next question
//         questionnum++;
//     }
//     else{
//         // the answer is incorrect
//         incorrectanswernum++;

//         // move to next question
//         questionnum++;
//     }


// }
    
// BUTTON FUNCTIONS


function btnMaliciousClick(){

    // store correct answer
    const correctanswer = randomized_emaillist[questionnum].category;
    
    // prints the correct answer
    //window.alert("the correct answer is " + correctanswer);

    if (correctanswer === "malicious"){
        // answer is malicious
        gameScoreCorrect++;
        window.alert("correct");

        // // remove email from list to prevent it from being displayed again.
        // answered_questions.push(randomized_emaillist[questionnum]);
        // randomized_emaillist.splice(randomized_emaillist[questionnum], 1)
        // console.log(randomized_emaillist)
        // console.log(answered_questions)

        // move to next question
        questionnum++;
        showQuestion();

        // update question number
        document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
    }
    else{
        // answer is legitimate
        gameScoreIncorrect++;
        window.alert("You are incorrect, the answer was " + correctanswer);
        
        // move to next question
        questionnum++;
        showQuestion();

        // update question number
        document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
    }

  }

  function btnLegitimateClick(){

    // store correct answer
    const correctanswer = randomized_emaillist[questionnum].category;
    
    // prints the correct answer
    //window.alert("the correct answer is " + correctanswer);

    if (correctanswer === "legitimate"){
        // answer is legitimate
        gameScoreCorrect++;
        window.alert("You are correct, the answer was " + correctanswer);

        // move to next question
        questionnum++;
        showQuestion();

        // update question number
        document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) +"/10";
    }
    else{
        // answer is malicious
        gameScoreIncorrect++;
        window.alert("You are incorrect, the answer was " + correctanswer);

        // move to next question
        questionnum++;
        showQuestion();
        
        // update question number
        document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) +"/10";
    }


    
    
    //email header information
    //document.getElementById('senderid').innerHTML = 'senders email';
    //document.getElementById('receiverid').innerHTML = 'user email';
    //document.getElementById('subjectid').innerHTML = 'subject';
    /////////////////////////////////////////////////////////////////

    

    //let iframe = document.getElementsByTagName('iframe')[0];

    //iframe.setAttribute('src', '/static/LegitimateEmails/2 Twitter.html');

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