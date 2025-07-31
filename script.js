function getvalue(button) {
    const btnvalue = button.value;
    const display = document.getElementById("display");
    display.textContent += btnvalue;
}
function deleteDisplay(button) {
    const display = document.getElementById("display");
    display.textContent = null;
}