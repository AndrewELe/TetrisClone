//defining global variables here
const gameSpeed = 5;
let currentScore = 0;

//catching the board elements into javascript by using an eventlistener that does not wait for all elements to be loaded and parsed in the html document
//accessing the DOM and connecting all elements to variables for JS processing
document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.querySelector('.board')

    //capturing all the html divs and placng them into an array
    let squares = Array.from(document.querySelectorAll('.board div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#play')
    const width = 10

})

//tracking last score

//set class for shapes, render them to preview box

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

