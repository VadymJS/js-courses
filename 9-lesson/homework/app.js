"use strict";

const inputNameEl = document.querySelector('#inputName');
const inputLastNameEl = document.querySelector('#inputLastName');
const inputPhoneEl = document.querySelector('#inputPhone');
const btnEl = document.querySelector('#btn');
const tableTbodyEl = document.querySelector('#table > tbody');
let regExp = /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

btnEl.addEventListener('click', addContact);

function addContact () {
    if (inputNameEl.value && inputLastNameEl.value && inputPhoneEl.value) {
        if(inputPhoneEl.value.match(regExp) !== null) {
            createContact(inputNameEl.value, inputLastNameEl.value, inputPhoneEl.value, tableTbodyEl, 'tr');
            clearInput(inputNameEl);
            clearInput(inputLastNameEl);
            clearInput(inputPhoneEl);
        } else {
            alert('Type a correct phone number, plz')
        }
    } else {
        alert('Fill all fields, plz')
    }

}

function clearInput (input) {
    input.value = '';
}

function createContact (value1, value2, value3, container, tag) {
    const contact = document.createElement(tag);
    contact.innerHTML = (`<td>${value1}</td><td>${value2}</td><td>${value3}</td>`);
    container.append(contact);
}


