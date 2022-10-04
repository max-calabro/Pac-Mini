/*
 *
 * Glabal constants and variables
 */
//Game board, what on it. Walls are 1, dots are 2, empty squares are o, power dots are 3, ghost entrnce is 4
let gameBoard = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2,
  1, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1,
  1, 2, 1, 1, 1, 1, 3, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
  1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1,
  1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2,
  2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1,
  1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3, 2, 2, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 1, 1, 1, 1, 2,
  1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1,
  1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2,
  2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

//Dimensions of the sprite sheet in pixels
let spriteSheetHeight = 496 //rows
let spriteSheetWidth = 1360 //Columns

//Pac-man gets slapped on the board
const pacman = document.createElement('div')
pacman.className = 'pac-man'
document.querySelector('.game-board').prepend(pacman)
//pacman.style.backgroundImage = 'url("Pac-Man - Transparent.png")'

//Gameboard sprite position
let board = document.querySelector('.game-board')
board.style.backgroundPositionX = '0px'

//Dot
const dot = document.createElement('div')
/*
dot.className = 'dots'
document.querySelector('.game-board').append(dot)
*/
//Dot starting position
dot.style.top = '160px'
dot.style.left = '210px'

//Scoreboard
let score = 0
document.querySelector('.scoreboard').innerHTML = score

//Where the player will be on the gameboard in pixels
let playerCoordinateY = 0
let playerCoordinateX = 0

//The coordinates of the sprite sheet to target a starting point for a specific frames. 208x000 is base pose Pac-man
let spriteSheetX = '416px'
let spriteSheetY = '000px'

//What sprite pose Pac-man is currently in. 0/2 are base pose, 1 is wide mouth, and 3 is closed mouth.
let whatPacmanFrame = 0

//Static starting Pac-man
pacman.style.backgroundPositionX = spriteSheetX
pacman.style.backgroundPositionY = spriteSheetY

//Pac-man's movement up(-top), down(+top), right(+left), left(-left)
let moveUp = '361px'
let moveDown = '361px'
let moveRight = '228px'
let moveLeft = '228px'
//More movement variables. Timer, turns off setTimeout inside the movement, direction, tracks what direction Pac-man is moving.
let timer = 0
let direction = ''
let pixel = 0
let moveWhere = ''
let moveOpposite = ''

//Start Pac-man in the center
pacman.style.top = '368px'
pacman.style.left = '228px'

//Array of dots
let dotArray = []

let walls = false
let dots = false

let allGameSquares = document.querySelectorAll('.game-board div')
/*
 *
 * Functions
 */
const giveRowAndColumn = (row, column, position) => {
  allGameSquares[position].dataset.row = row
  allGameSquares[position].dataset.column = column
}

const fillStartingBoard = () => {
  for (let i = 0; i < 31; i++) {
    for (let j = 0; j < 28; j++) {
      if (i === 0 && j === 0) {
        console.log(`this is pmans square! i is ${i} and j is ${j}`)
      } else {
        let positionInGameBoard = i * 28 + j
        giveRowAndColumn(i, j, positionInGameBoard)
        switch (gameBoard[positionInGameBoard]) {
          case 0:
            allGameSquares[positionInGameBoard].className = 'empty'
            break
          case 1:
            allGameSquares[positionInGameBoard].className = 'wall'
            break
          case 2:
            allGameSquares[positionInGameBoard].className = 'dot'
            break
          case 3:
            allGameSquares[positionInGameBoard].className = 'power'
            break
          case 4:
            allGameSquares[positionInGameBoard].className = 'door'
            break
        }
      }
    }
  }
}

fillStartingBoard()

