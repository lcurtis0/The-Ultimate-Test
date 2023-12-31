const questions = [
    {
      question: 'Which is a Winter month?',
      answers: [
       { choice: "December", correct: true},
       { choice: "March", correct: false},   
       { choice: "June", correct: false},
       { choice: "August", correct: false}
      ]
    },
    {
      question: 'What color is the sky during the day?',
      answers: [
       { choice: "purple", correct: false},
       { choice: "blue", correct: true},   
       { choice: "yellow", correct: false},
       { choice: "green", correct: false}
      ]
    },
    {
      question: 'What are the first three letters of the english alphabet?',
      answers: [
       { choice: "abc", correct: true},
       { choice: "def", correct: false},   
       { choice: "ghi", correct: false},
       { choice: "jkl", correct: false}
      ]
    },
    {
      question: 'what is 12 + 6?',
      answers: [
       { choice: "17", correct: false},
       { choice: "14", correct: false},   
       { choice: "15", correct: false},
       { choice: "18", correct: true}
      ]
    },
    {
        question: 'what do you do at a stop sign?',
        answers: [
         { choice: "Turn right", correct: false},
         { choice: "Go", correct: false},   
         { choice: "Stop", correct: false},
         { choice: "Yeild", correct: true}
        ]
      },
  ];
  // Many versions of the designating questions and answers have been made
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.querySelector("#Next-id");
  const quizContainer = document.querySelector(".quiz");

  var startButton = document.querySelector("#start-button");


  var timer = document.querySelector("#timer");
  var timerCount = 120;
  var timerInterval;

  var attempts = 0;
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  let scoresarray = []; 

/*
  for the timer issue, try changing < to == on line 86

  if that doesn't work, feel free to reach out again with a new ticket

  I will close this question out now.
  Once I close the question, please let us know how I did by leaving feedback.

  happy coding!
*/


  startButton.addEventListener("click", startQuiz);
  


  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timerCount = 120;
    nextButton.innerHTML = "Next question >";
    showQuestion();
    startTimer();

  }

  function startTimer() {
    let timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if (timerCount <= 0) {
            clearInterval(timerInterval);
            showScore();

        }


    }, 1000);
}

  
  function showQuestion (){
    resetState();
    startButton.style.display = "none";
    let currentQuestion = questions[currentQuestionIndex];
    // The the question array will be played out number of current questions index
    questionElement.innerHTML = currentQuestion.question;
   // This prints the question into the the question element div
  
  
    currentQuestion.answers.forEach(answer => {
      // The variable button has to be added for each time an answer set has to be made
      const button = document.createElement("button");
      // Each answer will have to be added into the the HTML in each button
      button.innerHTML = answer.choice;
      button.classList.add("btn");
      // answerButton is the parent element thus button, when put in, must be apended to parent location 
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
        // answers is an array that holds an object for correct, thus answer.correct can recognized in if statement
      }
      //On click this plays the selectAnswer function
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild)
      // Major credit to GreatStack on YouTube for removeChild method to clear page
    }
    // The purpose of this function to clear and set new answers
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      score++;
      //score is added when correct
    } else {
      timerCount = timerCount - 10 ;
      //
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            nextButton.style.display ="block";
        }
    });
  }
  
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore(){
    resetState();
    recordAttempts();
    timerCount = 0;
    questionElement.innerHTML = "Congrats on completing the quiz. Your score is " + score + "/5";
    nextButton.style.display ="none";
    startButton.style.display ="block";
  }
    function recordAttempts(){
        attempts++;
        console.log("attempts: " + attempts + " = " + score + "/5");
        scoresarray.push(score);

        localStorage.setItem("scoreskey", scoresarray);
    }


  
  // Below is the origin of the start quiz button
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      //since the next button acts as the start quiz button it must know if there are questions avaliable. 
      //If they are avaliable then it is true 
      handleNextButton();
    } 
  });
  

  startQuiz();

