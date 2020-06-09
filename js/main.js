let menu = document.querySelector('nav');

let items = document.querySelectorAll('.menuItem');
let button = document.querySelector('.menuButton');

let active = false;

let lenght = items.length;
const arc = 2 * Math.PI * (1 / lenght);
const radius = 40;

button.addEventListener('click', (e) => {
    e.preventDefault();

    active = !active;

    if (active) {
        button.classList.add('navButtonLines__active');

        for (let i = 0; i < items.length; i++) {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            console.log(x);
            console.log(y);

            items[i].style.left = 50 + x + '%';
            items[i].style.top = 50 + y + '%';
        }
    }
    else {
        button.classList.remove('navButtonLines__active');

        for (let i = 0; i < items.length; i++) {
            items[i].removeAttribute('style');
        }
    }
})
let menu = document.querySelector('nav');

let items = document.querySelectorAll('.menuItem');
let button = document.querySelector('.menuButton');

let active = false;

let lenght = items.length;
const arc = 2 * Math.PI * (1 / lenght);
const radius = 40;

button.addEventListener('click', (e) => {
    e.preventDefault();

    active = !active;

    if (active) {
        button.classList.add('navButtonLines__active');

        for (let i = 0; i < items.length; i++) {
            const angle = i * arc;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            console.log(x);
            console.log(y);

            items[i].style.left = 50 + x + '%';
            items[i].style.top = 50 + y + '%';
        }
    }
    else {
        button.classList.remove('navButtonLines__active');

        for (let i = 0; i < items.length; i++) {
            items[i].removeAttribute('style');
        }
    }
})
