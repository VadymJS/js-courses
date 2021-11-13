'use strict';

const userCont$ = $('.users-container');
const postCont$ = $('.posts-container')
                    .html('Nothing to post');

function renderUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => json.forEach(user => {
            const btn$ = $('<button/>')
                            .addClass('btn-show-posts')
                            .attr('id', user.id)
                            .html('Show posts');
            const user$ = $('<div/>')
                            .html(user.username)
                            .append(btn$)
            userCont$.append(user$);
        }));
}

function addEvents() {
    userCont$.on('click', '.btn-show-posts', () => showPosts(event)) 
}

function showPosts(e) {
    postCont$.html('');
    let i = 1;
    fetch(` https://jsonplaceholder.typicode.com/posts?userId=${e.target.id} `)
        .then((response) => response.json())
        .then((json) => json.forEach(post => {
            const post$ = $('<div/>') 
                            .html(`<p>${i} post: ${post.title}</p><p>${post.body}</p>`);
            i++;
            postCont$.append(post$);
        }));
}

function init () {
    renderUsers();
    addEvents();
}

init();