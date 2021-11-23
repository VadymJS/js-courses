'use strict';

const userCont$ = $('.users-container');
const postCont$ = $('.posts-container')
                    .html('Nothing to post');

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
    const btn$ = $('<button/>')
                    .addClass('btn-show-posts')
                    .attr('id', user.id)
                    .html('Show posts');
    const user$ = $('<div/>')
                    .html(user.username)
                    .append(btn$)
    userCont$.append(user$);
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
    getUsers();
    addEvents();
}

init();