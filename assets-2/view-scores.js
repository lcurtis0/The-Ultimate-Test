const initials = document.querySelector("#initials");
const saveButton = document.querySelector("#save-button");
const scoreTitle = document.querySelector("#score-title");
const mostRecentScore = document.querySelector("#mostRecentScore");

const highScores = JSON.parsel (localStorage.getItem("highScores")) || []

const Max_high =5;

scoreTitle.innerHTML = mostRecentScore

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value
})

savedHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    console.log("This is my score " + mostRecentScore + "I am " + initials)

    localStorage.setItem("highscores", JSON.stringify(highScores))
    window


}

