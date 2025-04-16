const addTodo = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const clearAll = document.querySelector('.clear-all');

let count = 0;
addTodo.onclick = (e) => {
    e.preventDefault();
    const todoListItem = document.createElement('li');
    const taskInfo = document.querySelector('.task-info');
    if (todoInput.value !== "") {
        todoListItem.innerHTML = `${todoInput.value} <button class="del-btn"><i class="fa-solid fa-trash"></i></button>`;
        todoList.appendChild(todoListItem);
        todoInput.value = "";
        count++;
        if(count === 1) {
            taskInfo.innerHTML = `You have ${count} pending task`;
        }
        else {taskInfo.innerHTML = `You have ${count} pending tasks. Don't forget!`;}
        
    }

    const delBtn = document.querySelector('.del-btn');
    todoListItem.onclick = () => {
        todoListItem.remove();
        count--;
        if(count === 1) {
            taskInfo.innerHTML = `You have ${count} pending task`;
        } else if(count === 0) {
            taskInfo.innerHTML = `You have no any task`;
        } else
        taskInfo.innerHTML = `You have ${count} pending tasks`;

    }

    clearAll.onclick = () => {
        todoList.innerHTML = "";
        count = 0;
        taskInfo.innerHTML = `You have no any task`;
    }
}

