const gameArea = document.getElementById("game-area")
const snake = document.getElementById("snake")
const ball = document.getElementById("ball")

const moveTheSnake = (e) => {
    const isRight = e.code === "ArrowRight"
    const isUp = e.code === "ArrowUp"
    const isDown = e.code === "ArrowDown"
    const isLeft = e.code === "ArrowLeft"

    const positionDetail = snake.getBoundingClientRect()
    const yPosition = positionDetail.top + "px"
    const xPosition = positionDetail.left + "px"

    if (isRight) {
        snake.style.removeProperty("left")
        
        snake.style.animationName = "leftToRight"
        snake.style.top = yPosition
        snake.style.setProperty("--current-position", xPosition)
        snake.style.transform = "rotate(90deg)"
    }

    else if (isUp) {
        snake.style.removeProperty("top")
        snake.style.animationName = "bottomToTop"
        snake.style.left = xPosition
        snake.style.setProperty("--current-position", (window.innerHeight - positionDetail.top) + "px")
        snake.style.transform = "rotate(0deg)"
    }

}
gameArea.addEventListener('keydown', moveTheSnake)


const getRandomNumber = () => {
    const generatedRandomNumber = Math.random()
    const expectedNumber = Math.floor(generatedRandomNumber * 96)
    return expectedNumber
}

const popTheBall = () => {
    const top = getRandomNumber()
    const left = getRandomNumber()

    ball.style.top = `${top}vh`
    ball.style.left = `${left}vw`
}

popTheBall()