const questions = [
    {
      question: 'What day is it?',
      answers: [
       { choice: "Friday", correct: true},
       { choice: "Saturday", correct: false},   
       { choice: "Sunday", correct: false},
       { choice: "Monday", correct: false}
      ]
    },
    {
      question: 'What is your favorite color?',
      answers: [
       { choice: "orange", correct: false},
       { choice: "blue", correct: false},   
       { choice: "yellow", correct: false},
       { choice: "green", correct: true}
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
      question: 'What are the first three letters of the english alphabet?',
      answers: [
       { choice: "abc", correct: true},
       { choice: "def", correct: false},   
       { choice: "ghi", correct: false},
       { choice: "jkl", correct: false}
      ]
    },
  ];
  // Many versions of the designating questions and answers have been made
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.querySelector("#Next-id");
  const feedback = document.querySelector("#feedback");

  var timer = document.querySelector("#timer");
  var timerCount = 100;
  var timerInterval;

  var attempts = 0;
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    timerCount = 100;
    nextButton.innerHTML = "Next question >";
    startTimer();
    showQuestion();

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
    let currentQuestion = questions[currentQuestionIndex];
    // The the question array will be played out number of current questions index
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    // Numbering questions can be removed. Cannot be used as attempts for local storage
  
  
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
    nextButton.style.display = "none";
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
      feedback.innerHTML="Correct!";
      score++;
    } else {
      feedback.innerHTML="Incorrect...";
      timerCount--;
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            feedback.innerHTML ="correct";
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
    clearInterval(timerInterval);
    questionElement.innerHTML = "Congrats on completing the quiz. Your score is " + score + "/5";
    nextButton.style.display ="block";
    nextButton.innerHTML = "Take Quiz Again";

  }
  
  // Below is the origin of the start quiz button
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      //since the next button acts as the start quiz button it must know if there are questions avaliable. 
      //If they are avaliable then it is true 
      handleNextButton();
    } else {
      startQuiz();
    }
  })
  
  startQuiz();
  
  
  
  /*
  {
    question: 'What colors are the U.S. flag?',
    answers: ["green, black, orange", "red, white, blue", "orange, yellow, green", "purple, grey, gold"],
    correct: "red, white, blue"
  }
  */