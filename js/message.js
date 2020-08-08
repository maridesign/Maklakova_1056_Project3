let inputSubmit = document.querySelectorAll('.inputSubmit');
let inpMessage = document.querySelectorAll('.inputMessage');

for (let i = 0; i < inputSubmit.length; i++) {
    inputSubmit[i].addEventListener('click', (e) => {
        e.preventDefault();

        inpMessage[i].style.opacity = '1';
        inpMessage[i].style.visibility = 'visible';
    })
}
