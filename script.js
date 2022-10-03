/*
 *
 * Glabal constants and variables
 */
const pacman = document.createElement('div')
pacman.className = 'pac-man'
document.querySelector('.game-board').append(pacman)
pacman.style.backgroundImage = 'url("Arcade - Pac-Man - General Sprites.png")'

//Where the player will be on the gameboard
let playerCoordinateY = 0
let playerCoordinateX = 0

//The coordinates of the sprite sheet to target a starting point for a specific frames
let spriteSheetX = '208px'
let spriteSheetY = '000px'

//How many pixel are needed for move to display a specific frame
let pacmanHeight = '16px'
let pacmanWidth = '16px'
pacman.style.height = pacmanHeight
pacman.style.width = pacmanWidth

//Dimensions of the sprite sheet
let spriteSheetHeight = 248 //rows
let spriteSheetWidth = 680 //Columns

//What sprite pose Pacman is currently in
let whatPacmanFrame = 0

//static starting pac-man
pacman.style.backgroundPositionX = spriteSheetX
pacman.style.backgroundPositionY = spriteSheetY

//Pac-mans movement up(-top), down(+top), right(+left), left(-left)
let moveUp = '000px'
let moveDown = '000px'
let moveRight = '000px'
let moveLeft = '000px'
let timer = 0
let direction = ''

/*
 *
 * Functions
 */
const pacmanEats = () => {
  //When whatPacmanFrame is 0 or 2, normal pacman should display
  //When whatPacmanFrame is 1, wide pacman should display
  //When whatPacmanFrame is 3, closed pacman should display
  if (whatPacmanFrame === 0 || whatPacmanFrame === 3) {
    //console.log(`started pacman eats 0 or 2`)
    //put only first 3 characters of spriteSheetX & Y into themself
    //turn those variables into intagers
    spriteSheetX = parseInt(spriteSheetX.slice(0, 3))
    spriteSheetY = parseInt(spriteSheetY.slice(0, 3))
    //do math on those variables
    spriteSheetX += 16
    spriteSheetY += 0
    //change back into string
    //put back into respective spriteSheet with 'px' attached
    spriteSheetX = spriteSheetX.toString() + 'px'
    spriteSheetY = spriteSheetY.toString() + 'px'
    //set the background image to the new position
    pacman.style.backgroundPositionX = spriteSheetX
    pacman.style.backgroundPositionY = spriteSheetY
    if (whatPacmanFrame === 0) {
      whatPacmanFrame = 1
    } else if (whatPacmanFrame === 3) {
      whatPacmanFrame = 0
    }
  } else if (whatPacmanFrame === 1 || whatPacmanFrame === 2) {
    //console.log(`started pacman eats 1 or 3`)
    //put first 3 characters of spriteSheetX & Y into new variables
    //turn those variables into intagers
    spriteSheetX = parseInt(spriteSheetX.slice(0, 3))
    spriteSheetY = parseInt(spriteSheetY.slice(0, 3))
    //do math on those variables
    spriteSheetX -= 16
    spriteSheetY -= 0
    //change back into string
    //put back into respective spriteSheet with 'px' attached
    spriteSheetX = spriteSheetX.toString() + 'px'
    spriteSheetY = spriteSheetY.toString() + 'px'
    //set the background image to the new position
    pacman.style.backgroundPositionX = spriteSheetX
    pacman.style.backgroundPositionY = spriteSheetY
    if (whatPacmanFrame === 1) {
      whatPacmanFrame = 2
    } else if (whatPacmanFrame === 2) {
      whatPacmanFrame = 3
    }
  }
  //console.log(`finished pacmanEats. We are on frame ${whatPacmanFrame}`)
  timerEat = setTimeout(pacmanEats, 100)
}

//pacmanEats()

const pacmanChangeDirection = (keyPressed) => {
  if (keyPressed.key === 's' || keyPressed.key === 'ArrowDown') {
    if (direction != 'down') {
      clearTimeout(timer)
      movePacmanDown()
    }
  } else if (keyPressed.key === 'w' || keyPressed.key === 'ArrowUp') {
    if (direction != 'up') {
      clearTimeout(timer)
      movePacmanUp()
    }
  } else if (keyPressed.key === 'd' || keyPressed.key === 'ArrowRight') {
    if (direction != 'right') {
      clearTimeout(timer)
      movePacmanRight()
    }
  } else if (keyPressed.key === 'a' || keyPressed.key === 'ArrowLeft') {
    if (direction != 'left') {
      clearTimeout(timer)
      movePacmanLeft()
    }
  }
}

const movePacmanDown = () => {
  direction = 'down'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveDown = parseInt(moveDown.slice(0, 3))
  moveUp = parseInt(moveUp.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  moveDown += 1
  moveUp += 1
  //Change back to string with 'px' attached
  moveDown = moveDown.toString() + 'px'
  moveUp = moveUp.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveDown

  //Make him move!
  timer = setTimeout(movePacmanDown, 10)
}

const movePacmanUp = () => {
  direction = 'up'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveUp = parseInt(moveUp.slice(0, 3))
  moveDown = parseInt(moveDown.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  moveUp -= 1
  moveDown -= 1
  //Change back to string with 'px' attached
  moveUp = moveUp.toString() + 'px'
  moveDown = moveDown.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveUp

  //Make him move!
  timer = setTimeout(movePacmanUp, 10)
}

const movePacmanLeft = () => {
  direction = 'left'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveLeft = parseInt(moveLeft.slice(0, 3))
  moveRight = parseInt(moveRight.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  moveLeft -= 1
  moveRight -= 1
  //Change back to string with 'px' attached
  moveLeft = moveLeft.toString() + 'px'
  moveRight = moveRight.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveLeft

  //Make him move!
  timer = setTimeout(movePacmanLeft, 10)
}

const movePacmanRight = () => {
  direction = 'right'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveRight = parseInt(moveRight.slice(0, 3))
  moveLeft = parseInt(moveLeft.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  moveRight += 1
  moveLeft += 1
  //Change back to string with 'px' attached
  moveRight = moveRight.toString() + 'px'
  moveLeft = moveLeft.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveRight

  //Make him move!
  timer = setTimeout(movePacmanRight, 10)
}

/*
 *
 * Listeners
 */

//Where he going?
document.addEventListener('keydown', (keyPressed) => {
  pacmanChangeDirection(keyPressed)
})
