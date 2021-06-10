

// SELETORES
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//LISTA DE EVENTOS
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//FUNÇÕES

function addTodo(event){
    //prevent form submitting
    event.preventDefault();

    //todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //criando LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
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
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //Append to list
    todoList.appendChild(todoDiv);

    //limpa valor do input
    todoInput.value = "";


}

function deleteCheck(event){
    const item = event.target;

    // delete todo
    if (item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
    //    animacao ao deletar
        todo.classList.add("fall");
        todo.addEventListener('transitionend',()=>{
            todo.remove()            
        });
      
    }

    // Marcar check
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }


}

    //Filtro tarefas

  function filterTodo(e) {
      const todos = todoList.childNodes;
      todos.forEach(function(todo){
          switch(e.target.value) {
              case "all":
                  todo.style.display = "flex";
                  break;
            case "completed":
                if (todo.classList.contains ("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                todo.style.display = "flex";
                }else{
                todo.style.display = "none";
                }
                break;   
            }
      });
  }