const detectWalls = (whatDirection) => {
  //console.log(`pmans top ${pacman.style.top} and his left ${pacman.style.left}`)
  //target row=16 (256px) column=13 (208px)
  let nonoZone = allGameSquares[16 * 28 + 13]
  //translate row(top) and column(left) numbers to pixels (multiply by 16)
  //console.log(nonoZone.dataset.row * 16)
  //console.log(nonoZone.dataset.column * 16)
  //pacmanLOrT and pacmanTOrL are each either left or top of pacman
  //rowOrColumn and columnOrRow are each either row or column of square ahead of pacman
  //addOrSub is either -16 or +16
  if (whatDirection === 'right') {
    let addOrSub = 16
    let pacmanLOrT = pacman.style.left
    let columnOrRow = nonoZone.dataset.column
    let pacmanTOrL = pacman.style.top
    let rowOrColumn = nonoZone.dataset.row

    if (
      parseInt(pacmanLOrT.slice(0, 3)) + addOrSub === columnOrRow * 16 &&
      parseInt(pacmanTOrL.slice(0, 3)) > rowOrColumn * 16 - 15 &&
      parseInt(pacmanTOrL.slice(0, 3)) < rowOrColumn * 16 + 15
    ) {
      console.log('detected while moving right')
      bool = true
      return
    }
  }
  bool = false
  return
}
//Detect right
/*parseInt(pacman.style.left.slice(0, 3)) + 16 ===
      nonoZone.dataset.column * 16 &&
    parseInt(pacman.style.top.slice(0, 3)) > nonoZone.dataset.row * 16 - 15 &&
    parseInt(pacman.style.top.slice(0, 3)) < nonoZone.dataset.row * 16 + 15*/

//Detect walls moving left
/*parseInt(pacman.style.left.slice(0, 3)) - 16 ===
      nonoZone.dataset.column * 16 &&
    parseInt(pacman.style.top.slice(0, 3)) > nonoZone.dataset.row * 16 - 15 &&
    parseInt(pacman.style.top.slice(0, 3)) < nonoZone.dataset.row * 16 + 15*/

//Detect walls moving down
/*parseInt(pacman.style.top.slice(0, 3)) + 16 === nonoZone.dataset.row * 16 &&
    parseInt(pacman.style.left.slice(0, 3)) >
      nonoZone.dataset.column * 16 - 15 &&
    parseInt(pacman.style.left.slice(0, 3)) < nonoZone.dataset.column * 16 + 15*/

//Detect walls moving up
/*parseInt(pacman.style.top.slice(0, 3)) - 16 === nonoZone.dataset.row * 16 &&
    parseInt(pacman.style.left.slice(0, 3)) >
      nonoZone.dataset.column * 16 - 15 &&
    parseInt(pacman.style.left.slice(0, 3)) < nonoZone.dataset.column * 16 + 15*/

