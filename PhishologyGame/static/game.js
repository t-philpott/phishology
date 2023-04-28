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


//////////////////////////

// phishology - game.js (JavaScript)


///////// GAME START

// Initialise list of emails, both malicious and legitimate
//
// if receiver = delticore: the email was sent to the user's organisation email.
// if receiver = userwork: the email was sent to the user's work email.
// if receiver = userpersonal: the email was sent to the user's gmail account.

const emailist = [
    ///////////////////////////////////////////////////////////////////
    // LEGITIMATE //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/LegitimateEmails/1 Simple Gmail Signin Attempt.html',
    category: 'legitimate',
    sender: 'no-reply@accounts.google.com',
    receiver: 'userpersonal',
    subject: 'Suspicious sign in attempt blocked',
    title: 'Legitimate Email',
    desc: 'Legitimate sign in attempt email from Google.',
    thumbnail: '/static/LegitimateEmails/thumbnails/1.png'
    },
    { 
    path: '/static/LegitimateEmails/2 Twitter.html',
    category: 'legitimate',
    sender: 'support@twitter.com',
    receiver: 'delticore',
    subject: 'Recent login detected',
    title: 'Legitimate Email',
    desc: 'Legitimate sign in attempt email from Twitter.',
    thumbnail: '/static/LegitimateEmails/thumbnails/2.png'
    },
    { 
    path: '/static/LegitimateEmails/3 Spotify.html',
    category: 'legitimate',
    sender: 'support@spotify.com',
    receiver: 'userpersonal',
    subject: 'New login on Spotify',
    title: 'Legitimate Email',
    desc: 'Legitimate sign in attempt email from Spotify.',
    thumbnail: '/static/LegitimateEmails/thumbnails/3.png'
    
    },
    { 
    path: '/static/LegitimateEmails/4 Instagram.html',
    category: 'legitimate',
    sender: 'notifications@instagram.com',
    receiver: 'userpersonal',
    subject: 'Instagram notification',
    title: 'Legitimate Email',
    desc: 'Legitimate sign in attempt email from Instagram.',
    thumbnail: '/static/LegitimateEmails/thumbnails/4.png'
    },

    ///////////////////////////////////////////////////////////////////
    // MALICIOUS //
    //////////////////////////////////////////////////////////////////
    { 
    path: '/static/MaliciousEmails/1 Other Gmail Signin Attempt.html',
    category: 'malicious',
    sender: 'no-reply@ggl.hdfe.se',
    receiver: 'userpersonal',
    subject: 'New sign-in notification',
    title: 'Phishing Email',
    desc: 'malicious gmail',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/2 COVID 19 SURVEY.html',
    category: 'malicious',
    sender: 'HR@deltlcore.com',
    receiver: 'userwork',
    subject: 'Important: COVID Survey',
    title: 'Phishing Email',
    desc: 'malicious covid survey',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/3 Dropbox.html',
    category: 'malicious',
    sender: 'support@dropboxsupport.com',
    receiver: 'userpersonal',
    subject: 'New sign in on Dropbox',
    title: 'Phishing Email',
    desc: 'malicious dropbox',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/4 EMAIL ISSUES.html',
    category: 'malicious',
    sender: 'support@deltecore.com',
    receiver: 'userwork',
    subject: 'Email issues, attention required!',
    title: 'Phishing Email',
    desc: 'malicious email issues',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/5 LinkedIn.html',
    category: 'malicious',
    sender: 'sup.li@nextbox.se',
    receiver: 'delticore',
    subject: 'Password reset request received',
    title: 'Phishing Email',
    desc: 'malicious linked in',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/6 Snapchat.html',
    category: 'malicious',
    sender: 'support@snapchat-emall.mobi',
    receiver: 'userwork',
    subject: 'Snapchat - Confirm your email address',
    title: 'Phishing Email',
    desc: 'malicious snapchat',
    thumbnail: '/static/assets/placeholder.png'
    },
    { 
    path: '/static/MaliciousEmails/7 OUT OF DATE SYSTEM.html',
    category: 'malicious',
    sender: 'support@microsoftsecurity-alerts.com',
    receiver: 'userwork',
    subject: 'Microsoft - Critical update required',
    title: 'Phishing Email',
    desc: 'malicious out of date system',
    thumbnail: '/static/assets/placeholder.png'
    },
                

]

