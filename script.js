const containerEl = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
const clearBtn = document.querySelector('.clear');
const changeBoxBg = document.querySelector('.changeBg');
const boxColorPicker = document.getElementById("boxBgColorPicker");
const removeBorderBtn = document.querySelector('.removeBorders');
const eraseBtn = document.querySelector('.erase');
let boxColor = '#FFFF00';

let containerWidth  = containerEl.offsetWidth;
let containerHeight = containerEl.offsetHeight;


makeGrid();

boxColorPicker.value = boxColor;    




    function makeGrid(numberOfBoxes=16)
    {
        containerEl.innerHTML = '';

        for(let i =1;i<=numberOfBoxes*numberOfBoxes;i++)
            {
                let div = document.createElement('div');
                div.classList.add('box');
                div.style.width = `${containerWidth / numberOfBoxes}px`;
                div.style.height = `${containerHeight / numberOfBoxes}px`;
                containerEl.appendChild(div);
            }

            changeBoxColorOnMouseEnter();
            
    }


function changeBoxColorOnMouseEnter()
{
    document.querySelectorAll('.box').forEach((box)=>{

        box.addEventListener('mouseenter',()=>
        {
            box.style.backgroundColor = boxColorPicker.value;
        });
    })
}


   
    // Resize grid 
    resizeBtn.addEventListener('click',()=>{
        let userChoice = Number(prompt("Enter the size of a grid"));

        if(userChoice>90)
            {
                alert("Number larger than 90 is not allowed");
            }
        else
            {
                makeGrid(userChoice);
                toggleBorderClass();
            }
    })


clearBtn.addEventListener('click',removeBoxColor);


function removeBoxColor()
{
    document.querySelectorAll('.box').forEach((box)=>{
        box.classList.remove('changeColor');
        box.style.backgroundColor  = 'transparent';
    })
}



// Remove borders

removeBorderBtn.addEventListener('click',toggleBorderClass);


function toggleBorderClass(){
    document.querySelectorAll('.box').forEach((box)=>{
        box.classList.toggle('border');
        if(box.classList.contains('border'))
            {
                removeBorderBtn.textContent = 'Remove Border';
            }
        else 
        {
            removeBorderBtn.textContent = 'Show Border';
        }
    })
}



