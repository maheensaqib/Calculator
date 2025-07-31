function getvalue(button) {
    const btnvalue = button.value;
    const display = document.getElementById("display");
    display.textContent += btnvalue;
}
function deleteDisplay(button) {
    const display = document.getElementById("display");
    display.textContent = null;
}
function equal() {
    const display = document.getElementById("display");
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Error";
    }
}
