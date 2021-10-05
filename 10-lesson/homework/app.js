"use strict"

const btn = document.querySelector('#btn');
const inputTask = document.querySelector('#input');
const list = document.querySelector('#list');

btn.addEventListener('click', addTask);

function createTask () {
    if (inputTask.value.trim()) {
        const taskEl = document.createElement('li');
        taskEl.textContent = inputTask.value;
        taskEl.addEventListener('click', () => tickTask(taskEl));
        addDeleteButton(taskEl);
        list.append(taskEl);
    } else {
        alert('Type something, plz');
    }
}

function addDeleteButton (el) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', () => deleteTask(deleteBtn));
    el.append(deleteBtn);
}

function addTask () {
    createTask();
    clearInput(inputTask);
}

function deleteTask (el) {
    el.parentNode.remove();
}

function clearInput (input) {
    input.value = '';
}

function tickTask (el) {
    el.classList.toggle('complete');
}



