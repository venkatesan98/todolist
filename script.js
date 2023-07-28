// Get references to HTML elements
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.innerText = todoText;
    li.addEventListener('click', toggleTodo);
    todoList.appendChild(li);
    todoInput.value = '';
  }
}

// Function to toggle todo item completion
function toggleTodo(event) {
  const li = event.target;
  li.classList.toggle('completed');
}

// Listen for 'Enter' key press to add a new todo
todoInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});