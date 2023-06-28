
var attempts = document.querySelector("#attempts")
var attemptsCounter = 0;
var score = document.querySelector("#score")
var timer = document.querySelector("#timer-text")
var timerCount;
var doneCounter = 0;
var feedback = document.querySelector('#feedback');
var startButton = document.querySelector('#start-button');
var questions = document.querySelector('#questions');
var answers = document.querySelector('#answers');

var questionSet = [
    {
        question: 'What day is it?',
        answers: ["Friday", "Saturday", "Sunday", "Monday"],
        correct: "Friday"
    },
    {
        question: 'What is your favorite color?',
        answers: ["orange", "blue", "yellow", "green"],
        correct: "green"
    },
    {
        question: 'What are the first three letters of the english alphabet?',
        answers: ["abc", "def", "ghi", "jkl"],
        correct: "abc"
    },
    {
        question: 'What colors are the U.S. flag?',
        answers: ["green, black, orange", "red, white, blue", "orange, yellow, green", "purple, grey, gold"],
        correct: "red, white, blue"
    }
];




function init() {
    getScore();
}

function beginQuiz() {
    timerCount = 100;
    startButton.disabled = true;
    startTimer()
    renderQuestions()
}

function quizDone() {
    questions[1].textContent = ("You're done with the quiz congrats!")
    startButton.disabled = false;
    doneCounter++;
    feedback.textContent = ("Here's how you did " + score + "/ 5");
}

function startTimer() {
    let timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if (timerCount <= 0) {
            clearInterval(timerInterval);
            quizDone();

        }


    }, 1000);
}

function renderAnswers(answers) {
    answers.forEach(function (element) {
        console.log(answers, element);
        // create div 
        element = document.createElement('div');
        element.innerHTML = answers.textContent;
        // add text content 




        document.getElementById(element).addEventListener("click", renderQuestions);
       
        // add event listener 

        document.getElementById("answers").appendChild(element);
        // append div to something 
    });

}

function renderQuestions() {
    for (var i = 0; i < questionSet.length; i++) {
        console.log(questions, questionSet[i]);
        questions.textContent = questionSet[i].question;
        renderAnswers(questionSet[i].answers);

        answers.addEventListener("click", function (event) {
            var response = event.answers;
            console.log(event.answers);
            if (answers === correct) {
                score++;
                feedback.textContent = ("Correct!");
                var point = response.getAttribute("data-state");
            } else {
                timerCount--;
                feedback.textContent = ("Incorrect!");
            }
        })
    }
    /* 
   console.log(questions,questionSet[0]);
  questions.textContent = questionSet[0].question;
  /* for (var i =0; i < questionSet.length; i++ ){
       response.textContent = (questions[i])
       if(response === answers[i]){
        score++;
        feedback.textContent = ("Correct!");
       } else {
        timerCount--;
        feedback.textContent = ("Incorrect!");
       }
    }*/
}
function setScore() {

    // may need for loop for the number of attempts ot attempts++; or create a variable for attempts counted

    attempts.textContent = score;
    localStorage.setItem("attempt", score);
    console.log("attempt" + attemptsCounter + ": " + score)
}

function getScore() {
    var storedScore = localStorage.getItem("attempt");
    if (storedScore === null) {
        score = 0;
    } else {
        score = storedScore;
    }
    score.textContent = storedScore;
}

// skipped to line 172 in word fame reference 

startButton.addEventListener("click", beginQuiz);


init();

var resetButton = document.querySelector(".reset-button");

function resetQuiz() {
    // Resets win and loss counts
    scoreCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setScore()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetQuiz);
