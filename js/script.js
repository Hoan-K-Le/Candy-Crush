document.addEventListener('DOMContentLoaded', () => {
    const candyGrid = document.querySelector('.candyGrid')
    const gridWidth = 6
    // create an empty array like tictactoe
    const squares = []

    //Declare the color and the matches
    const candyColors = [
        'red',
        'yellow',
        'orange',
        'purple',
        'green'
        // these are zombie images when we're ready to replace the colors with
        // 'url(img/red-zombie.jpg)',
        // 'url(img/yellow-zombie.jpg)',
        // 'url(img/orange-zombie.jpg)',
        // 'url(img/purple.zombie.jpg)',
        // 'url(img/green-zombie.jpg)'
    ]



    // create the board with for loops
    function createBoard () {
        for(let i = 0; i < gridWidth*gridWidth; i++) {
            // start creating a div for the square so each box has a square
            const square = document.createElement('div')
            //Figure out a way to drag them to a certain spot(RESEARCH)
            square.setAttribute('draggable', true) // Source (stackoverflow)
            //try find a way to figure out which one is being dragged by giving them class/id
            square.setAttribute('id', i) // loop over 15 times thats why theres an i
            // use the same random color theory as the div homework
            let randomColor = Math.floor(Math.random () * candyColors.length) 
            square.style.backgroundColor = candyColors[randomColor]
            candyGrid.appendChild(square)
            squares.push(square)
        }
    }
    createBoard()
    // this lets me know where its being drag to and at which position.
    let colorBeingDragged 
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))

    //Figure out a way where if you hover the color to the next, it'll change the color

    function dragStart() {
        colorBeingDragged = this.style.backgroundColor
        squareIdBeingDragged = parseInt(this.id)
        console.log(colorBeingDragged)
        console.log(this.id, 'dragstart')
    }
    
    function dragOver(e) {
        e.preventDefault()
        console.log(this.id, 'dragover')
    }
    
    
    function dragEnter(e) {
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }
    
    
    
    function dragLeave() {
        console.log(this.id, 'dragleave')
    }
    
    
    
    function dragDrop() {
        console.log(this.id, 'drop')
        colorBeingReplaced = this.style.backgroundColor
        squareIdBeingReplaced = parseInt(this.id)
        this.style.backgroundColor = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced // etch-sketch notes
    }
    
    function dragEnd() {
        console.log(this.id, 'dragend')

    let theMoves = [
         squareIdBeingDragged -1,
         squareIdBeingDragged -gridWidth, 
         squareIdBeingDragged +1, 
         squareIdBeingDragged +gridWidth,
        ]
    
    let theMove = theMoves.includes(squareIdBeingReplaced)
    if(squareIdBeingReplaced && theMove) {
        squareIdBeingReplaced = null
    } else if (squareIdBeingReplaced && !theMove) {
        squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
}
    

//Check each rows for wins now











})


    
    
    