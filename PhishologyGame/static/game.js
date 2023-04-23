/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});





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

///////// GAME START

// Initialise list of emails, both malicious and legitimate
const emailist = [
    ///////////////////////////////////////////////////////////////////
    // LEGITIMATE //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/LegitimateEmails/1 Simple Gmail Signin Attempt.html',
    category: 'legitimate',
    sender: 'no-reply@accounts.google.com',
    receiver: 'userpersonal',
    subject: 'Suspicious sign in attempt blocked'
    },
    { 
    path: '/static/LegitimateEmails/2 Twitter.html',
    category: 'legitimate',
    sender: 'support@twitter.com',
    receiver: 'delticore',
    subject: 'Recent login detected'
    },

    ///////////////////////////////////////////////////////////////////
    // MALICIOUS //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/MaliciousEmails/1 Other Gmail Signin Attempt.html',
    category: 'malicious',
    sender: 'no-reply@ggl.hdfe.se',
    receiver: 'userpersonal',
    subject: 'New sign-in notification'
    },
    { 
    path: '/static/MaliciousEmails/2 COVID 19 SURVEY.html',
    category: 'malicious',
    sender: 'HR@deltlcore.com',
    receiver: 'userwork',
    subject: 'Important: COVID Survey'
    },
    { 
    path: '/static/MaliciousEmails/3 Dropbox.html',
    category: 'malicious',
    sender: 'support@dropboxsupport.com',
    receiver: 'userpersonal',
    subject: 'New sign in on Dropbox'
    },
    { 
    path: '/static/MaliciousEmails/4 EMAIL ISSUES.html',
    category: 'malicious',
    sender: 'support@deltecore.com',
    receiver: 'userwork',
    subject: 'Email issues, attention required!'
    },
    { 
    path: '/static/MaliciousEmails/5 LinkedIn.html',
    category: 'malicious',
    sender: 'sup.li@nextbox.se',
    receiver: 'delticore',
    subject: 'Password reset request received'
    },
    { 
    path: '/static/MaliciousEmails/6 Snapchat.html',
    category: 'malicious',
    sender: 'support@snapchat-emall.mobi',
    receiver: 'userwork',
    subject: 'Snapchat - Confirm your email address'
    },
    { 
    path: '/static/MaliciousEmails/7 OUT OF DATE SYSTEM.html',
    category: 'malicious',
    sender: 'support@microsoftsecurity-alerts.com',
    receiver: 'userwork',
    subject: 'Microsoft - Critical update required'
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

// stores the user's entered username.
var nameofuser = "empty";


// note: this function takes place inside the iframe, not the parent index.html page.
function StartGame(){

    // initalise start button and description so it can be removed upon starting
    const startgamebutton = document.getElementById('btnStartGame');
    const startgametitle = document.getElementById('Title');
    const startgamedescription = document.getElementById('gamedescription');

    // stores username
    nameofuser = document.getElementById('yourname').value;

    // displays the header
    document.getElementById("emailframe").style.visibility = "visible";
    document.getElementById("headeremail").style.visibility = "visible";
    document.getElementById("btnMalicious").style.visibility = "visible";
    document.getElementById("btnLegitimate").style.visibility = "visible";

    // // pick 10 random emails from the emaillist, and push them into the randomized email list.
    // for (let num = 0; num < 8; num++){
    //     let emailnum = Math.floor(Math.random() * emailist.length);
        
    //     // store email
    //     let randomemail = emailist[emailnum];

    //     // prevent duplicate emails being added to the list
    //     if (!randomized_emaillist.includes(randomemail.path)){
    //         randomized_emaillist.push(emailist[emailnum]);
    //     } 
        
    // }

    while (randomized_emaillist.length < 9) {
        let emailnum = Math.floor(Math.random() * emailist.length); // generate a random index
        
        let randomemailitem = emailist[emailnum]; // get the item at that index
      
        if (!randomized_emaillist.includes(randomemailitem)) { // check if the item already exists in the randomitems array
          randomized_emaillist.push(randomemailitem); // add the item to the randomitems array if it doesn't already exist
        }
      }
    

    // remove the start button and description when the iframe is loaded.//
    startgamebutton.remove();
    startgametitle.remove();
    startgamedescription.remove();
    //nameofuser.remove();
    //////////////////////////////////////////////////////////////////////

    //get iframe
    let iframe = document.getElementsByTagName('iframe')[0];

    // gamestart //

    

    // show the first email, and update the email header to provide relevant
    iframe.setAttribute('src', randomized_emaillist[questionnum].path);

    // update email header
    updateEmailHeader();

    // show question number upon starting the game
    document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
}


function updateEmailHeader(){
    document.getElementById("senderid").textContent="From: " + randomized_emaillist[questionnum].sender;
    document.getElementById("subjectid").textContent="Subject: " + randomized_emaillist[questionnum].subject;
    
    var receivername = randomized_emaillist[questionnum].receiver;

    if(receivername === 'userwork'){
        document.getElementById("receiverid").textContent="To: " + nameofuser + "@delticore.com";
    }
    else if (receivername === 'userpersonal'){
        document.getElementById("receiverid").textContent="To: " + nameofuser + "@gmail.com";
    }
    else{
        if (receivername === 'delticore'){
            document.getElementById("receiverid").textContent="To: " + "contact" + "@delticore.com";
        }
    }
}

// Upon the user starting, or navigating to the next question, the stored username will replace possible placeholders within each email.
function getUsername(){

    let iframe1 = document.getElementsByTagName('iframe')[0];
    // wait until the iframe has fully loaded so the elements are readable
    iframe1.onload = function() {
        updateUsername(iframe1, nameofuser);
    };
}

// display the user's entered name within emails that mentions names.
function updateUsername(iframe1, nameofuser){
        // add the user's name into an email if it was sent to the user's inbox.
        var iframeDoc = iframe1.contentWindow.document;
        // every element in the class 'placeholderusername' will be replaced.
        var emailnames = iframeDoc.getElementsByClassName("placeholderusername");

        for (var i = 0; i < emailnames.length; i++){
            emailnames[i].textContent = nameofuser;
        }
}
///////////////////////////////////////////////
// displays the next question from the questionnum
function showQuestion() {
    // display first random email in iframe 
    let iframe = document.getElementsByTagName('iframe')[0];
    iframe.setAttribute('src', randomized_emaillist[questionnum].path);

    updateEmailHeader();
}


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

