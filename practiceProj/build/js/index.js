"use strict";
const box = document.querySelector('.box');
const button = document.getElementById('button');
const input = document.getElementById('input');
const span = document.querySelector('span');
button.addEventListener('click', () => {
    const color = input.value;
    box.style.backgroundColor = color;
    span.textContent = color;
});
