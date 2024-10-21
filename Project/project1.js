// to declare number to hide
let numberToHide = 10;

// to generate random number so we can get the box by that id
boxId = Math.floor(Math.random() * 5) + 1;

// to get the div we want to hide the number in
divToHideNumber = document.getElementById(boxId)

// to hide the number in the selected div
let p = divToHideNumber.querySelector('p');

p.textContent = numberToHide;

allDivs = document.querySelectorAll('.box')

allDivs.forEach(div => {
    div.addEventListener('click', ()=> {
        const door = div.querySelector('.door')

        if ( door.style.transform === 'translateX(-90px)') {
            door.style.transform = 'translateX(0px)';
        } else{
            door.style.transform = 'translateX(-90px)';
        }
    })
});

