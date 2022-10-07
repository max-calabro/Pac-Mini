/*
 *
 * Glabal constants and variables
 */
//Game board, what on it. Walls are 1, dots are 2, empty squares are 0, power dots are 3, ghost entrnce is 4
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

//pacman.style.backgroundImage = 'url("Pac-Man - Transparent.png")'
pacman.style.backgroundImage = 'url("Pac-Man - Small - Transparent..png")'

//Gameboard sprite position
let board = document.querySelector('.game-board')
board.style.backgroundPositionX = '-456px'

//Pac-mans lives
const lives = document.querySelectorAll('.lives')
for (let i = 0; i < lives.length; i++) {
  lives[i].style.backgroundImage =
    'url("Arcade - Pac-Man - General Sprites.png")'
  lives[i].style.backgroundPositionX = '416px'
  lives[i].style.backgroundPositionY = '000px'
}

//Dot
//const dot = document.createElement('div')

//Dot starting position
//dot.style.top = '160px'
//dot.style.left = '210px'

//Scoreboard
let score = 0
document.querySelector('.scoreboard').innerHTML = score

//Where the player will be on the gameboard in pixels
let playerCoordinateY = 0
let playerCoordinateX = 0

//The coordinates of the sprite sheet to target a starting point for a specific frames. 208x000 is base pose Pac-man
//Big Pac-man
//let spriteSheetX = '416px'
//let spriteSheetY = '000px'
//Small Pac-man
let spriteSheetX = '208px'
let spriteSheetY = '000px'

//What sprite pose Pac-man is currently in. 0/2 are base pose, 1 is wide mouth, and 3 is closed mouth.
let whatPacmanFrame = 0

//Static starting Pac-man
pacman.style.backgroundPositionX = spriteSheetX
pacman.style.backgroundPositionY = spriteSheetY

//Pac-man's movement up(-top), down(+top), right(+left), left(-left)
let moveUp = '368px'
let moveDown = '368px'
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
//let dotArray = []
let pacmanLOrT = pacman.style.top
let pacmanTOrL = pacman.style.left
let addOrSub = -16

let walls = false
let dots = false

//let allGameSquares = document.querySelectorAll('.game-board div')

//All the dots
let dotArray = []
//Basic dot object
const dotObject = {
  eaten: false,
  row: 0,
  column: 0
}
//Arrays containing the walls that can be hit from a given direction
//const upWalls = [rowFour]
let upWalls = [[], [], [], [], [], [], [], []]
let downWalls = [[], [], [], [], [], [], [], [], []]
let rightWalls = [[], [], [], [], [], [], [], [], []]
let leftWalls = [[], [], [], [], [], [], [], [], []]
let index = 0
let bool = false
//Maybe also have empty's in a  arrray
//and dots

let winner = false
/*
 *
 * Functions
 */
const giveRowAndColumn = (row, column, position, allGameSquares) => {
  allGameSquares[position].dataset.row = row
  allGameSquares[position].dataset.column = column
}

