//CALCULATOR
const display=document.getElementById('display');

function todisplay(input) {
    display.value += input;
}

function remove() {
    display.value="";
}


function answer() {
    try {
        display.value=eval(display.value)
    } 
    catch (error) {
        display.value="error"
    }

}