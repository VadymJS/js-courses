const buttonEl = document.querySelector('#btn');
const inputEl = document.querySelector('#input');
const listEl = document.querySelector('#list');
const taskEl = document.createElement('li');


buttonEl.addEventListener('click', addTask);

function addTask () {
    console.log(inputEl.value);
    taskEl.textContent = inputEl.value;
    listEl.append(taskEl);
    inputEl.value = ('');
}