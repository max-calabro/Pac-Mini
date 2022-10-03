/*
 *
 * Glabal constants and variables
 */
//Dimensions of the sprite sheet in pixels
let spriteSheetHeight = 248 //rows
let spriteSheetWidth = 680 //Columns

//Pac-man gets slapped on the board
const pacman = document.createElement('div')
pacman.className = 'pac-man'
document.querySelector('.game-board').append(pacman)
pacman.style.backgroundImage = 'url("Arcade - Pac-Man - General Sprites.png")'

//Gameboard sprite position
let board = document.querySelector('.game-board')
board.style.backgroundPositionX = '-226px'

//Dots
const dot = document.createElement('div')
dot.className = 'dots'
document.querySelector('.game-board').append(dot)
//Dot starting position
dot.style.top = '80px'
dot.style.left = '105px'

//Scoreboard
let score = 0
document.querySelector('.scoreboard').innerHTML = score

//Where the player will be on the gameboard in pixels
let playerCoordinateY = 0
let playerCoordinateX = 0

//The coordinates of the sprite sheet to target a starting point for a specific frames. 208x000 is base pose Pac-man
let spriteSheetX = '208px'
let spriteSheetY = '000px'

//What sprite pose Pac-man is currently in. 0/2 are base pose, 1 is wide mouth, and 3 is closed mouth.
let whatPacmanFrame = 0

//Static starting Pac-man
pacman.style.backgroundPositionX = spriteSheetX
pacman.style.backgroundPositionY = spriteSheetY

//Pac-man's movement up(-top), down(+top), right(+left), left(-left)
let moveUp = '180px'
let moveDown = '180px'
let moveRight = '105px'
let moveLeft = '105px'
//More movement variables. Timer, turns off setTimeout inside the movement, direction, tracks what direction Pac-man is moving.
let timer = 0
let direction = ''
let pixel = 0
let moveWhere = ''
let moveOpposite = ''

//Start Pac-man in the center
pacman.style.top = '180px'
pacman.style.left = '105px'

//Array of dots
let dotArray = []

/*
 *
 * Functions
 */
//Display dots in dotArray
const displayDots = () => {
  for (let i = 0; i < dotArray.length; i++) {
    let currentDot = document.createElement('div')
    currentDot.className = 'dots'
    currentDot.id = dotArray[i].id
    document.querySelector('.game-board').append(currentDot)
    currentDot.style.top = dotArray[i].topPosition + 'px'
    currentDot.style.left = dotArray[i].leftPosition + 'px'
    console.log(currentDot)
  }
}
//create dots and fill array
const createDots = () => {
  for (let i = 0; i < 2; i++) {
    let arrDot = {}
    arrDot.id = 'dot' + i
    arrDot.topPosition = parseInt(dot.style.top.slice(0, 3)) + i * 10
    arrDot.leftPosition = parseInt(dot.style.left.slice(0, 3)) + i * 10
    dotArray.push(arrDot)
  }
  displayDots()
  console.log(dotArray)
}
createDots()