// array to store randomly chosen emails
let randomized_emaillist = [];
// array to store answered emails to prevent them from being displayed again
let answered_questions = [];
// initiating question number to track which email the user is on
let questionnum = 0;
// counter variables to track how many the user got correct and incorrect
let gameScoreCorrect = 0;
let gameScoreIncorrect = 0;

// the user may have 5 chances to complete the game, everytime an answer is incorrect, they will lose a life.
let Lives = 5;

// if the user gets 3 answers in a row, they start a streak, then 4, 5, 6, 7
let streak = 0;
// tracks the user's points
let points = 0;

//audio/////////

//credit -- universfield
var correctsound = new Audio('static/audio/correct.mp3');
var incorrectsound = new Audio('static/audio/incorrect.mp3');
correctsound.volume=.5;
incorrectsound.volume=.5;

////////////////




// stores the user's entered username.
var nameofuser = "empty";


/////////////////// USER NAME INPUT SECTION /////////////////
const inputBox = document.getElementById('yourname');
const wname = document.getElementById('workname');
const pname = document.getElementById('persname');

inputBox.addEventListener("input", function(){ 
    wname.textContent = inputBox.value;
    pname.textContent = inputBox.value; 
});

// prevents spaces in the username - credit: https://stackoverflow.com/questions/32366300/how-prevent-whitespace-in-input-field-with-plain-javascript
function spacecheck(event)
{
   if(event.which ==32)
   {
      event.preventDefault();
      return false;
   }
}
/////////////////////////////////////////////////////////

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
    // document.getElementById("btnMalicious").style.visibility = "visible";
    // document.getElementById("btnLegitimate").style.visibility = "visible";
    document.getElementById("chbuttons").style.display = "block";

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

    while (randomized_emaillist.length < 10) {
        let emailnum = Math.floor(Math.random() * emailist.length); // generate a random index
        
        let randomemailitem = emailist[emailnum]; // get the item at that index
      
        if (!randomized_emaillist.includes(randomemailitem)) { // check if the item already exists in the randomitems array
          randomized_emaillist.push(randomemailitem); // add the item to the randomitems array if it doesn't already exist
        }
      }
    

    // remove the start button and description when the iframe is loaded.//
    // startgamebutton.remove();
    // startgametitle.remove();
    // startgamedescription.remove();

    document.getElementById("btnStartGame").style.display = "none";
    document.getElementById("Title").style.display = "none";
    document.getElementById("gamedescription").style.display = "none";
    document.getElementById("briefing").style.display = "none";
    document.getElementById("introlist").style.display = "none";
    document.getElementById("userinputcontainer").style.display = "none";

    
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
    //document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
    
    var currentquestiontext = document.getElementById("q"+ (questionnum + 1))
    currentquestiontext.classList.add("neoncurrentquestion");


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
    
    if (questionnum < 10){
        // display first random email in iframe 
        let iframe = document.getElementsByTagName('iframe')[0];
        iframe.setAttribute('src', randomized_emaillist[questionnum].path);

        updateEmailHeader();

        var previousquestiontext = document.getElementById("q"+ (questionnum))
        previousquestiontext.classList.remove("neoncurrentquestion");
        var currentquestiontext = document.getElementById("q"+ (questionnum + 1))
        currentquestiontext.classList.add("neoncurrentquestion");
    }
    else{
        //window.alert("Game finished. You got " + gameScoreCorrect + " questions correct, and " + gameScoreIncorrect + " questions incorrect.")
    // hides all
    document.getElementById("emailframe").style.visibility = "hidden";
    document.getElementById("headeremail").style.visibility = "hidden";
    
    document.getElementById("chbuttons").style.display = "block";
    // document.getElementById("btnMalicious").style.visibility = "hidden";
    // document.getElementById("btnLegitimate").style.visibility = "hidden";
    // document.getElementById("questionnumber").style.visibility = "hidden";

    showResults();

    }

    
}

