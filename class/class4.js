const buttonColour = document.getElementById('buttonColour');
const text = document.getElementById('text');

buttonColour.addEventListener('click', () => {
    if(text.style.color === "aqua") {
        text.style.color = "red";
    } else {
        text.style.color = "aqua"
    }
});
