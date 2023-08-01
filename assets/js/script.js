// put variables here
var opener = document.querySelector(".opener")
var startBtn = document.querySelector(".startBtn")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var question = document.querySelector(".question")
var answerUl = document.querySelector(".answerUl")
var endGame = document.querySelector(".endGame")
endGame.style.display = "none"
var scoreValue = document.querySelector(".scoreValue")
var initials = document.querySelector(".initials")
var submitBtn = document.querySelector(".submitBtn")
var score = 0;
var index = 0;
var timerEl = document.querySelector(".timerEl");
var secondsLeft = 75;
var gameOver = false;

//// create function for countdown timer
function countDown() {
    // create var and if statements for what happens when you complete quiz before timer
    var timerInterval = setInterval(function () {
        secondsLeft--;
        // create message that appears if time runs out "Time's Up!"
        timerEl.textContent = secondsLeft

    if (secondsLeft === 0) {
        // Stops execution of action at set interval
        // clearInterval(timerInterval);
        if (index !== 4) {
            alert("Time's Up!");
        }
        // add endQuiz() after alert for what happens if you do not complete quiz within 75seconds
        endQuiz();
    }
    
    if(gameOver) {
        clearInterval(timerInterval);
        }   
    }, 1000);
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
        correct: "4. console.log"
    },
]

console.log(quizQuestions.length)

function startQuiz(index) {
    if (index === 0) {
        countDown();
    }
    answerUl.innerHTML = ""
    question.innerHTML = quizQuestions[index].question;
    var answerSet = quizQuestions[index].choices
    answerSet.forEach(function (i) {
        var answerChoice = document.createElement("li");
        answerChoice.innerHTML = i;
        answerUl.append(answerChoice)
        answerChoice.addEventListener("click", function () {
            if (answerChoice.innerHTML === quizQuestions[index].correct) {
                score = score + 20
                console.log(score)
            } else {
                secondsLeft = secondsLeft - 10
            }
            index++
            if (index === quizQuestions.length) {
                index = 0
                endQuiz()
            } else {
                startQuiz(index)
            }
        })
    })
}

var scoreHistory = JSON.parse(localStorage.getItem("scores")) || []

function endQuiz() {
    quiz.style.display = "none"
    endGame.style.display = "block"
    scoreValue.innerHTML = "You got a score of: " + score
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault()
        var initialsValue = initials.value
        var playerObj = {
            initial: initialsValue,
            score: score
        }
        scoreHistory.push(playerObj)
        localStorage.setItem("scores", JSON.stringify(scoreHistory))
    })
    gameOver = true;
}

// addEventListener for start quiz button
startBtn.addEventListener("click", function (event) {
    event.preventDefault()
    opener.style.display = "none"
    quiz.style.display = "block"
    startQuiz(index)
});
