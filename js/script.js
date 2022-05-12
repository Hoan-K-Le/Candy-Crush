
  const zombieColors = [
     'red',
    'yellow',
    'hotpink',
    'purple',
    'lightblue'
]

// creating instruction

const instructionBtn = document.getElementById('instruction-btn')
const instructionContainer = document.getElementById('instructionContainer')


const candyGrid = document.querySelector('.candyGrid')
const gridWidth = 8

const newP = document.createElement('p')
newP.classList.add('gameOver')

// Search up how to show Score
const showScore = document.getElementById('score')

// create an empty array like tictactoe
const eachBox = []

// starting the score at zero and globally declaring it
let score = 0

// creating a time clock
let startingSeconds = 20


const countDown = document.getElementById('countTimer');

        
        
        
        document.addEventListener('DOMContentLoaded', () => {

            //instructions
    // instructionBtn.addEventListener('click', () => {
    //     instructionContainer.scrollIntoView(true)
    // })


            //Instruction buttons
    instructionBtn.addEventListener('click', () => {
        if(instructionContainer.style.display === 'none'){
            instructionContainer.style.display = 'block';
        } else {
            instructionContainer.style.display = 'none';
        }
    })

// function for instructions
    

    // function for countdown timer
    let refreshClock = setInterval(updateTimer, 1000)
    
    const clearGame = () => {
        const newSquare = document.querySelector('.candyGrid')
        while(newSquare.firstChild) {
            newSquare.removeChild(newSquare.firstChild)
        }
    }
  
    const newGame = numberOfSquares => {
    
     for (let i = 0; i < gridWidth*gridWidth; i++) { 
        
        const square = document.createElement('div')
        
        square.setAttribute('draggable', true) 
       
        square.setAttribute('id', i)  
        let randomColor = Math.floor(Math.random () * zombieColors.length) 
        square.style.backgroundColor = zombieColors[randomColor]
        candyGrid.appendChild(square)
        eachBox.push(square)
        startingSeconds = 30;
       square.addEventListener('dragstart', dragStart) // click on image to drag
       square.addEventListener('dragend', dragEnd) // after drag drop, you swap the two images
    square.addEventListener('dragover', dragOver) // moving image around while its clicked
     square.addEventListener('dragenter', dragEnter) // moving image onto another one
       square.addEventListener('dragleave', dragLeave) // dragged image leaving another image
       square.addEventListener('drop', dragDrop) // dragging image over another image, then dropping it on top of it
       
        
    }
    // createBoard()
    eachColumn()
    eachRow()
    dragDrop()
}



   
    
    
    
    let gameState = true
    
    function updateTimer () {
        countDown.innerHTML = `${startingSeconds}`; // this starts the timer
        startingSeconds --;
        
                if (startingSeconds === -1) {
                    clearInterval(refreshClock)
                    //Adding a game over function
                    
                    gameState = false
                if (gameState === false)  {
                  if (score >= 35) {
                    candyGrid.innerText = `Winner! Your score is ${score}!` 
                    candyGrid.classList.add('winWin')   
                 } else {

                     candyGrid.innerText = `Game Over! Your score is ${score}! Try Again!`
                     
                     candyGrid.classList.add('gameOver')
                       
                 }

                
                    
                }
            }
            
        }
        
        
        
        
        
        //Declare the color and the matches
        // const zombieColors = [
        //     'red',
        //     'yellow',
        //     'hotpink',
        //     'purple',
        //     'green'
        // ]
        


    // create the board using for loops

    function createBoard () {
        for(let i = 0; i < gridWidth*gridWidth; i++) { //8x8 board (63 or gridWidth*gridWidth)
            // start creating a div for the square so each box has a square
            const square = document.createElement('div')
            square.addEventListener('dragstart', dragStart) // click on image to drag
             square.addEventListener('dragend', dragEnd) // after drag drop, you swap the two images
            square.addEventListener('dragover', dragOver) // moving image around while its clicked
             square.addEventListener('dragenter', dragEnter)// moving image onto another one
            square.addEventListener('dragleave', dragLeave) // dragged image leaving another image
            square.addEventListener('drop', dragDrop)
            //Figure out a way to drag them to a certain spot(RESEARCH)
            square.setAttribute('draggable', true) // Source (stackoverflow)
            //try find a way to figure out which one is being dragged by giving them class/id
            square.setAttribute('id', i) // loop over 15 times
            // use the same random color theory as the div homework
            let randomColor = Math.floor(Math.random () * zombieColors.length) 
            square.style.backgroundColor = zombieColors[randomColor] // where i made the square into random colors
            candyGrid.appendChild(square) // create square's in the grid
            eachBox.push(square)
        
        }
    }
    createBoard()


    // this lets me know where its being drag to and at which position.
    let colorBeingDragged;
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    // eachBox.forEach(square => square.addEventListener('dragstart', dragStart)) // click on image to drag
    // eachBox.forEach(square => square.addEventListener('dragend', dragEnd)) // after drag drop, you swap the two images
    // eachBox.forEach(square => square.addEventListener('dragover', dragOver)) // moving image around while its clicked
    // eachBox.forEach(square => square.addEventListener('dragenter', dragEnter)) // moving image onto another one
    // eachBox.forEach(square => square.addEventListener('dragleave', dragLeave)) // dragged image leaving another image
    // eachBox.forEach(square => square.addEventListener('drop', dragDrop)) // drag image over another image, and then drop it on top of it

    //Figure out a way where if you hover the color to the next, it'll change the color
 // this.id refers to that id of the function indepently than the entire thing.
    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        // console.log(colorBeingDragged)
        // console.log(this.id, 'dragstart')
    }
    
    function dragOver(e) {
        e.preventDefault()
        // console.log(this.id, 'dragover')
    }
    
    
    function dragEnter(e) {
        e.preventDefault()
        // console.log(this.id, 'dragenter')
    }
    
    
    
    function dragLeave() {
        // console.log(this.id, 'dragleave')
    }
    
    
    
    function dragDrop() {
        // console.log(this.id, 'drop')
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced // refer to etch-sketch notes where you replace the color
    }
    
    function dragEnd() {
        // console.log(this.id, 'dragend')

    let theMoves = [
         squareIdBeingDragged -1,
         squareIdBeingDragged -gridWidth, 
         squareIdBeingDragged +1, 
         squareIdBeingDragged +gridWidth,
        ]

 
    // if its true then the square would be replaced
    let theMove = theMoves.includes(squareIdBeingReplaced)
    if(squareIdBeingReplaced && theMove) {
        squareIdBeingReplaced = null
    } else if (squareIdBeingReplaced && !theMove) { //if not valid
        eachBox[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
        eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }else eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
}






// figure out how to get scores now with the rows

function eachRow () {
    for (let i = 0; i < 61; i++) {
        let threeRow = [i, i+1, i+2]
        let theColor = eachBox[i].style.backgroundColor
        const ifBlank = eachBox[i].style.backgroundColor === ''

            // figure out a way to stop the row's from splitting the match aka 2 and 1 on different row
            // this prevents the row at the end to not have 2 square = match
        const notRow = [6, 7, 14, 15, 22, 23 ,30 ,31, 38, 39, 46, 47, 54, 55]   
        if (notRow.includes(i)) continue 
        

        if (threeRow.every(index => eachBox[index].style.backgroundColor === theColor && !ifBlank)) {
            score += 3
            showScore.innerHTML = score
            threeRow.forEach(index => {
                eachBox[index].style.backgroundColor = ''
            })
        }
    }
}
eachRow()


// figure out how to get scores now with the columns

function eachColumn () {
    for (let i = 0; i < 47; i++) {
        let threeColumn = [i, i+gridWidth, i+gridWidth*2]
        let theColor = eachBox[i].style.backgroundColor
        const ifBlank = eachBox[i].style.backgroundColor === ''


        if (threeColumn.every(index => eachBox[index].style.backgroundColor === theColor && !ifBlank)) {
            score += 3
            showScore.innerHTML = score
            threeColumn.forEach(index => {
                eachBox[index].style.backgroundColor = ''
            })
        }
    }
}
eachColumn()




document.querySelector('#clear-button').addEventListener('click',clearGame)
document.getElementById('play-again').addEventListener('click', () => {
    window.location.reload(); // refreshing the whole window
    clearGame()
    // newGame()
})




// Find a way to replace the empty space with more square's
// function xtraCandies () {

// }


// constantly continues the pages in 100ms 
window.setInterval( () => {
    eachRow ()
    eachColumn()
}, 100)




// const startTimer = document.getElementById('start')

// function startTime () {
//     startTimer = window.setInterval() => {
        
//     }
// }
// const clearGame = () => {
//     const newSquare = document.querySelector('.candyGrid')
//     while(newSquare.firstChild) {
//         newSquare.removeChild(newSquare.firstChild)
//     }
// }






//game win/lose 
// reset button





}) // DOM curly bracket



// stretch 
// build gravity so when it matches = blocks fall down
// each square = picture of zombie
// high score replacement
// game over = bug splat in bugged



    