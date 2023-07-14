// put variables here

// create function for countdown timer
function countDown() {
    // create var and if statements for what happens when you complete quiz before timer
    // create else if/else statments for what happens if you do not complete quiz within 75seconds
        // create message that appears if time runs out "Time's Up!"
};

// create function to subtract time when answer selected is wrong
function subractTime() {

};

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        correct: "3. Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parentheses", "4. Square Brackets"],
        correct: "3. Parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["1. Numbers and Strings", "2. Other Arrays", "3. Booleans", "4. All of the above"],
        correct: "4. All of the above"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        correct: "3. Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. for loops", "4. console.log"],
        correct: "3. console.log"
    },
]

function generateScore() {

   
};

// addEventListener for start quiz button
startButton.addEventListener("click", function(event) {
    countDown();
});

// addEventListener and/or function for selecting and logging answers?

// addEventListener and/or function for generating score?

// addEventListener and/or function for saving initials and score.