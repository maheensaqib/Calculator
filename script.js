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
    // const display = document.getElementById("display");
    // try {
    //     display.textContent = eval(display.textContent);
    // } catch (error) {
    //     display.textContent = "Error";
    // }
    const value = document.getElementById("display");
const display=value.textContent;
let op;
if(display.includes("+")){
    op='+';
}
else if(display.includes("-")){
    op='-';
}
else if(display.includes("*")){
    op='*';
}
else if(display.includes("/")){
    op='/';
}

const arr=display.split(op);
const num1=parseFloat(arr[0]);
const num2=parseFloat(arr[1]);
let ans;
if(op==="+"){
    ans=num1+num2;
}
if(op==="-"){
    ans=num1-num2;
}
if(op==="*"){
    ans=num1*num2;
}
if(op==="/"){
    ans=num1/num2;
}
value.textContent=ans;
}
