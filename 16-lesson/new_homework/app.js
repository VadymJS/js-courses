'use strict';

const userContEl = document.querySelector('.users-container');
const postContEl = document.querySelector('.posts-container');
let usersArr = [];

function renderUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json.forEach(user => {
            const userEl = document.createElement('div');
            const btnEl = document.createElement('button');
            btnEl.append('Show posts');
            btnEl.classList.add('btn-show-posts');
            btnEl.id = user.id;
            userEl.innerHTML = `<span>${user.username}</span>`;
            userEl.append(btnEl);
            userContEl.append(userEl);
        }));
}

function setEvents() {
    userContEl.addEventListener('click', () => clickHandler(event))
}

function clickHandler(e) {
    if (e.target.className === 'btn-show-posts') {
        postContEl.innerHTML = '';
        let i = 1;
        fetch(` https://jsonplaceholder.typicode.com/posts?userId=${e.target.id} `)
        .then((response) => response.json())
        .then((json) => json.forEach(post => {
            const postEl = document.createElement('div');
            postEl.innerHTML = `<p>${i} post: ${post.title}</p><p>${post.body}</p>`;
            i++;
            postContEl.append(postEl);
        }));
    }
}

function init() {
    postContEl.innerHTML = '<p>Nothing to post</p>'
    renderUsers();
    setEvents();
}


init();

