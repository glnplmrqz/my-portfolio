// Typing Animation
const position = ["Web Developer"];
let count = 0;
let index = 0;
let currentText = " ";
let letter = "";

// Typing Function
function type(){
    if(count === position.length) {
        count = 0;
    }

    currentText = position[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typing-text").textContent = letter;

    if(letter.length === currentText.length) {
        setTimeout(erase, 1500);
    }else {
        setTimeout(type, 100);
    }
}

// Erase Function
function erase() {
    letter = currentText.slice(0, --index);
    document.querySelector(".typing-text").textContent = letter;

    if(letter.length === 0){
        count++;
        index = 0;
        setTimeout(type, 500);
    }else {
        setTimeout(erase, 50);
    }
}

// Start Typing Effect
setTimeout(type, 1000);