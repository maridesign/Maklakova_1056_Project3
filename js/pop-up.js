let body = document.querySelector('body');
let popup = document.querySelectorAll('.popUp');
let popupClose = document.querySelectorAll('.close');
let cards = document.querySelectorAll('.card__item');

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (event) {
        event.preventDefault();

        popup[i].classList.add('is-active');
        body.classList.add('is-disable');
    })
}

for (let i = 0; i < cards.length; i++) {
    popupClose[i].addEventListener('click', function () {
        event.preventDefault();

        popup[i].classList.remove('is-active');
        body.classList.remove('is-disable')
    })
}