function streakPopup(){
    const streakdescription = document.getElementById("streakdesc");
    streakdescription.classList.remove("tracking-out-contract");
    streakdescription.classList.add("tracking-in-expand-fwd");
    
    streakdescription.addEventListener("animationend", function() {
        streakdescription.classList.remove("tracking-in-expand-fwd");
        streakdescription.classList.add("tracking-out-contract");
    });
}

function checkStreak(){

    // set the current streak count to the streak number
    document.getElementById("streaknumber").innerHTML = streak;
    
    if (streak < 3){
        // do nothing
    } else if (streak === 3) {
    streakPopup();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +100 bonus points';
    points += 100;

    } else if (streak === 4) {
    streakPopup();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +150 bonus points';
    points += 150;

    } else if (streak === 5) {
    streakPopup();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +200 bonus points';
    points += 200;
    
    }else if (streak === 6) {
        streakPopup();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +250 bonus points';
        points += 250;
    
    }else if (streak === 7) {
        streakPopup();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +300 bonus  points';
        points += 300;
    
    }else if (streak === 8) {
        streakPopup();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +350 bonus points';
        points += 350;

    }else if (streak === 9) {
        streakPopup();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +400 bonus points';
        points += 400;

    }else if (streak === 10) {
        streakPopup();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +600 bonus points';
        points += 600;
    }
    
    document.getElementById("pointnumber").textContent = points;
}

function showResults(){

    // hide monitor, buttons, and scorebox
    document.getElementById("monitor1").style.display = "none";
    document.getElementById("chbuttons").style.display = "none";
    document.getElementById("scorebox").style.display = "none";

    // show results title and description
    document.getElementById("resultsDiv").style.display = "block";
    document.getElementById("correctNo").innerHTML = gameScoreCorrect;
    document.getElementById("incorrectNo").innerHTML = gameScoreIncorrect;
    let qnum = 1;



    
    // create cards to summarise user's answers
    const answercards = document.getElementById("answersummary");


    answered_questions.forEach(function(item, index) {
        
        const card = document.createElement("div");
        card.classList.add("card", "resultcard");
        if (answered_questions[index].category == answered_questions[index].usersanswer){
            card.classList.add("text-white", "bg-success")
        }
        else{
            card.classList.add("text-white", "bg-danger")
        }
        card.styleList

        const image = document.createElement("img");

        image.src = answered_questions[index].thumbnail; 
        image.classList.add("card-img-top", "emailThumbnail");

        //////////////////
        const header = document.createElement("div");
        header.classList.add("card-header");
        if(answered_questions[index].usersanswer == "malicious"){
            header.innerHTML = "<b>Q" + qnum + ".</b>" + " You answered malicious.";
            qnum+=1;
        }
        else{
            header.innerHTML = "<b>Q"+ qnum + ".</b>" + " You answered legitimate.";
            qnum+=1;
        }
        /////////////////

        const body = document.createElement("div");
        body.classList.add("card-body");

        const email = document.createElement("h5");
        email.classList.add("card-title");

        if(answered_questions[index].category == 'malicious'){
            email.classList.add("neonlegitimate");
        }
        else if(answered_questions[index].category == 'legitimate'){
            email.classList.add("neonlegitimate");
        }

        const categoryicon = document.createElement("i");
        
        if(answered_questions[index].category == 'malicious'){
            categoryicon.classList.add('fa-solid');
            categoryicon.classList.add('fa-fish-fins');
        }
        else if (answered_questions[index].category == 'legitimate'){
            categoryicon.classList.add('fa');
            categoryicon.classList.add('fa-shield');          
        }

        email.appendChild(categoryicon);
        email.appendChild(document.createTextNode(' '));
        email.appendChild(document.createTextNode(answered_questions[index].title));

        const answer = document.createElement("p");
        answer.classList.add("card-text");
        answer.textContent = answered_questions[index].desc;

        body.appendChild(email);
        body.appendChild(answer);
        card.appendChild(header);
        card.appendChild(image);
        card.appendChild(body);
        answercards.appendChild(card);
    });

}


