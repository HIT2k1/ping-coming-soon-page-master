let form = document.querySelector('.form');
let inputElement = form.querySelector("input[type='text']");
let message = form.querySelector('.message');

form.onsubmit = function() {
    event.preventDefault();
    if (inputElement.value == '') {
        message.innerHTML = 'Whoops! It looks like you forgot to add your email';
    }
    else if (!inputElement.value.includes('@')) {
        message.innerHTML = 'Please provide a valid email address';
    }
    else {
        message.innerHTML = '';
    }
}