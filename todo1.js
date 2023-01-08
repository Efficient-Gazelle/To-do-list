const l = document.getElementById('l');
const todoList = document.getElementById('todo-list');

l.addEventListener('click', function(event) {
  // Check if the clicked element is the add button
  if (event.target.id === 'add') {
    // Get the input field value
    //const task = document.getElementById('task').value;

    // Create a new list item
    const newItem = document.createElement();

    // Set the text content of the list item
    //newItem.textContent = task;

    // Add the list item to the todo list
    todoList.appendChild(newItem);

    // Create a new input field
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Your next task');
    newInput.setAttribute('id', 'task');

    // Create a new add button
    const newButton = document.createElement('button');
    newButton.setAttribute('id', 'add');
    newButton.textContent = '+';

    /* Remove the existing input field and button
    l.removeChild(document.getElementById('task'));
    l.removeChild(document.getElementById('add'));
*/
    // Add the new input field and button to the DOM
    l.appendChild(newInput);
    l.appendChild(newButton);
  }
});