

// SELETORES
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//LISTA DE EVENTOS
todoButton.addEventListener('click',addTodo);



//FUNÇÕES

function addTodo(event){
    //prevent form submitting
    event.preventDefault();

    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //criando LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Botao-Check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Botao-apagar
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    
    //Append to list

    todoList.appendChild(todoDiv);

}