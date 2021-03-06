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
            console.log(e);
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
    userCont$.on('click', '.btn-show-posts', () => getPosts(event)) 
}

function getPosts(e) {
    postCont$.html('');
    fetch(` https://jsonplaceholder.typicode.com/posts?userId=${e.target.id} `)
        .then((response) => response.json())
        .then((json) => new Promise((res, rej) => {
            setTimeout(() => {
                res(json)
            }, 300)
        })
        .then((r) => {
            r.forEach((post) => {
                renderPosts(post);
            })
        })
        .catch((e) => {
            console.log(e);
        })
    )
}

function renderPosts (post, i) {
    const post$ = $('<div/>') 
                    .html(`<h3>${post.title}</h3><p>${post.body}</p>`);
    postCont$.append(post$);
}

function init () {
    getUsers();
    addEvents();
}

init();



// function sum() {
//     return Array.prototype.reduce.call(arguments, (sum, value) => {
//         return sum + value;
//     }, 0)
// }

// console.log(sum(2,3,5));
// console.log(sum(2,3));
// console.log(sum(2,3,1,1,1,1,1,1));

// function findUnique(arr) {
//     let newArr = ['123'];
//     return newArr = arr.filter((el) => {
//         if(!newArr.includes(el)) {
//             newArr.push(el);
//         }
//     })
// }

// console.log(findUnique(['a', 'b', 'c', 'c', 'b', 'a']));
// console.log(findUnique([1, 2, 3, 4, 5, 5, 2]));
