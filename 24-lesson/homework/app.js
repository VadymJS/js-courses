'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let width = 5;
let height = 5;
let color = 'black';

canvas.addEventListener('mousedown', draw);

function draw () {
    
    canvas.onmousemove = function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.fillRect(x - width/2, y - height/2, width, height);
    }

    canvas.onmouseup = function () {
        canvas.onmousemove = null;
    }
}

function renderColors () {
    const colorsCont = document.querySelector('.palette');
    const colors = ['black', 'blue', 'red', 'green', 'grey'];

    colors.forEach((color) => {
        const colorEl = document.createElement('div');
        colorEl.classList.add('color');
        colorEl.id = color;
        if (color === 'black') {
            colorEl.classList.add('is-active');
        }
        colorEl.style = `background-color: ${color}`;
        colorsCont.append(colorEl);
    })

    colorsCont.addEventListener('click', () => changeColor(event));

    function changeColor(e) {
        if (e.target.className.includes('color')) {
            color = e.target.id;
            document.querySelector('#eraser').classList.remove('is-active');
            document.querySelectorAll('.color').forEach((color) => color.classList.remove('is-active'));
            document.querySelector(`#${e.target.id}`).classList.add('is-active');
        }
    }
}

function renderSizes() {
    const sizesCont = document.querySelector('.width');
    const sizes = ['5', '10', '20'];

    sizes.forEach((size) => {
        const sizeEl = document.createElement('div');
        sizeEl.classList.add('size');
        sizeEl.id = size;
        if (size === '5') {
            sizeEl.classList.add('is-active');
        }
        sizeEl.innerHTML = `${size}px`
        sizesCont.append(sizeEl);
    })

    sizesCont.addEventListener('click', () => changeSize(event));

    function changeSize(e) {
        if (e.target.className.includes('size')) {
            console.log(e.target.id)
            width = e.target.id;
            height = e.target.id;
            document.querySelectorAll('.size').forEach((size) => size.classList.remove('is-active'));
            document.getElementById(`${e.target.id}`).classList.add('is-active');
        }
    }
}

function renderEraser () {
    const sizesCont = document.querySelector('.width');
    const eraserEl = document.createElement('div');

    eraserEl.id = 'eraser';
    eraserEl.innerHTML = 'Clear';

    sizesCont.append(eraserEl);

    eraserEl.addEventListener('click', clear);

    function clear() {
        color = 'lightgrey';
        document.querySelectorAll('.color').forEach((color) => color.classList.remove('is-active'));
        eraserEl.classList.add('is-active');
    }
}

function init() {
    renderColors();
    renderSizes();
    renderEraser();
}

init();