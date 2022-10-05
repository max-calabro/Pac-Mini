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
let moveRight = '208px'
let moveLeft = '208px'
//More movement variables. Timer, turns off setTimeout inside the movement, direction, tracks what direction Pac-man is moving.
let timer = 0
let direction = ''
let pixel = 0
let moveWhere = ''
let moveOpposite = ''

//Start Pac-man in the center
pacman.style.top = '368px'
pacman.style.left = '208px'

//Array of dots
let dotArray = []
let pacmanLOrT = pacman.style.top
let pacmanTOrL = pacman.style.left
let addOrSub = -16

let walls = false
let dots = false

let allGameSquares = document.querySelectorAll('.game-board div')

/*let rowFour = {
  row: 4,
  column2: 2,
  column3: 3,
  column4: 4,
  column5: 5
}*/
//Arrays containing the walls that can be hit from a given direction
//const upWalls = [rowFour]
let topWalls = [[], [], [], [], [], [], [], []]
let index = 0
let leftWalls = []
let bool = false
//Maybe also have empty's in a  arrray
//and dots
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
        //console.log(`this is pmans square! i is ${i} and j is ${j}`)
      } else {
        let positionInGameBoard = i * 28 + j
        giveRowAndColumn(i, j, positionInGameBoard)
        switch (gameBoard[positionInGameBoard]) {
          case 0:
            allGameSquares[positionInGameBoard].className = 'empty'
            break
          case 1:
            allGameSquares[positionInGameBoard].className = 'wall'
            if (
              i === 4 ||
              i === 10 ||
              i === 13 ||
              i === 16 ||
              i === 19 ||
              i === 22 ||
              i === 25 ||
              i === 28
            ) {
              if (i === 10) {
                index = 1
              } else if (i === 13) {
                index = 2
              } else if (i === 16) {
                index = 3
              } else if (i === 19) {
                index = 4
              } else if (i === 22) {
                index = 5
              } else if (i === 25) {
                index = 6
              } else if (i === 28) {
                index = 7
              }

              if (topWalls[index].length === 0) {
                topWalls[index].push(i)
                topWalls[index].push(j)
              } else {
                topWalls[index].push(j)
              }
              /*if (topWalls.length === 0 || topWalls[i] === undefined) {
                console.log(`before new arr ` + topWalls)
                //topWalls[i] = []
                console.log(`array is this long before pushes ${topWalls}`)
                topWalls[i].push(i)
                topWalls[i].push(j)
                console.log('after new arr' + topWalls)
                console.log(`i is ${i} and j is ${j} ` + topWalls)*/
              /*} else if (topWalls[i] === undefined) {
                console.log('next is a new array')
                topWalls[i] = Array(2)
                topWalls[i].push(i)
                topWalls[i].push(j)*/
              /*} else if (topWalls[i][0] === i) {
                console.log(`i is ${i} and j is ${j} ` + topWalls)
                topWalls[i].push(j)
              }*/
            }

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
//topWalls[0] = new Array(0, 1)
//topWalls[0].push(2)
//topWalls[1] = new Array(1, 1)
//topWalls[1].push(2)

//Make separate arrays of walls that can be hit only when moving up/R/L/D
//Will still need to check dots constantly
/* 
Up walls by their row/column
0: 1-12, 15-26 maybe this row could just be hard coded in pixels
4: 2-5, 7-11, 13, 14, 16-20, 22-25
7: 2-5, 10-12, 15-17, 22-25
10: 9-11, 13, 14, 16-18, 
13: 0-5, 7, 8, 19, 20, 22-27
16: 10-17
19: 1-5, 7, 8, 10-12, 15-17, 19, 20, 22-26
22: 2, 3, 7-11, 13, 14, 16-20, 24, 25
25: 1, 2, 4, 5, 10-12, 15-17, 22, 23, 25, 26
28: 2-11, 13, 14, 16-25
*/
/*
Down walls by their row/column
*/

let nonoZone = allGameSquares[16 * 28 + 13]
let rowOrColumn = nonoZone.dataset.row
let columnOrRow = nonoZone.dataset.column

const detectWalls = (whatDirection) => {
  //for (let i = 0; i < 31; i++) {}
  //for (let j = 0; j < 28; j++) {}
  //check if the next pixels in pacmans (current direction/16 +1) are equal to any of the rows or columns of any div
  //if true then check what the class is

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
    addOrSub = 16
    pacmanLOrT = pacman.style.left
    columnOrRow = nonoZone.dataset.column
    pacmanTOrL = pacman.style.top
    rowOrColumn = nonoZone.dataset.row
    //console.log(direction)
  } else if (whatDirection === 'left') {
    addOrSub = -16
    pacmanLOrT = pacman.style.left
    columnOrRow = nonoZone.dataset.column
    pacmanTOrL = pacman.style.top
    rowOrColumn = nonoZone.dataset.row
    //console.log(direction)
  } else if (whatDirection === 'down') {
    addOrSub = 16
    pacmanLOrT = pacman.style.top
    columnOrRow = nonoZone.dataset.row
    pacmanTOrL = pacman.style.left
    rowOrColumn = nonoZone.dataset.column
    //console.log(direction)
  } else if (whatDirection === 'up') {
    addOrSub = -16
    pacmanLOrT = pacman.style.top

    for (let i = 0; i < topWalls.length; i++) {
      if (topWalls[i][0] * 16 === parseInt(pacmanLOrT.slice(0, 3)) + addOrSub) {
        console.log('maybe')
        for (let j = 0; j < topWalls[i].length; j++) {
          if (
            parseInt(pacmanTOrL.slice(0, 3)) > topWalls[i][j] * 16 - 15 &&
            parseInt(pacmanTOrL.slice(0, 3)) < topWalls[i][j] * 16 + 15
          ) {
            console.log('yes!')
            bool = true
            return
          }
        }
      }
    }
    columnOrRow = nonoZone.dataset.row
    pacmanTOrL = pacman.style.left
    rowOrColumn = nonoZone.dataset.column
    //console.log(direction)
  } else {
    console.log('panic')
  }

  /*if (
    whatDirection === 'up' &&
    parseInt(pacmanLOrT.slice(0, 3)) + addOrSub === upWalls[0].row * 16 &&
    parseInt(pacmanTOrL.slice(0, 3)) > upWalls[0].column2 * 16 - 15 &&
    parseInt(pacmanTOrL.slice(0, 3)) < upWalls[0].column5 * 16 + 15
  ) {
    console.log('works')
  }*/
  /*console.log('start here')
  console.log(`you are moving ${direction}`)
  console.log('pmanLOrT is ' + `${parseInt(pacmanLOrT.slice(0, 3)) + addOrSub}`)
  console.log('pmanTOrL is ' + `${parseInt(pacmanTOrL.slice(0, 3)) + addOrSub}`)
  console.log('addOrSub is ' + `${addOrSub}`)
  console.log('rowOrColumn is ' + `${parseInt(rowOrColumn.slice(0, 3))}`)
  console.log('columnOrRow is ' + parseInt(columnOrRow.slice(0, 3)))
  console.log('end here')*/
  if (
    parseInt(pacmanLOrT.slice(0, 3)) + addOrSub ===
      parseInt(columnOrRow.slice(0, 3)) * 16 &&
    parseInt(pacmanTOrL.slice(0, 3)) >
      parseInt(rowOrColumn.slice(0, 3)) * 16 - 15 &&
    parseInt(pacmanTOrL.slice(0, 3)) <
      parseInt(rowOrColumn.slice(0, 3)) * 16 + 15
  ) {
    console.log('detected wall')
    bool = true
    return
  }

  bool = false
  return
}

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

//done
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
//createDots()

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
      if (parseInt(moveDown.slice(0, 3)) + 1 != 465) {
        clearTimeout(timer)
        movePacmanDown()
        //pacmanMovement(keyPressed)
      }
    }
  } else if (keyPressed.key === 'w' || keyPressed.key === 'ArrowUp') {
    if (direction != 'up') {
      if (parseInt(moveUp.slice(0, 3)) - 1 != 15) {
        clearTimeout(timer)
        movePacmanUp()
        //pacmanMovement(keyPressed)
      }
    }
  }

  if (keyPressed.key === 'd' || keyPressed.key === 'ArrowRight') {
    if (direction != 'right') {
      if (parseInt(moveRight.slice(0, 3)) + 1 != 417) {
        clearTimeout(timer)
        movePacmanRight()
        //pacmanMovement(keyPressed)
      }
    }
  } else if (keyPressed.key === 'a' || keyPressed.key === 'ArrowLeft') {
    if (direction != 'left') {
      if (parseInt(moveLeft.slice(0, 3)) - 1 != 15) {
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
  detectWalls(direction)
  //checkForDots(direction)
  //console.log(bool)

  pacman.style.transform = 'rotate(90deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveDown = parseInt(moveDown.slice(0, 3))
  moveUp = parseInt(moveUp.slice(0, 3))
  //console.log(moveDown)
  if (moveDown + 1 != 465) {
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
  timer = setTimeout(movePacmanDown, 50)
}

const movePacmanUp = () => {
  direction = 'up'
  detectWalls(direction)
  //checkForDots(direction)
  pacman.style.transform = 'rotate(270deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveUp = parseInt(moveUp.slice(0, 3))
  moveDown = parseInt(moveDown.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveUp - 1 != 15 && bool != true) {
    moveUp -= 1
    moveDown -= 1
  }
  bool = false
  //Change back to string with 'px' attached
  moveUp = moveUp.toString() + 'px'
  moveDown = moveDown.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveUp

  //Make him move!
  timer = setTimeout(movePacmanUp, 2)
}

const movePacmanLeft = () => {
  direction = 'left'
  detectWalls(direction)
  //checkForDots(direction)
  pacman.style.transform = 'rotate(180deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveLeft = parseInt(moveLeft.slice(0, 3))
  moveRight = parseInt(moveRight.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveLeft - 1 != 15) {
    moveLeft -= 1
    moveRight -= 1
  }
  //Change back to string with 'px' attached
  moveLeft = moveLeft.toString() + 'px'
  moveRight = moveRight.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveLeft

  //Make him move!
  timer = setTimeout(movePacmanLeft, 50)
}

const movePacmanRight = () => {
  direction = 'right'
  detectWalls(direction)
  //checkForDots(direction)
  pacman.style.transform = 'rotate(0deg)'
  //console.log(moveDown)
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveRight = parseInt(moveRight.slice(0, 3))
  moveLeft = parseInt(moveLeft.slice(0, 3))
  //console.log(moveDown)
  //Move down one soon to be pixel
  if (moveRight + 1 != 417) {
    moveRight += 1
    moveLeft += 1
  }
  //Change back to string with 'px' attached
  moveRight = moveRight.toString() + 'px'
  moveLeft = moveLeft.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveRight

  //Make him move!
  timer = setTimeout(movePacmanRight, 50)
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
