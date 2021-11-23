'use strict';

const body$ = $('.wrapper');
const userCont$ = $('.users-container');
const actionCont$ = $('.action-container');
const usernameInput$ = $('<input/>')
                        .addClass('form-control')
                        .attr('placeholder', 'Type username');
const emailInput$ = $('<input/>')
                        .addClass('form-control')
                        .attr('placeholder', 'Type email');

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => new Promise((res, rej) => {
            setTimeout(() => {
                res(json)
            }, 300)
        })
        .then((r) => {
            r.forEach((user) => {
                renderUsers(user);
            })
        })
        .catch((e) => {
            console.log(e)
        })
    )
}

function renderUsers(user) {
    const btnEdit$ = $('<button/>')
                    .addClass('btn btn-edit')
                    .attr('id', `btnEdit${user.id}`)
                    .html('Edit');
    const btnDelete$ = $('<button/>')
                    .addClass('btn btn-delete')
                    .attr('id', `btnDelete${user.id}`)
                    .html('Delete');
    const btnCont$ = $('<div/>')
                    .append(btnEdit$)
                    .append(btnDelete$)
    const user$ = $('<div/>')
                    .html(`<div><p>${user.username}</p><p>${user.email}</p></div>`)
                    .append(btnCont$)
    userCont$.append(user$);
}

function addCreateBtn() {
    const btnCreate$ = $('<button/>')
                    .addClass('btn btn-create')
                    .html('Create new');
    userCont$.prepend(btnCreate$);
}

function addEventListener() {
    body$.on('click', '.btn-create', createUser);
    body$.on('click', '.btn-edit', () => editUser(event));
    body$.on('click', '.btn-delete', () => deleteUser(event));
}

function deleteUser(e) {
    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id.match(/\d+/)}`, {
        method: 'DELETE',
    });
}

function editUser(e) {
    const saveBtn$ = $('<button/>')
                    .addClass('btn btn-save')
                    .on('click', () => fetchEditUser(e.target.id.match(/\d+/)))
                    .html('Save');
    const cancelBtn$ = $('<button/>')
                    .addClass('btn btn-cancel')
                    .on('click', () => actionCont$.html('').removeClass('is-active'))
                    .html('Cancel');
    fetch(`https://jsonplaceholder.typicode.com/users/${e.target.id.match(/\d+/)}`)
        .then((response) => response.json())
        .then((user) => {
            usernameInput$[0].value = user.username;
            emailInput$[0].value = user.email;
        });
    actionCont$.html('')
            .addClass('is-active')
            .append(usernameInput$)
            .append(emailInput$)
            .append(saveBtn$)
            .append(cancelBtn$);     
}

function fetchEditUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            username: usernameInput$[0].value,
            email: emailInput$[0].value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

    usernameInput$[0].value = '';
    emailInput$[0].value = '';
}

function createUser() {
    const addBtn$ = $('<button/>')
                    .addClass('btn btn-add')
                    .on('click', fetchCreateUser)
                    .html('Add');
    const cancelBtn$ = $('<button/>')
                    .addClass('btn btn-cancel')
                    .on('click', () => actionCont$.html('').removeClass('is-active'))
                    .html('Cancel');
    actionCont$.html('')
                .addClass('is-active')
                .append(usernameInput$)
                .append(emailInput$)
                .append(addBtn$)
                .append(cancelBtn$);
}

function fetchCreateUser() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameInput$[0].value,
            email: emailInput$[0].value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

    usernameInput$[0].value = '';
    emailInput$[0].value = '';
}

function init() {
    getUsers();
    addCreateBtn();
    addEventListener();
}

init();