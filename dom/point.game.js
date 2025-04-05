let score = 0
const options = [1, 2, 3, "Exit", 4, 5, 6]

function addPoints(option) {
    const scoreElement = document.getElementById('currentScore')
    const totalScoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const prevScore = +scoreElement.innerText
    if (option === "Exit") {
        if (+highScoreElement.innerText < scoreElement.innerText) {
            highScoreElement.innerText = scoreElement.innerText
        }
        totalScoreElement.innerText = +totalScoreElement.innerText + prevScore
        scoreElement.innerText = 0;

    } else {
        scoreElement.innerText = option + prevScore
    }
}
function getOption() {
    let randomNumber = Math.random()
    randomNumber = randomNumber * 6;
    randomNumber = Math.round(randomNumber)

    const option = options[randomNumber]
    return option
}

function showPoint() {
    const option = getOption()
    addPoints(option)

    const diceElement = document.getElementById('dice')
    diceElement.innerText = option
}