const pacmanEats = () => {
  //When whatPacmanFrame is 0 or 2, base pose should display
  //When whatPacmanFrame is 1, wide pose should display
  //When whatPacmanFrame is 3, closed pose should display
  if (whatPacmanFrame === 0 || whatPacmanFrame === 3) {
    //console.log(`started pacman eats 0 or 2`)
    //Put only first 3 characters of spriteSheetX & Y into themself
    //Turn those variables into intagers
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

//Remove a dot when Pac-man touches it
const removeDot = () => {
  console.log(
    `Pac-man's top is ${pacman.style.top} and left is ${pacman.style.left}`
  )
  dot.remove()
  score += 100
  document.querySelector('.scoreboard').innerHTML = score
}

const pacmanChangeDirection = (keyPressed) => {
  if (keyPressed.key === 't') {
    console.log(
      `Pac-man's top is ${pacman.style.top} and left is ${pacman.style.left}`
    )
    clearTimeout(timer)
  }
  /* This is tied to pacmanMovement. Will hopefully be dry eventually
  if (
    keyPressed.key === 'w' ||
    keyPressed.key === 'ArrowUp' ||
    keyPressed.key === 's' ||
    keyPressed.key === 'ArrowDown' ||
    keyPressed.key === 'd' ||
    keyPressed.key === 'ArrowRight' ||
    keyPressed.key === 'a' ||
    keyPressed.key === 'Arrowleft'
  ) {
    direction = keyPressed.key
    clearTimeout(timer)
    pacmanMovement(direction)
  }
  */

  if (keyPressed.key === 's' || keyPressed.key === 'ArrowDown') {
    if (direction != 'down') {
      if (parseInt(moveDown.slice(0, 3)) + 1 != 233) {
        clearTimeout(timer)
        movePacmanDown()
        //pacmanMovement(keyPressed)
      }
    }
  } else if (keyPressed.key === 'w' || keyPressed.key === 'ArrowUp') {
    if (direction != 'up') {
      if (parseInt(moveUp.slice(0, 3)) - 1 != -1) {
        clearTimeout(timer)
        movePacmanUp()
        //pacmanMovement(keyPressed)
      }
    }
  }

  if (keyPressed.key === 'd' || keyPressed.key === 'ArrowRight') {
    if (direction != 'right') {
      if (parseInt(moveRight.slice(0, 3)) + 1 != 211) {
        clearTimeout(timer)
        movePacmanRight()
        //pacmanMovement(keyPressed)
      }
    }
  } else if (keyPressed.key === 'a' || keyPressed.key === 'ArrowLeft') {
    if (direction != 'left') {
      if (parseInt(moveLeft.slice(0, 3)) - 1 != -1) {
        clearTimeout(timer)
        movePacmanLeft()
        //pacmanMovement(keyPressed)
      }
    }
  }
}

/*I was getting some strange errors. Eveything was working except w and arrow up 
const pacmanMovement = (direction) => {
  //moveWhere ex. moveDown, moveOpposite ex. moveUp
  //What direction is Pac-man moving
  //Rotate the sprite and set up moveWhere and moveOpposite
  if (direction === 'w' || direction === 'ArrowUp') {
    pacman.style.transform = 'rotate(270deg)'
    moveWhere = moveUp
    moveOpposite = moveDown
  } else if (direction === 's' || direction === 'ArrowDown') {
    pacman.style.transform = 'rotate(90deg)'
    moveWhere = moveDown
    moveOpposite = moveUp
  } else if (direction === 'd' || direction === 'ArrowRight') {
    pacman.style.transform = 'rotate(0deg)'
    moveWhere = moveRight
    moveOpposite = moveLeft
  } else if (direction === 'a' || direction === 'ArrowLeft') {
    pacman.style.transform = 'rotate(180deg)'
    moveWhere = moveLeft
    moveOpposite = moveRight
  }

  //Copy only first 3 characters and turn those variables into intagers
  moveWhere = parseInt(moveWhere.slice(0, 3))
  moveOpposite = parseInt(moveOpposite.slice(0, 3))

  //Amount of pixels to change by
  if (
    direction === 'w' ||
    direction === 'ArrowUp' ||
    direction === 'a' ||
    direction === 'ArrowLeft'
  ) {
    pixel = -1
    console.log('this works')
  } else if (
    direction === 'd' ||
    direction === 'ArrowRight' ||
    direction === 's' ||
    direction === 'ArrowDown'
  ) {
    pixel = 1
  }

  //Apply change in pixels
  moveWhere += pixel
  moveOpposite += pixel

  //Change back to string with 'px' attached
  moveWhere = moveWhere.toString() + 'px'
  moveOpposite = moveOpposite.toString() + 'px'

  //Where to apply the change
  if (
    direction === 'w' ||
    direction === 'ArrowUp' ||
    direction === 's' ||
    direction === 'ArrowDown'
  ) {
    pacman.style.top = moveWhere
  } else if (
    direction === 'd' ||
    direction === 'ArrowRight' ||
    direction === 'a' ||
    direction === 'ArrowLeft'
  ) {
    pacman.style.left = moveWhere
  }

  //Make him move!
  timer = setTimeout(pacmanMovement, 10)
}
*/

const movePacmanDown = () => {
  if (
    pacman.style.top === '80px' &&
    parseInt(pacman.style.left.slice(0, 3)) > 89 &&
    parseInt(pacman.style.left.slice(0, 3)) < 109
  ) {
    removeDot()
  }
  direction = 'down'
  pacman.style.transform = 'rotate(90deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveDown = parseInt(moveDown.slice(0, 3))
  moveUp = parseInt(moveUp.slice(0, 3))
  //console.log(moveDown)
  if (moveDown + 1 != 233) {
    //Move down one soon to be pixel
    moveDown += 1
    moveUp += 1
  }
  //Change back to string with 'px' attached
  moveDown = moveDown.toString() + 'px'
  moveUp = moveUp.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveDown

  //Make him move!
  timer = setTimeout(movePacmanDown, 30)
}

const movePacmanUp = () => {
  if (
    pacman.style.top === '100px' &&
    parseInt(pacman.style.left.slice(0, 3)) > 89 &&
    parseInt(pacman.style.left.slice(0, 3)) < 109
  ) {
    removeDot()
  }
  direction = 'up'
  pacman.style.transform = 'rotate(270deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveUp = parseInt(moveUp.slice(0, 3))
  moveDown = parseInt(moveDown.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveUp - 1 != -1) {
    moveUp -= 1
    moveDown -= 1
  }
  //Change back to string with 'px' attached
  moveUp = moveUp.toString() + 'px'
  moveDown = moveDown.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveUp

  //Make him move!
  timer = setTimeout(movePacmanUp, 30)
}

const movePacmanLeft = () => {
  if (
    pacman.style.left === '109px' &&
    parseInt(pacman.style.top.slice(0, 3)) > 80 &&
    parseInt(pacman.style.top.slice(0, 3)) < 100
  ) {
    removeDot()
  }
  direction = 'left'
  pacman.style.transform = 'rotate(180deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveLeft = parseInt(moveLeft.slice(0, 3))
  moveRight = parseInt(moveRight.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveLeft - 1 != -1) {
    moveLeft -= 1
    moveRight -= 1
  }
  //Change back to string with 'px' attached
  moveLeft = moveLeft.toString() + 'px'
  moveRight = moveRight.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveLeft

  //Make him move!
  timer = setTimeout(movePacmanLeft, 30)
}

const movePacmanRight = () => {
  if (
    pacman.style.left === '89px' &&
    parseInt(pacman.style.top.slice(0, 3)) > 80 &&
    parseInt(pacman.style.top.slice(0, 3)) < 100
  ) {
    removeDot()
  }
  direction = 'right'
  pacman.style.transform = 'rotate(0deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveRight = parseInt(moveRight.slice(0, 3))
  moveLeft = parseInt(moveLeft.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveRight + 1 != 211) {
    moveRight += 1
    moveLeft += 1
  }
  //Change back to string with 'px' attached
  moveRight = moveRight.toString() + 'px'
  moveLeft = moveLeft.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveRight

  //Make him move!
  timer = setTimeout(movePacmanRight, 30)
}

/*
 *
 * Listeners
 */

//Where he going?
document.addEventListener('keydown', (keyPressed) => {
  pacmanChangeDirection(keyPressed)
  //pacmanChangeDirection(keyPressed)
})
