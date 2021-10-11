"use strict"

const btn = document.querySelector('#btn');
const inputTask = document.querySelector('#input');
const list = document.querySelector('#list');

btn.addEventListener('click', addTask);
list.addEventListener('click', clickContainer);

function createTask () {
    if (inputTask.value.trim()) {
        const taskEl = document.createElement('li');
        taskEl.textContent = inputTask.value;
        taskEl.id = 'task';
        addDeleteButton(taskEl);
        list.append(taskEl);
    } else {
        alert('Type something, plz');
    }
}

function addDeleteButton (el) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.id = 'btn-delete'
    el.append(deleteBtn);
}

function addTask () {
    createTask();
    clearInput(inputTask);
}

function clearInput (input) {
    input.value = '';
}

function clickContainer (e) {
    console.log(e.target.id)
    if(e.target.id === 'btn-delete') {
        e.target.parentNode.remove();
    } else if (e.target.id === 'task') {
        e.stopPropagation();
        e.target.classList.toggle('complete');
    }
}



