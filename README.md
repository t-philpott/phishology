# Phishology: A Web Application For Phishing Awareness and Training
![banner](https://github.com/t-philpott/phishology/assets/73110483/3faea4bb-8384-44c5-9a3c-e6e9ed0f1525)

Phishology is an education web application that aims to improve the user's awareness against the growing threat of phishing attacks by creating an engaging and interactive training platform.

The application consists of two sections:
1.   The Phishology Game
     - The user will be shown 10 emails in a random order, and then they must decide whether each email is malicious or legitimate by analysing the features of each email. Additionally, the user will be provided with score and answer streaks as feedback through the game to motivate the training. Additionally, the user will be provided with results after they finish training so they can reflect on their decisions and reinforce their knowledge.

2.   Knowledge Base
     - The knowledge base page is where the user is able to read additional information about phishing, such as the basics of how to identify a phishing email. 

## Instructions

1.   Running the application
     - To run the application, the user must navigate into the /PhishologyGame directory, and run the 'app.py' file to start the flask server.
     - Once the flask server is running, navigate to the URL in a browser: http://localhost:5000/
     - Now the application should be open

2. Playing Phishology
     - Upon opening the application, the user will be greeted with instructions on how to play.
     - Once the user has read the instructions, they must click 'Start Game', and the first email will be displayed.
     - The user must analyse each email, which includes:
       - The email header (e.g. sender's email, subject)
       - The email content (e.g. links, grammar, attachments)
     - Once the user has made a decision, they can click either the 'Malicious' button, or 'Legitimate' button. Upon clicking on one of these buttons, the game will move on to the next email.
     - The game will continue until all 10 emails have been displayed, then the user will be provided with feedback on their results, which they can then restart the game.

2. Knowledge Base
     - The user is able to access the knowledge base anytime by clicking on the 'Knowledge Base' link within the navigation bar, where they can learn additional information about phishing to reinforce their awareness.

## Supervisor

Kimberly Tam