const fillStartingBoard = (allGameSquares) => {
  for (let i = 0; i < 31; i++) {
    for (let j = 0; j < 28; j++) {
      if (i === 0 && j === 0) {
        //console.log(`this is pmans square! i is ${i} and j is ${j}`)
      } else {
        let positionInGameBoard = i * 28 + j
        giveRowAndColumn(i, j, positionInGameBoard, allGameSquares)
        switch (gameBoard[positionInGameBoard]) {
          case 0:
            allGameSquares[positionInGameBoard].className = 'empty'
            break
          case 1:
            allGameSquares[positionInGameBoard].className = 'wall'
            //Fill upWalls
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
              if (i === 4) {
                index = 0
              } else if (i === 10) {
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
              if (upWalls[index].length === 0) {
                upWalls[index].push(i)
                upWalls[index].push(j)
              } else {
                upWalls[index].push(j)
              }
            }
            //Fill downWalls
            if (
              i === 2 ||
              i === 6 ||
              i === 9 ||
              i === 12 ||
              i === 15 ||
              i === 18 ||
              i === 21 ||
              i === 24 ||
              i === 27
            ) {
              if (i === 2) {
                index = 0
              } else if (i === 6) {
                index = 1
              } else if (i === 9) {
                index = 2
              } else if (i === 12) {
                index = 3
              } else if (i === 15) {
                index = 4
              } else if (i === 18) {
                index = 5
              } else if (i === 21) {
                index = 6
              } else if (i === 24) {
                index = 7
              } else if (i === 27) {
                index = 8
              }
              if (downWalls[index].length === 0) {
                downWalls[index].push(i)
                downWalls[index].push(j)
              } else {
                downWalls[index].push(j)
              }
            }
            //Fill leftWalls
            if (
              j === 2 ||
              j === 5 ||
              j === 8 ||
              j === 11 ||
              j === 14 ||
              j === 17 ||
              j === 20 ||
              j === 23 ||
              j === 25
            ) {
              if (j === 2) {
                index = 0
              } else if (j === 5) {
                index = 1
              } else if (j === 8) {
                index = 2
              } else if (j === 11) {
                index = 3
              } else if (j === 14) {
                index = 4
              } else if (j === 17) {
                index = 5
              } else if (j === 20) {
                index = 6
              } else if (j === 23) {
                index = 7
              } else if (j === 25) {
                index = 8
              }
              if (leftWalls[index].length === 0) {
                leftWalls[index].push(j)
                leftWalls[index].push(i)
              } else {
                leftWalls[index].push(i)
              }
            }
            //Fill rightWalls
            if (
              j === 2 ||
              j === 4 ||
              j === 7 ||
              j === 10 ||
              j === 13 ||
              j === 16 ||
              j === 19 ||
              j === 22 ||
              j === 25
            ) {
              if (j === 2) {
                index = 0
              } else if (j === 4) {
                index = 1
              } else if (j === 7) {
                index = 2
              } else if (j === 10) {
                index = 3
              } else if (j === 13) {
                index = 4
              } else if (j === 16) {
                index = 5
              } else if (j === 19) {
                index = 6
              } else if (j === 22) {
                index = 7
              } else if (j === 25) {
                index = 8
              }
              if (rightWalls[index].length === 0) {
                rightWalls[index].push(j)
                rightWalls[index].push(i)
              } else {
                rightWalls[index].push(i)
              }
            }
            break
          case 2:
            allGameSquares[positionInGameBoard].className = 'dot'
            allGameSquares[positionInGameBoard].style.backgroundImage =
              'url("Arcade - Pac-Man - General Sprites.png")'
            allGameSquares[positionInGameBoard].style.backgroundPositionX =
              '-16px'
            allGameSquares[positionInGameBoard].style.backgroundPositionY =
              '48px'

            //adding dots to dotArray
            //if (i === 23 && j === 19) {
            let dot = {
              eaten: false,
              row: i,
              column: j
            }
            dotArray.push(dot)
            //}

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

//console.log(dotArray)
/*console.log(upWalls)
console.log(downWalls)
console.log(rightWalls)
console.log(leftWalls)*/
/*
Left walls by their column: rows
2: 24, 25
5: 2-4, 6, 7, 9-13, 15-19, 21-25
8: 6-8, 11-13, 15-19, 24-26
11: 2-4, 9, 10, 22, 23, 27, 28
14: 1-4, 8-10, 20-22, 26-28
17: 6, 7, 12-16, 18, 19, 24, 25
20: 2-4, 6-13, 15-19, 21, 22, 24-26
23: 23-25
25: 2-4, 6, 7, 21, 22, 27, 28
Right walls by their column: rows
2: 2-4, 6, 7, 21, 22, 27, 28
4: 23-25
7: 2-4, 6-13, 15-19, 21, 22, 24-26
10: 6, 7, 12-16, 18, 19, 24, 25
13: 1-4, 8-10, 20-22, 26-28
16: 2-4, 9, 10, 22, 23, 27, 28
19: 6-8, 11-13, 15-19, 24-26
22: 2-4, 6, 7, 9-13, 15-19, 21-25
25: 24, 25
*/

//let nonoZone = allGameSquares[16 * 28 + 13]
//let rowOrColumn = nonoZone.dataset.row
//let columnOrRow = nonoZone.dataset.column

const detectWalls = (keyPressed) => {
  //for (let i = 0; i < 31; i++) {}
  //for (let j = 0; j < 28; j++) {}
  //check if the next pixels in pacmans (current direction/16 +1) are equal to any of the rows or columns of any div
  //if true then check what the class is

  //console.log(`pmans top ${pacman.style.top} and his left ${pacman.style.left}`)
  //target row=16 (256px) column=13 (208px)
  //let nonoZone = allGameSquares[16 * 28 + 13]
  //translate row(top) and column(left) numbers to pixels (multiply by 16)
  //console.log(nonoZone.dataset.row * 16)
  //console.log(nonoZone.dataset.column * 16)
  //pacmanLOrT and pacmanTOrL are each either left or top of pacman
  //rowOrColumn and columnOrRow are each either row or column of square ahead of pacman
  //addOrSub is either -16 or +16
  if (
    keyPressed === 'd' ||
    keyPressed === 'ArrowRight' ||
    keyPressed === 'right'
  ) {
    addOrSub = 16
    pacmanLOrT = pacman.style.left
    //columnOrRow = nonoZone.dataset.column
    pacmanTOrL = pacman.style.top
    //rowOrColumn = nonoZone.dataset.row

    isThatADot()
    isThatAWall(rightWalls, addOrSub, pacmanLOrT, pacmanTOrL)
    return
    //console.log(direction)
  } else if (
    keyPressed === 'a' ||
    keyPressed === 'ArrowLeft' ||
    keyPressed === 'left'
  ) {
    addOrSub = -16
    pacmanLOrT = pacman.style.left
    //columnOrRow = nonoZone.dataset.column
    pacmanTOrL = pacman.style.top
    //rowOrColumn = nonoZone.dataset.row

    isThatADot()
    isThatAWall(leftWalls, addOrSub, pacmanLOrT, pacmanTOrL)
    return
    //console.log(direction)
  } else if (
    keyPressed === 's' ||
    keyPressed === 'ArrowDown' ||
    keyPressed === 'down'
  ) {
    addOrSub = 16
    pacmanLOrT = pacman.style.top
    //columnOrRow = nonoZone.dataset.row
    pacmanTOrL = pacman.style.left
    //rowOrColumn = nonoZone.dataset.column

    isThatADot()
    isThatAWall(downWalls, addOrSub, pacmanLOrT, pacmanTOrL)
    return
    //console.log(direction)
  } else if (
    keyPressed === 'w' ||
    keyPressed === 'ArrowUp' ||
    keyPressed === 'up'
  ) {
    addOrSub = -16
    pacmanLOrT = pacman.style.top

    //columnOrRow = nonoZone.dataset.row
    pacmanTOrL = pacman.style.left
    //rowOrColumn = nonoZone.dataset.column

    isThatADot()
    isThatAWall(upWalls, addOrSub, pacmanLOrT, pacmanTOrL)
    return
    //console.log(direction)
  } else {
    console.log('panic')
  }

  if (
    parseInt(pacmanLOrT.slice(0, 3)) + addOrSub ===
      parseInt(columnOrRow.slice(0, 3)) * 16 &&
    parseInt(pacmanTOrL.slice(0, 3)) >
      parseInt(rowOrColumn.slice(0, 3)) * 16 - 15 &&
    parseInt(pacmanTOrL.slice(0, 3)) <
      parseInt(rowOrColumn.slice(0, 3)) * 16 + 15
  ) {
    bool = true
    return
  }

  bool = false
  return
}

const isThatAWall = (wallArray, addOrSub, pacmanLOrT, pacmanTOrL) => {
  for (let i = 0; i < wallArray.length; i++) {
    if (wallArray[i][0] * 16 === parseInt(pacmanLOrT.slice(0, 3)) + addOrSub) {
      for (let j = 0; j < wallArray[i].length; j++) {
        if (
          parseInt(pacmanTOrL.slice(0, 3)) > wallArray[i][j] * 16 - 15 &&
          parseInt(pacmanTOrL.slice(0, 3)) < wallArray[i][j] * 16 + 15
        ) {
          bool = true
        }
      }
    }
  }
}

const isThatADot = () => {
  let allGameSquares = document.querySelectorAll('.game-board div')
  for (let i = 0; i < dotArray.length; i++) {
    if (dotArray[i].eaten != true) {
      if (
        parseInt(pacman.style.top.slice(0, 3)) + 8 ===
          dotArray[i].row * 16 + 8 &&
        parseInt(pacman.style.left.slice(0, 3)) + 8 ===
          dotArray[i].column * 16 + 8
      ) {
        dotArray[i].eaten = true
        score += 100
        document.querySelector('.scoreboard').innerHTML = score
        let positionInGameBoard = dotArray[i].row * 28 + dotArray[i].column
        allGameSquares[positionInGameBoard].style.backgroundPositionX = '-600px'
        allGameSquares[positionInGameBoard].style.backgroundPositionY = '200px'
        isWinner()
      }
    }
  }
}

const isWinner = () => {
  for (let i = 0; i < dotArray.length; i++) {
    if (dotArray[i].eaten === false) {
      return
    }
  }

  document.querySelector('.instructions').style.width = '169px'
  document.querySelector('.instructions').innerHTML = 'W I N N E R !'
  winner = true
  pacman.style.backgroundImage = 'none'
  waitASec()
}

const waitASec = () => {
  timeout = setTimeout(playAgain, 3000)
}

const playAgain = () => {
  let start = document.createElement('button')
  start.className = 'start'
  start.id = 'again'
  start.style.top = '240px'
  start.innerHTML = 'Play Again?'
  document.querySelector('.page').append(start)
  document.querySelector('#again').addEventListener('click', () => {
    again()
  })
}

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
    arrDot.topPosition = 1 + i * 10
    arrDot.leftPosition = 1 + i * 10
    dotArray.push(arrDot)
  }
}

const pacmanEats = () => {
  //When whatPacmanFrame is 0 or 2, base pose should display
  //When whatPacmanFrame is 1, wide pose should display
  //When whatPacmanFrame is 3, closed pose should display
  if (whatPacmanFrame === 0 || whatPacmanFrame === 3) {
    //Put only first 3 characters of spriteSheetX & Y into themself
    //Turn those variables into intagers
    spriteSheetX = parseInt(spriteSheetX.slice(0, 3))
    spriteSheetY = parseInt(spriteSheetY.slice(0, 3))
    //do math on those variables

    //BigEating
    //spriteSheetX += 32
    //spriteSheetY += 0
    //Small eating
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
    //put first 3 characters of spriteSheetX & Y into new variables
    //turn those variables into intagers
    spriteSheetX = parseInt(spriteSheetX.slice(0, 3))
    spriteSheetY = parseInt(spriteSheetY.slice(0, 3))

    //do math on those variables
    //Big Eating
    //spriteSheetX -= 32
    //spriteSheetY -= 0
    //Small eating
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
  timerEat = setTimeout(pacmanEats, 100)
}

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

    clearTimeout(timer)
  }

  if (keyPressed.key === 's' || keyPressed.key === 'ArrowDown') {
    if (direction != 'down') {
      detectWalls(keyPressed.key)
      if (parseInt(moveDown.slice(0, 3)) + 1 != 465 && bool != true) {
        clearTimeout(timer)
        movePacmanDown()
      }
    }
  } else if (keyPressed.key === 'w' || keyPressed.key === 'ArrowUp') {
    if (direction != 'up') {
      detectWalls(keyPressed.key)
      if (parseInt(moveUp.slice(0, 3)) - 1 != 15 && bool != true) {
        clearTimeout(timer)
        movePacmanUp()
      }
    }
  }

  if (keyPressed.key === 'd' || keyPressed.key === 'ArrowRight') {
    if (direction != 'right') {
      detectWalls(keyPressed.key)
      if (parseInt(moveRight.slice(0, 3)) + 1 != 417 && bool != true) {
        clearTimeout(timer)
        movePacmanRight()
      }
    }
  } else if (keyPressed.key === 'a' || keyPressed.key === 'ArrowLeft') {
    if (direction != 'left') {
      detectWalls(keyPressed.key)
      if (parseInt(moveLeft.slice(0, 3)) - 1 != 15 && bool != true) {
        clearTimeout(timer)
        movePacmanLeft()
      }
    }
  }
  bool = false
}

const movePacmanDown = () => {
  direction = 'down'
  detectWalls(direction)
  pacman.style.transform = 'rotate(90deg)'
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveDown = parseInt(moveDown.slice(0, 3))
  moveUp = parseInt(moveUp.slice(0, 3))
  if (moveDown + 1 != 465 && bool != true) {
    //Move down one soon to be pixel
    moveDown += 1
    moveUp += 1
  }
  bool = false
  //Change back to string with 'px' attached
  moveDown = moveDown.toString() + 'px'
  moveUp = moveUp.toString() + 'px'
  //Set the change into Pacman
  pacman.style.top = moveDown

  //Make him move!
  if (winner === false) {
    timer = setTimeout(movePacmanDown, 10)
  }
}

const movePacmanUp = () => {
  direction = 'up'
  detectWalls(direction)
  pacman.style.transform = 'rotate(270deg)'
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveUp = parseInt(moveUp.slice(0, 3))
  moveDown = parseInt(moveDown.slice(0, 3))
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
  if (winner === false) {
    timer = setTimeout(movePacmanUp, 10)
  }
}
const movePacmanLeft = () => {
  direction = 'left'
  detectWalls(direction)
  pacman.style.transform = 'rotate(180deg)'
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveLeft = parseInt(moveLeft.slice(0, 3))
  moveRight = parseInt(moveRight.slice(0, 3))
  //Move down one soon to be pixel
  if (moveLeft - 1 != 15 && bool != true) {
    moveLeft -= 1
    moveRight -= 1
  }
  bool = false
  //Change back to string with 'px' attached
  moveLeft = moveLeft.toString() + 'px'
  moveRight = moveRight.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveLeft

  //Make him move!
  if (winner === false) {
    timer = setTimeout(movePacmanLeft, 10)
  }
}

const movePacmanRight = () => {
  direction = 'right'
  detectWalls(direction)
  pacman.style.transform = 'rotate(0deg)'
  //Put only first 3 characters of moveDown into itself
  //Turn those variables into intagers
  moveRight = parseInt(moveRight.slice(0, 3))
  moveLeft = parseInt(moveLeft.slice(0, 3))
  //Move down one soon to be pixel
  if (moveRight + 1 != 417 && bool != true) {
    moveRight += 1
    moveLeft += 1
  }
  bool = false
  //Change back to string with 'px' attached
  moveRight = moveRight.toString() + 'px'
  moveLeft = moveLeft.toString() + 'px'
  //Set the change into Pacman
  pacman.style.left = moveRight

  //Make him move!
  if (winner === false) {
    timer = setTimeout(movePacmanRight, 10)
  }
}

const startGame = () => {
  document.querySelector('.start').remove()
  document.querySelector('.instructions').innerHTML = ''
  document.querySelector('.game-board').prepend(pacman)
  let allGameSquares = document.querySelectorAll('.game-board div')
  fillStartingBoard(allGameSquares)
  pacmanEats()
  movePacmanRight()
}

const again = () => {
  winner = false
  document.querySelector('.start').remove()
  document.querySelector('.instructions').innerHTML = ''

  //reset Pac-man
  pacman.style.backgroundImage = 'url("Pac-Man - Small - Transparent..png")'
  pacman.style.top = '368px'
  pacman.style.left = '208px'
  moveUp = '368px'
  moveDown = '368px'
  moveRight = '208px'
  moveLeft = '208px'
  timer = 0
  direction = ''
  pixel = 0
  moveWhere = ''
  moveOpposite = ''
  bool = false
  movePacmanRight()

  //reset dots
  let allGameSquares = document.querySelectorAll('.game-board div')
  let positionInGameBoard = 0
  for (let i = 0; i < dotArray.length; i++) {
    dotArray[i].eaten = false
    positionInGameBoard = dotArray[i].row * 28 + dotArray[i].column
    allGameSquares[positionInGameBoard].style.backgroundPositionX = '-16px'
    allGameSquares[positionInGameBoard].style.backgroundPositionY = '48px'
  }
}
//startGame()
/*
 *
 * Listeners
 */

//Where he going?
document.addEventListener('keydown', (keyPressed) => {
  if (winner === false) {
    pacmanChangeDirection(keyPressed)
  }
  //pacmanChangeDirection(keyPressed)
})

document.querySelector('.start').addEventListener('click', () => {
  startGame()
})
