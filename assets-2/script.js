

var questionEL = document.querySelector("#question");
var answersEl = document.querySelector('#answers')
var startEl = document.querySelector("#start-quiz");
var current = 0;

// basic html elements to interact with

//button for which starts the quiz (likely a large function)

// score - to keep track of right and wrong answers
var correctCount = 0;
var wrongCount = 0;

allQuestions = {

  'What day is it?' : ["Friday", "Saturday", "Sunday", "Monday", 1],
  'What is your favorite color?' : ["orange", "blue", "yellow", "green", 4],
  'What are the first three letters of the english alphabet?' : ["abc", "efg", "hij", "klm", 1],
  'What colors are the U.S. flag?': ["green, black, orange", "red, white, blue", "orange, yellow, green", "purple, grey, gold"]

}

function beginQuiz(curr) {
  console.log ("Quiz has begun");
  var question = Object.keys(allQuestions)[curr];

  questionEL.innerHTML = '';
  questionEl.innerHTML = question; 

}

function loadanswers(){

  var answers = allQuestions[Object.keys(allQuestions)[curr]];

  answerArea.innerHTML = '';

}


//for loop to create answers according to that number of answers in array
for (var i = 0; i < answers.length; i++){
  // Each answer is created into created <div> element
  var createDiv = document.createElement('div'),
    text = document.createTextNode(answers[i]);
    //the append child sends 
    createDiv.appendChild(text);      
    createDiv.addEventListener("click", checkAnswer(i, answers));
    
    
    answerArea.appendChild(createDiv);
  }

  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
    








startEl.addEventListener ("click", beginQuiz);


