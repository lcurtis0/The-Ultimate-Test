// set some selectors to access those elements 

// initalize some variables
// randomized answers for each question ie a can't always be the right answer for one question
// or just have random ordered questions
// timer - setinterval and subtract from
// how does the quiz start

function beginQuiz() {

    console.log ("Quiz has begun");
    var randomNumber = Math.floor (Math.random() * questionSet.length);

    randomQuestion = questionSet[randomNumber];
    event.preventDefault();


// how does the quiz start

// pick a question - from array

// (maybe) have a set of variables at random know which matches with question 

console.log(randomQuestion);
questionEL.textContent = (randomQuestion);
 for (i=0; i < questionSet.length; i++){



 }


}

startEl.addEventListener ("click", beginQuiz);
