document.addEventListener('DOMContentLoaded', () => {
    const candyGrid = document.querySelector('.candyGrid')
    const gridWidth = 4
    // create an empty array like tictactoe
    const squares = []

    //Declare the color and the matches
    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green',
        'blue'
    ]



    // create the board with for loops
    function createBoard () {
        for(let i = 0; i < gridWidth*gridWidth; i++) {
            // start creating a div for the square so each box has a square
            const square = document.createElement('div')
            //Figure out a way to drag them to a certain spot(RESEARCH)
            square.setAttribute('draggable', true)
            let randomColor = Math.floor(Math.random () * candyColors.length)
            square.style.backgroundColor = candyColors[randomColor]
            candyGrid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()

})



