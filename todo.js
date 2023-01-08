/*
const buttonA = document.querySelector('#add'); //selects the html query using the id
buttonA.onclick= () => {        //uses the function of onclick of buttonA 
    console.log("hello");
    const bigmouth = 'I\'ve got no right to take my place…'; //Escaping the inverted comma
    console.log(bigmouth);
}
*/
const l= document.getElementById('l')
const task = document.getElementById('task');
const button = document.querySelector("button"); //selects every button in the code
const todolist= document.getElementById('todo-list');
let container = document.getElementById("inputContainer")
function add(){
    // Create a new input field
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Your next task');
    newInput.setAttribute('id', 'task');

    // Create a new add button
    const newButton = document.createElement('button');
    newButton.setAttribute('id', 'add');
    newButton.textContent = '+';
    let newb = document.createElement('input')
    newb.setAttribute('class','newadd')
    newb.setAttribute('style','display:block;')
    newButton.setAttribute('style','display:block')
    container.appendChild(newb);
    container.appendChild(newButton);
    newb.textContent = task.value;

    
    task.value=""
    
    //button.appendChild(newb);
}
l.addEventListener("click",add); //runs the function add when the button is clicked