function removeResultCards() {

    const cardcontainer = document.getElementById('answersummary');

    while (cardcontainer.firstChild) {
      cardcontainer.removeChild(cardcontainer.firstChild);
    }
}

function clearScoreboard(){
    
    // remove the current question glow
    var currentquestiontext = document.getElementById("q10");
    currentquestiontext.classList.remove("neoncurrentquestion");

     // remove the answered question colours
    for (var i = 1; i <= 10; i++){
        document.getElementById("circle"+i).style.backgroundColor = 'rgba(255, 255, 255, 0.185)';
    }

    // set streak and points number to 0
    document.getElementById("streaknumber").innerHTML = "0";
    document.getElementById("pointnumber").innerHTML = "0";
}

function restartGame(){
    // reset all lists and counters
    randomized_emaillist = [];
    answered_questions = [];
    questionnum = 0;
    gameScoreCorrect = 0;
    gameScoreIncorrect = 0;
    points = 0;
    streak = 0;

    removeResultCards();
    clearScoreboard();

    // hide results
    document.getElementById("resultsDiv").style.display = "none";

    // display elements again
    document.getElementById("monitor1").style.display = "block";
    document.getElementById("btnStartGame").style.display = "block";
    document.getElementById("Title").style.display = "block";
    document.getElementById("gamedescription").style.display = "block";
    document.getElementById("scorebox").style.display = "block";
}

function btnMaliciousClick(){

    // store correct answer
    const correctanswer = randomized_emaillist[questionnum].category;
    
    // prints the correct answer
    //window.alert("the correct answer is " + correctanswer);

    if (correctanswer === "malicious"){
        // answer is malicious
        gameScoreCorrect++;
        points += 100;
        streak++;
        checkStreak();
        
        correctsound.pause();
        correctsound.currentTime = 0;
        correctsound.play();

        // // remove email from list to prevent it from being displayed again.
        answered_questions.push(randomized_emaillist[questionnum]);
        answered_questions[questionnum].usersanswer = "malicious";
        console.log(answered_questions);
        // randomized_emaillist.splice(randomized_emaillist[questionnum], 1)
        // console.log(randomized_emaillist)
        // console.log(answered_questions)

        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "green";

        // move to next question
        questionnum++;
        showQuestion();
        checkStreak();

        // update question number
        //document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
    }
    else{
        // answer is legitimate
        gameScoreIncorrect++;
        streak = 0;
        checkStreak();
        
        incorrectsound.pause();
        incorrectsound.currentTime = 0;
        incorrectsound.play();

        answered_questions.push(randomized_emaillist[questionnum]);
        answered_questions[questionnum].usersanswer = "malicious";
        console.log(answered_questions);
        
        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "red";

        // move to next question
        questionnum++;
        showQuestion();

        // update question number
        //document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) + "/10";
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
        points += 100;
        streak++;
        checkStreak();
        
        correctsound.pause();
        correctsound.currentTime = 0;
        correctsound.play();

        answered_questions.push(randomized_emaillist[questionnum]);
        answered_questions[questionnum].usersanswer = "legitimate";
        console.log(answered_questions);

        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "green";

        // move to next question
        questionnum++;
        showQuestion();

        // update question number
        //document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) +"/10";
    }
    else{
        // answer is malicious
        gameScoreIncorrect++;
        streak = 0;
        checkStreak();
        
        incorrectsound.pause();
        incorrectsound.currentTime = 0;
        incorrectsound.play();


        answered_questions.push(randomized_emaillist[questionnum]);
        answered_questions[questionnum].usersanswer = "legitimate";
        console.log(answered_questions);

        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "red";

        // move to next question
        questionnum++;
        showQuestion();
        
        // update question number
        //document.getElementById("questionnumber").textContent="Question " + (questionnum + 1) +"/10";
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

