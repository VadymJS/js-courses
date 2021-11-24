'use strict';

const authContEl = document.querySelector('.auth-container');
const URL = 'https://jsonplaceholder.typicode.com';

function renderAuthUi () {
    const loginInputEl = createFormGroup('Login', 'Enter login', 'email', 'loginInput');
    const passwordInputEl = createFormGroup('Password', 'Enter password', 'password', 'passwordInput');
    const loginBtnEl = createButton('btn btn-login', 'Login');

    appendElement(authContEl, loginInputEl);
    appendElement(authContEl, passwordInputEl);
    appendElement(authContEl, loginBtnEl);
}

function createFormGroup (name, placeholder, type, id, value) {
    const el = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    el.classList.add('form-group');
    label.textContent = name;

    input.classList.add('form-control');
    if (placeholder) {
        input.placeholder = placeholder;
    }
    if (type) {
        input.type = type;
    }
    if (id) {
        input.id = id;
    }
    if (value) {
        input.value = value;
    }

    appendElement(el, label);
    appendElement(el, input);

    return el;
}

function createButton (classes, textContent, id) {
    const el = document.createElement('button');
    if (classes) {
        el.className = classes;
    }
    if(textContent) {
        el.textContent = textContent;
    }
    if (id) {
        el.id = id;
    }

    return el;
}

function appendElement (cont, el) {
    cont.append(el);
}

function setEvents () {
    authContEl.addEventListener('click', () => eventHandler(event));
}

function validationInputs () {
    const loginInputValue = document.querySelector('#loginInput').value;
    const passwordInputValue = document.querySelector('#passwordInput').value;
    console.log()
    if (loginInputValue.trim() && passwordInputValue.trim()) {
        return true;
    } else {
        console.log('Empty inputs');
        return false;
        
    }
}

function eventHandler (e) {
    if (e.target.classList.contains('btn-login')) {
        if (validationInputs()) {
            axios.get(URL + '/posts/1')
            .then(res => res.status === 200 && console.log('Success: ', res));
        }
    }
}

function init () {
    renderAuthUi();
    setEvents();
}

init();