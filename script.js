const containerEl = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
const clearBtn = document.querySelector('.clear');
const changeBoxBg = document.querySelector('.changeBg');
const boxColorPicker = document.getElementById("boxBgColorPicker");
const removeBorderBtn = document.querySelector('.removeBorders');
let boxColor = '#FFFF00';

let containerWidth = containerEl.offsetWidth;
let containerHeight = containerEl.offsetHeight;

boxColorPicker.value = boxColor;

function makeGrid(numberOfBoxes = 16) {
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

function changeBoxColorOnMouseEnter() {
    document.querySelectorAll('.box').forEach((box) => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = boxColorPicker.value;
        });
    });
}

resizeBtn.addEventListener('click', () => {
    let userChoice = prompt("Enter the size of a grid");

    if (isNaN(userChoice) || userChoice <= 0) {
        alert("Please enter a valid number.");
    } else if (userChoice > 90) {
        alert("Number larger than 90 is not allowed");
    } else {
        makeGrid(Number(userChoice));
        updateBorderButtonText(); // Update the border button text based on the new grid
    }
});

clearBtn.addEventListener('click', removeBoxColor);

function removeBoxColor() {
    document.querySelectorAll('.box').forEach((box) => {
        box.classList.remove('changeColor');
        box.style.backgroundColor = 'transparent';
    });
}

removeBorderBtn.addEventListener('click', () => {
    toggleBorderClass();
    updateBorderButtonText();
});

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

makeGrid(); // Initial grid setup
