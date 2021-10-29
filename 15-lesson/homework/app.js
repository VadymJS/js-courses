'use strict';

const inputEl = document.querySelector('#input');
const btnEl = document.querySelector('#btn');
const containerEl = document.querySelector('.user-info');
btnEl.addEventListener('click', () => userCheck(inputEl.value));

function userCheck(login) {
    if (inputEl.value) {
        axios.get(`https://api.github.com/users/${login}`)
            .then(function (response) {
            containerEl.innerHTML = 
                '<img src="' + response.data.avatar_url + '">' + 
                '<p>Public repos:' + ' ' + response.data.public_repos + '</p>' +
                '<p>Followers:' + ' ' + response.data.followers + '</p>' +
                '<p>Following:' + ' ' + response.data.following + '</p>'
            ;
        })
            .catch(function (error) {
            containerEl.innerHTML = '<p>' + error + '</p>';
        });
    } else {
        containerEl.innerHTML = '<p>Error: type something</p>';
    }
    
}
