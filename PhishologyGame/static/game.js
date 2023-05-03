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
    title: 'Legitimate',
    desc: 'This is a legitimate email from Google. As the sender email and link matches with the "Google.com" domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/1.png'
    },
    { 
    path: '/static/LegitimateEmails/2 Twitter.html',
    category: 'legitimate',
    sender: 'support@twitter.com',
    receiver: 'delticore',
    subject: 'Recent login detected',
    title: 'Legitimate',
    desc: 'This is a legitimate email from Twitter. As the sender email and link matches with the "Twitter.com" domain',
    thumbnail: '/static/LegitimateEmails/thumbnails/2.png'
    },
    { 
    path: '/static/LegitimateEmails/3 Spotify.html',
    category: 'legitimate',
    sender: 'support@spotify.com',
    receiver: 'userpersonal',
    subject: 'New login on Spotify',
    title: 'Legitimate',
    desc: 'This is a legitimate email from Spotify. As the sender email and link matches with the "Spotify.com" domain',
    thumbnail: '/static/LegitimateEmails/thumbnails/3.png'
    
    },
    { 
    path: '/static/LegitimateEmails/4 Instagram.html',
    category: 'legitimate',
    sender: 'notifications@instagram.com',
    receiver: 'userpersonal',
    subject: 'Instagram notification',
    title: 'Legitimate',
    desc: 'This is a legitimate email from Instagram. As the sender email and link matches with the "Instagram.com" domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/4.png'
    },
    { 
    path: '/static/LegitimateEmails/5 Blockchain.html',
    category: 'legitimate',
    sender: 'notify@blockchain.com',
    receiver: 'userpersonal',
    subject: 'Blockchain - Download your Transaction History',
    title: 'Legitimate',
    desc: 'This is a legitimate email from Blockchain. As the sender email and links within the email matches with the "Blockchain.com" domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/5.png'
    },
    { 
    path: '/static/LegitimateEmails/6 Company party.html',
    category: 'legitimate',
    sender: 'john.carpenter@delticore.com',
    receiver: 'userwork',
    subject: 'Company party',
    title: 'Legitimate',
    desc: 'This is a legitimate email from your co-workers. As the sender email matches the Delticore domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/6.png'
    },
    { 
    path: '/static/LegitimateEmails/7 000WebHost.html',
    category: 'legitimate',
    sender: 'no-reply@000webhost.com',
    receiver: 'userwork',
    subject: '000WebHost Website limit reached',
    title: 'Legitimate',
    desc: 'This is a legitimate email from 000WebHost. As the sender email and links within the email matches the "000WebHost.com" domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/7.png'
    },
    { 
    path: '/static/LegitimateEmails/8 Dropbox.html',
    category: 'legitimate',
    sender: 'no-reply@dropbox.com',
    receiver: 'userwork',
    subject: 'We are improving your Dropbox experience',
    title: 'Legitimate',
    desc: 'This is a legitimate Dropbox email. As the sender email and the links within the email the “Dropbox.com" domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/8.png'
    },
    { 
    path: '/static/LegitimateEmails/9 Survey.html',
    category: 'legitimate',
    sender: 'HR@delticore.com',
    receiver: 'userwork',
    subject: 'Delticore Company Survey',
    title: 'Legitimate',
    desc: 'This is a legitimate work-related email. As the sender email matches the Delticore domain, and the survey link matches a legitimate Google forms domain.',
    thumbnail: '/static/LegitimateEmails/thumbnails/9.png'
    },
    { 
    path: '/static/LegitimateEmails/10 SalesReport.html',
    category: 'legitimate',
    sender: 'daniel.jones@delticore.com',
    receiver: 'userwork',
    subject: 'Weekly Sales Report',
    title: 'Legitimate',
    desc: 'This is a legitimate work-related email. As the sender email matches the Delticore domain, and the context seems expected and legitimate.',
    thumbnail: '/static/LegitimateEmails/thumbnails/10.png'
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
    title: 'Phishing',
    desc: 'This is a fake Google sign in alert. The sender email does not match, and the links are shortned using tinyurl, then hidden behind Google AMP links.',
    thumbnail: '/static/MaliciousEmails/thumbnails/1.png'
    },
    { 
    path: '/static/MaliciousEmails/2 COVID 19 SURVEY.html',
    category: 'malicious',
    sender: 'HR@deltlcore.com',
    receiver: 'userwork',
    subject: 'Important: COVID Survey',
    title: 'Phishing',
    desc: 'This is a fake COVID survey email. This email tries to leverage the urgency caused by the pandemic to increase the chances of getting the target to click on the malicious link.',
    thumbnail: '/static/MaliciousEmails/thumbnails/2.png'
    },
    { 
    path: '/static/MaliciousEmails/3 Dropbox.html',
    category: 'malicious',
    sender: 'support@dropboxsupport.com',
    receiver: 'userpersonal',
    subject: 'New sign in on Dropbox',
    title: 'Phishing',
    desc: 'This is a fake Dropbox email. The links and sender email does not match the "Dropbox.com" domain.',
    thumbnail: '/static/MaliciousEmails/thumbnails/3.png'
    },
    { 
    path: '/static/MaliciousEmails/4 IssueWithEmail.html',
    category: 'malicious',
    sender: 'support@deltecore.com',
    receiver: 'userwork',
    subject: 'Email issues, attention required!',
    title: 'Phishing',
    desc: 'This is a fake work-related email. The grammar is unusual, the sender email is incorrect, and the link URL is malicious.',
    thumbnail: '/static/MaliciousEmails/thumbnails/4.png'
    },
    { 
    path: '/static/MaliciousEmails/5 LinkedIn.html',
    category: 'malicious',
    sender: 'sup.li@nextbox.se',
    receiver: 'delticore',
    subject: 'Password reset request received',
    title: 'Phishing',
    desc: 'This is a fake LinkedIn email. The sender email and link does not match with the "Linkedin.com" domain.',
    thumbnail: '/static/MaliciousEmails/thumbnails/5.png'
    },
    { 
    path: '/static/MaliciousEmails/6 Snapchat.html',
    category: 'malicious',
    sender: 'support@snapchat.notifyy.com',
    receiver: 'userwork',
    subject: 'Snapchat - Confirm your email address',
    title: 'Phishing',
    desc: 'This is a fake Snapchat email. The sender email and links are incorrect, and it creates a sense of urgency by claiming that someone signed up using your email. ',
    thumbnail: '/static/MaliciousEmails/thumbnails/6.png'
    },
    { 
    path: '/static/MaliciousEmails/7 OUT OF DATE SYSTEM.html',
    category: 'malicious',
    sender: 'support@microsoftsecurity-alerts.com',
    receiver: 'userwork',
    subject: 'Microsoft - Critical update required',
    title: 'Phishing',
    desc: 'This is a fake Windows email. The email is masking the malicious link with a legitimate looking URL, and mentions a deadline to cause urgency.',
    thumbnail: '/static/MaliciousEmails/thumbnails/7.png'
    },
    { 
    path: '/static/MaliciousEmails/8 Package.html',
    category: 'malicious',
    sender: 'no-reply@dhl-services-delivery.net',
    receiver: 'userwork',
    subject: 'DHL - Package Received!',
    title: 'Phishing',
    desc: 'This is a fake DHL email. The links do not match the "DHL.com" domain. This exploits the sense of urgency when using package delivery services. ',
    thumbnail: '/static/MaliciousEmails/thumbnails/8.png'
    },
    { 
    path: '/static/MaliciousEmails/9 Urgent Request.html',
    category: 'malicious',
    sender: 'billbob@delticoreinc.com',
    receiver: 'userwork',
    subject: 'Urgent Request',
    title: 'Phishing',
    desc: 'This is a fake work-related email. The attacker is posing as the CEO of your organisation, requesting a large sum of money without notice.',
    thumbnail: '/static/MaliciousEmails/thumbnails/9.png'
    },
    { 
    path: '/static/MaliciousEmails/10 Supplier.html',
    category: 'malicious',
    sender: 'accounts@rundedniifflim.com',
    receiver: 'delticore',
    subject: 'Payment Overdue',
    title: 'Phishing',
    desc: 'This is a fake work-related email. Posing as the paper supplier of your organisation, the sender email and link URL has an extra letter. ',
    thumbnail: '/static/MaliciousEmails/thumbnails/10.png'
    },
    { 
    path: '/static/MaliciousEmails/11 BusinessProposal.html',
    category: 'malicious',
    sender: 'jamesH@software4business-co.com',
    receiver: 'delticore',
    subject: 'Business Proposal',
    title: 'Phishing',
    desc: 'This is a fake work-related email. The sender email is unfamiliar, therefore the attachment file should not to be trusted.',
    thumbnail: '/static/MaliciousEmails/thumbnails/11.png'
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
// if the user gets 3 answers in a row, they start a streak, then 4, 5, 6, 7
let streak = 0;
let higheststreak = 0;
// tracks the user's points
let points = 0;

//audio/////////

//credit -- universfield
var correctsound = new Audio('static/audio/correct.mp3');
var incorrectsound = new Audio('static/audio/incorrect.mp3');
correctsound.volume=.5;
incorrectsound.volume=.5;

////////////////

// initialising leaderboard /////////


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

function checkempty() {
    var checkempty = inputBox.value;
    if (checkempty == null || checkempty == "") {
        document.getElementById("emptynotify").style.display = "block";
    }
    else{
        StartGame();
        document.getElementById("emptynotify").style.display = "none";
    }
 }

 ///////////////////////////////////////////////////////
 
function StartGame(){

    // stores username
    nameofuser = document.getElementById('yourname').value;

    // displays the header
    document.getElementById("emailframe").style.visibility = "visible";
    document.getElementById("headeremail").style.visibility = "visible";
    document.getElementById("chbuttons").style.display = "block";

    // randomly choose 10 emails from the emailist, and push it into randomized_emailist.
    while (randomized_emaillist.length < 10) {
        let emailnum = Math.floor(Math.random() * emailist.length); // generate a random index
        
        let randomemailitem = emailist[emailnum]; // get the item at that index
      
        if (!randomized_emaillist.includes(randomemailitem)) { // check if the item already exists in the randomitems array
          randomized_emaillist.push(randomemailitem); // add the item to the randomitems array if it doesn't already exist
        }
      }

    document.getElementById("btnStartGame").style.display = "none";
    document.getElementById("Title").style.display = "none";
    document.getElementById("gamedescription").style.display = "none";
    document.getElementById("briefing").style.display = "none";
    document.getElementById("introlist").style.display = "none";
    document.getElementById("userinputcontainer").style.display = "none";

    //get iframe
    let iframe = document.getElementsByTagName('iframe')[0];
    // show the first email, and update the email header to provide relevant
    iframe.setAttribute('src', randomized_emaillist[questionnum].path);

    // update email header
    updateEmailHeader();
    
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

// displays the next question
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
        //game finished
    document.getElementById("emailframe").style.visibility = "hidden";
    document.getElementById("headeremail").style.visibility = "hidden";
    document.getElementById("chbuttons").style.display = "block";

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
    storeHighestStreak();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +100 bonus points';
    points += 100;

    } else if (streak === 4) {
    streakPopup();
    storeHighestStreak();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +150 bonus points';
    points += 150;

    } else if (streak === 5) {
    streakPopup();
    storeHighestStreak();
    document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +200 bonus points';
    points += 200;
    
    }else if (streak === 6) {
        streakPopup();
        storeHighestStreak();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +250 bonus points';
        points += 250;
    
    }else if (streak === 7) {
        streakPopup();
        storeHighestStreak();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +300 bonus  points';
        points += 300;
    
    }else if (streak === 8) {
        streakPopup();
        storeHighestStreak();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +350 bonus points';
        points += 350;

    }else if (streak === 9) {
        streakPopup();
        storeHighestStreak();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +400 bonus points';
        points += 400;

    }else if (streak === 10) {
        streakPopup();
        storeHighestStreak();
        document.getElementById("streakdesc").innerHTML = '<i class="fa-solid fa-fire neonmalicious"></i> +600 bonus points';
        points += 600;
    }
    
    document.getElementById("pointnumber").textContent = points;
}

