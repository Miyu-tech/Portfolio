const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.textContent = '完了';
    doneButton.classList.add('done');
    doneButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    todoInput.value = '';
})