//Display dots in dotArray
const displayDots = () => {
  for (let i = 0; i < dotArray.length; i++) {
    let currentDot = document.createElement('div')
    currentDot.className = 'dots'
    currentDot.id = dotArray[i].id
    document.querySelector('.game-board').append(currentDot)
    currentDot.style.top = dotArray[i].topPosition + 'px'
    currentDot.style.left = dotArray[i].leftPosition + 'px'
  }
}
//create dots and fill array
const createDots = () => {
  for (let i = 0; i < 0; i++) {
    let arrDot = {}
    arrDot.id = 'dot' + i
    arrDot.topPosition = /*parseInt(dot.style.top.slice(0, 3))*/ 1 + i * 10
    arrDot.leftPosition = /*parseInt(dot.style.left.slice(0, 3))*/ 1 + i * 10
    dotArray.push(arrDot)
  }
  //displayDots()
  //console.log(dotArray)
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
    spriteSheetX += 32
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
    spriteSheetX -= 32
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

//Check for dots in the direction Pac-man is facing
const checkForDots = (facing) => {
  if (facing === 'up') {
    for (let i = 0; i < dotArray.length; i++) {
      if (
        parseInt(pacman.style.top.slice(0, 3)) - 35 ===
          dotArray[i].topPosition &&
        parseInt(pacman.style.left.slice(0, 3)) >=
          dotArray[i].leftPosition - 29 &&
        parseInt(pacman.style.left.slice(0, 3)) <= dotArray[i].leftPosition + 3
      ) {
        removeDot(dotArray[i].id)
      }
    }
  } else if (facing === 'down') {
    for (let i = 0; i < dotArray.length; i++) {
      if (
        parseInt(pacman.style.top.slice(0, 3)) + 1 ===
          dotArray[i].topPosition &&
        parseInt(pacman.style.left.slice(0, 3)) >=
          dotArray[i].leftPosition - 29 &&
        parseInt(pacman.style.left.slice(0, 3)) <= dotArray[i].leftPosition + 3
      ) {
        removeDot(dotArray[i].id)
      }
    }
  } else if (facing === 'left') {
    for (let i = 0; i < dotArray.length; i++) {
      if (
        parseInt(pacman.style.left.slice(0, 3)) - 3 ===
          dotArray[i].leftPosition &&
        parseInt(pacman.style.top.slice(0, 3)) >= dotArray[i].topPosition &&
        parseInt(pacman.style.top.slice(0, 3)) <= dotArray[i].topPosition + 33
      ) {
        removeDot(dotArray[i].id)
      }
    }
  } else if (facing === 'right') {
    for (let i = 0; i < dotArray.length; i++) {
      if (
        parseInt(pacman.style.left.slice(0, 3)) + 29 ===
          dotArray[i].leftPosition &&
        parseInt(pacman.style.top.slice(0, 3)) >= dotArray[i].topPosition &&
        parseInt(pacman.style.top.slice(0, 3)) <= dotArray[i].topPosition + 33
      ) {
        removeDot(dotArray[i].id)
      }
    }
  }
}
/*if (
  pacman.style.top === '80px' &&
  parseInt(pacman.style.left.slice(0, 3)) > 89 &&
  parseInt(pacman.style.left.slice(0, 3)) < 109
)

if (parseInt(pacman.style.top.slice(0, 3)) === dotArray[0].topPosition) {
    console.log('this works')
}
    */

//Remove a dot when Pac-man touches it and add to the score
const removeDot = (id) => {
  document.querySelector(`#${id}`).remove()
  score += 100
  document.querySelector('.scoreboard').innerHTML = score
}

const pacmanChangeDirection = (keyPressed) => {
  if (keyPressed.key === 't') {
    console.log(
      `Pac-man's top is ${parseInt(pacman.style.top.slice(0, 3))} and left is ${
        pacman.style.left
      }`
    )
    console.log(dotArray)

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
      if (parseInt(moveDown.slice(0, 3)) + 1 != 466) {
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
      if (parseInt(moveRight.slice(0, 3)) + 1 != 421) {
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
  direction = 'down'
  //detectWalls(direction)
  checkForDots(direction)
  //console.log(bool)

  pacman.style.transform = 'rotate(90deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveDown = parseInt(moveDown.slice(0, 3))
  moveUp = parseInt(moveUp.slice(0, 3))
  //console.log(moveDown)
  if (moveDown + 1 != 466) {
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
  timer = setTimeout(movePacmanDown, 0.2)
}

const movePacmanUp = () => {
  direction = 'up'
  //detectWalls(direction)
  checkForDots(direction)
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
  timer = setTimeout(movePacmanUp, 0.2)
}

const movePacmanLeft = () => {
  direction = 'left'
  //detectWalls(direction)
  checkForDots(direction)
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
  timer = setTimeout(movePacmanLeft, 0.2)
}

const movePacmanRight = () => {
  direction = 'right'
  detectWalls(direction)
  checkForDots(direction)
  pacman.style.transform = 'rotate(0deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveRight = parseInt(moveRight.slice(0, 3))
  moveLeft = parseInt(moveLeft.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveRight + 1 != 421) {
    moveRight += 1
    moveLeft += 1
  }
  //Change back to string with 'px' attached
  moveRight = moveRight.toString() + 'px'
  moveLeft = moveLeft.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveRight

  //Make him move!
  timer = setTimeout(movePacmanRight, 0.2)
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

/*
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
  1, 3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 1,
  1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1,
  1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1,
  1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1,
  1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
  1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
  1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  */