function storeHighestStreak(){
    if (streak > higheststreak) {
        higheststreak = streak;
      }
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

    document.getElementById("scoreNo").innerHTML = points;
    document.getElementById("highestStreakNo").innerHTML = higheststreak;
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
        //if(answered_questions[index].usersanswer == "malicious"){
        if(answered_questions[index].category == answered_questions[index].usersanswer){
            header.innerHTML = "<b>Q" + qnum + ".</b>" + " You answered correct.";
            qnum+=1;
        }
        else{
            header.innerHTML = "<b>Q"+ qnum + ".</b>" + " You answered incorrect.";
            qnum+=1;
        }
        /////////////////

        const body = document.createElement("div");
        body.classList.add("card-body");

        const email = document.createElement("h5");
        email.classList.add("card-title");

        // if(answered_questions[index].category == 'malicious'){
        //     email.classList.add("neonlegitimate");
        // }
        // else if(answered_questions[index].category == 'legitimate'){
        //     email.classList.add("neonlegitimate");
        // }

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

    // hide streak notification
    document.getElementById("streakdesc").classList.remove("tracking-in-expand-fwd");
    document.getElementById("streakdesc").style.display = "none";

    // hide results
    document.getElementById("resultsDiv").style.display = "none";

    // display elements again
    document.getElementById("monitor1").style.display = "block";
    document.getElementById("btnStartGame").style.display = "block";
    document.getElementById("Title").style.display = "block";
    document.getElementById("gamedescription").style.display = "block";

    document.getElementById("introlist").style.display = "block";
    document.getElementById("briefing").style.display = "block";
    document.getElementById("userinputcontainer").style.display = "block";

    document.getElementById("scorebox").style.display = "block";
}

function btnMaliciousClick(){

    // store correct answer
    const correctanswer = randomized_emaillist[questionnum].category;
    
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
        //console.log(answered_questions);


        // changes the circle representing the current question to green.
        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "green";

        // move to next question
        questionnum++;
        showQuestion();
        checkStreak();

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
        
        // changes the circle representing the current question to red.
        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "red";

        // move to next question
        questionnum++;
        showQuestion();

    }

  }

  function btnLegitimateClick(){

    // store correct answer
    const correctanswer = randomized_emaillist[questionnum].category;

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

        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "green";

        // move to next question
        questionnum++;
        showQuestion();

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

        let circlenumber = questionnum+1;
        document.getElementById("circle"+circlenumber).style.backgroundColor = "red";

        // move to next question
        questionnum++;
        showQuestion();
        
    }

  }
