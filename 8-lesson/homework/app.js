"use strict";

const buttonEl = document.querySelector('#btn');

buttonEl.addEventListener('click', addTask);

function addTask () {
    let inputEl = document.querySelector('#input');
    const listEl = document.querySelector('#list');
    const taskEl = document.createElement('li');

    taskEl.textContent = inputEl.value;
    listEl.append(taskEl);
    inputEl.value = '';
}