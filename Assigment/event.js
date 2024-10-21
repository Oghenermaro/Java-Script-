const hidebutton = document.getElementById('hidebutton');
const showbutton = document.getElementById('showbutton');
const box = document.getElementById('box');
const text = document.getElementById(`text`);

text.textContent = "This page is not available";


hidebutton.addEventListener('click', () => {
    if(box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none"
    }
});

showbutton.addEventListener('click', () => {
    if(box.style.display === "block") {
        box.style.display = "block";
    } else {
        box.style.display = "block"
    }
})