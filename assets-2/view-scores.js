const initials = document.querySelector("#initials");
const saveButton = document.querySelector("#save-button");
const scoreTitle = document.querySelector("#score-title");
const mostRecentScore = document.querySelector("#mostRecentScore");

const scoresList = document.querySelector("#scoresList");

//const scores = JSON.parsel (localStorage.getItem("")) 

const score = window.document (localStorage.getItem(score));

saveButton.addEventListener("click", setOwner);

function setOwner(){
    const owner = initials.input;
    recordingScores();
}


savedHighScore = e => {
    e.preventDefault()

    owner.push(score)
    console.log("This is my score " + mostRecentScore + "I am " + initials);

    localStorage.setItem("highscores", JSON.stringify(highScores));

    function recordingScores() {
        scoresList.innerHTML = owner, score;
        localStorage.setItem("name "+ owner, score);
        console.log("name "+ owner, score);
    }


}

