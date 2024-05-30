const containerEl = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
const clearBtn = document.querySelector('.clear');
const boxColorPicker = document.getElementById("boxBgColorPicker");
const removeBorderBtn = document.querySelector('.removeBorders');


// width and height of the container
let containerWidth = containerEl.offsetWidth;
let containerHeight = containerEl.offsetHeight;

resizeBtn.addEventListener('click', resizeGrid);
clearBtn.addEventListener('click', removeBoxColor);
removeBorderBtn.addEventListener('click',removeBorderAndUpdateBorderText);

function removeBorderAndUpdateBorderText()
{
    toggleBorderClass();
    updateBorderButtonText();
}

function removeBoxColor() {
    document.querySelectorAll('.box').forEach((box) => {
        box.classList.remove('changeColor');
        box.style.backgroundColor = 'transparent';
    });
}

function resizeGrid()
{
    let userChoice = prompt("Enter the size of a grid");

    if (isNaN(userChoice) || userChoice <= 0) {
        alert("Please enter a valid number.");
    } else if (userChoice > 90) {
        alert("Number larger than 90 is not allowed");
    } else {
        generateGrid(Number(userChoice));
        updateBorderButtonText(); // Update the border button text based on the new grid
    }
}

function generateGrid(numberOfBoxes = 16) 
{
    containerEl.innerHTML = '';
    for (let i = 1; i <= numberOfBoxes * numberOfBoxes; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${containerWidth / numberOfBoxes}px`;
        div.style.height = `${containerHeight / numberOfBoxes}px`;
        containerEl.appendChild(div);
    }

    changeBoxColorOnMouseEnter();
}

function toggleBorderClass() {
    document.querySelectorAll('.box').forEach((box) => {
        box.classList.toggle('border');
    });
}

function updateBorderButtonText() {
    const boxes = document.querySelectorAll('.box');
    if (boxes.length > 0 && boxes[0].classList.contains('border')) {
        removeBorderBtn.textContent = 'Remove Border';
    } else {
        removeBorderBtn.textContent = 'Show Border';
    }
}

function removeBoxColor() {
    document.querySelectorAll('.box').forEach((box) => {
        box.style.backgroundColor = '';
    });
}

function updateBorderButtonText() {
    const boxes = document.querySelectorAll('.box');
    if (boxes.length > 0 && boxes[0].classList.contains('border')) {
        removeBorderBtn.textContent = 'Remove Border';
    } else {
        removeBorderBtn.textContent = 'Show Border';
    }
}

function changeBoxColorOnMouseEnter() 
{
    document.querySelectorAll('.box').forEach((box) => {
        
        box.addEventListener('mouseenter', () => {


            if(box.style.backgroundColor ==='')
            {
                
                let red = getRandomNum();
                let blue = getRandomNum();
                let green = getRandomNum();
                
                box.style.backgroundColor = `rgb(${red},${blue},${green})`;
            }
    else 
        {

            let currentBackgroundColor = window.getComputedStyle(box).backgroundColor;

                // / Extracting RGB values in the form of array 
                let rgbArray = currentBackgroundColor.match(/\d+/g);
                // Separate r, g, and b values
                let red = rgbArray[0];
                let blue =rgbArray[1];
                let green = rgbArray[2];

                const DECREMENT_RGB_BY  = 5;
                
                for(let i = 1;i<=10;i++)
                    {
                        red -=DECREMENT_RGB_BY;
                        green -=DECREMENT_RGB_BY;
                        blue -=DECREMENT_RGB_BY;
                        


                        // rgb value does not goes below zero
                        red = red < 0 ? 0 : red;
                        blue =  blue < 0 ? 0 : blue;
                        green =  green < 0 ? 0 : green;

                        box.style.backgroundColor = `rgba(${red},${green},${blue})`;

                      
                    }

                }

        });
    });
}

function getRandomNum()
{
    return parseInt(Math.random()*255 +1);
}

generateGrid(); 
