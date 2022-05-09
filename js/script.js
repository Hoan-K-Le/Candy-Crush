document.addEventListener('DOMContentLoaded', () => {
    const candyGrid = document.querySelector('.candyGrid')
    const gridWidth = 6
    // create an empty array like tictactoe
    const eachBox = []
    let score = 0

    //Declare the color and the matches
    const zombieColors = [
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
        for(let i = 0; i < gridWidth*gridWidth; i++) { //6x6 board 
            // start creating a div for the square so each box has a square
            const square = document.createElement('div')
            //Figure out a way to drag them to a certain spot(RESEARCH)
            square.setAttribute('draggable', true) // Source (stackoverflow)
            //try find a way to figure out which one is being dragged by giving them class/id
            square.setAttribute('id', i) // loop over 15 times thats why theres an i
            // use the same random color theory as the div homework
            let randomColor = Math.floor(Math.random () * zombieColors.length) 
            square.style.backgroundColor = zombieColors[randomColor]
            candyGrid.appendChild(square)
            eachBox.push(square)
        }
    }
    createBoard()
    // this lets me know where its being drag to and at which position.
    let colorBeingDragged; 
    let colorBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    eachBox.forEach(square => square.addEventListener('dragstart', dragStart)) // click on image to drag
    eachBox.forEach(square => square.addEventListener('dragend', dragEnd)) // after drag drop, you swap the two images
    eachBox.forEach(square => square.addEventListener('dragover', dragOver)) // moving image around while its clicked
    eachBox.forEach(square => square.addEventListener('dragenter', dragEnter)) // moving image onto another one
    eachBox.forEach(square => square.addEventListener('dragleave', dragLeave)) // dragged image leaving another image
    eachBox.forEach(square => square.addEventListener('drop', dragDrop)) // drag image over another image, and then drop it on top of it

    //Figure out a way where if you hover the color to the next, it'll change the color
 // this.id refers to that id of the function indepently than the entire thing.
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
        eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced // etch-sketch notes
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
        eachBox[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
        eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    }else eachBox[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
}
    

// figure out how to get scores now with the rows/columns

function eachRow () {
    for (let i = 0; i < 33; i++) {
        let threeRow = [i, i+1, i+2]
        let theColor = eachBox[i].style.backgroundColor
        const ifBlank = eachBox[i].style.backgroundColor === ''

        if (threeRow.every(index => eachBox[index].style.backgroundColor === theColor && !ifBlank)) {
            score += 3
            threeRow.forEach(index => {
                eachBox[index].style.backgroundColor = ''
            })
        }
    }
}

eachRow()
// constantly continues the pages in 100ms 
window.setInterval( () => {
    eachRow ()
}, 100)










})


    
    
    