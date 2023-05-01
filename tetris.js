//defining global variables here
const gameSpeed = 5;
let currentScore = 0;

//catching the board elements into javascript by using an eventlistener that does not wait for all elements to be loaded and parsed in the html document

document.addEventListener('DOMContentLoaded', () => {


    //this seeds the shape grid, allowing to create the 5 different tetris shapes
    const width = 10

    //accessing the DOM and connecting all elements to variables for JS processing
    const gameBoard = document.querySelector('.board')

    //capturing all the html divs and placng them into an array
    let squares = Array.from(document.querySelectorAll('.board div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#play')

    //tracking last score

    //set class for shapes, render them to preview box

    //shapes are declared here, each shape has an array and each shape has 4 different positions
    /* 
    note that the grid position is starting at 0, so for example the blocks that need to be colored for the first L position would correspond to the grid position of 

    0 1  2
    0 11 0
    0 21 0

    */
    const lShape = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2]
        [width, width*2, width*2+1, width*2]
        [width, width*2, width*2+1, width*2+2]
    ]

    const oShape = [
        [0, 1, width, width+1]
        [0, 1, width, width+1]
        [0, 1, width, width+1]
        [0, 1, width, width+1]
    ]

    const zShape = [
        [0, width, width+1, width*2+1]
        [width+1, width+2, width*2, width*2+1]
        [0, width, width+1, width*2+1]
        [width+1, width+2, width*2, width*2+1]
    ]

    const tShape = [
        [1, width,  width+1, width+2]
        [1, width+1, width+2, width*2+1]
        [width, width+1, width+2, width*2+1]
        [1,width, width+1, width*2+1]
    ]

    const iShape = [
        [1, width+1, width*2+1, width*3+1]
        [width, width+1, width+2, width+3]
        [1, width+1, width*2+1, width*3+1]
        [width, width+1, width+2, width+3]
    ]


    //shape starting position on the board
    let startPosition = 4

    class Shapes {
        constructor() {

        }
    }


})
//set function to store a grid as a data structure for javascript to utilize and call render function anytime the grid state changes
 
//set function for play again after the board has filled, track grid for filled position above a certain point

//button to rotate shape fucntionality (rotation)

//Logic starts here

    //check for location of shape in grid and tracking position of shape

    //collision detection for when shape hits the top of the last placed shape

    //function to check for the top of the grid and making player loose

    //function clear solid line positions and add points to the score
        //2x points for clearing a full tetris

//render function here

