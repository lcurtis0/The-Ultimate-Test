const initials = document.querySelector("#initials");
const saveButton = document.querySelector("#save-button");
const scoreTitle = document.querySelector("#score-title");
const mostRecentScore = document.querySelector("#mostRecentScore");

const scoresList = document.querySelector("#scoresList");

//const scores = JSON.parsel (localStorage.getItem("")) 

const score = 5;

scoreTitle.innerHTML = mostRecentScore

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value
    recordingScores()
})

savedHighScore = e => {
    e.preventDefault()

    highScores.push(score)
    console.log("This is my score " + mostRecentScore + "I am " + initials);

    localStorage.setItem("highscores", JSON.stringify(highScores));

    function recordingScores() {
        scoresList.innerHTML = initials, score;
        localStorage.setItem("name "+initials, score);
        console.log("name "+initials, score);
    }


}

