const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    const first = form['firstName'].value;
    const last = form['lastName'].value;
    const email = form['email'].value;
    const pass = form['password'].value;

    if (first === '') {
        addError('firstName', 'First Name cannot be empty');
    } else {
        removeError('firstName');
    }

    if (last === '') {
        addError('lastName', 'Last Name cannot be empty');
    } else {
        removeError('lastName');
    }

    if (email === '') {
        addError('email', 'Email cannot be empty');
    } else if (!validateEmail(email)) {
        addError('email', 'Looks like this is not an email');
    } else {
        removeError('email');
    }

    if (pass === '') {
        addError('password', 'Password cannot be empty');
    } else {
        removeError('password');
    }
});

function addError(field, message) {
    const small = form[field].parentNode.querySelector('small');
    const input = form[field].parentNode.querySelector('input');
    const errorIcon = form[field].parentNode.querySelector('img');
    input.style.border = '2px solid hsl(0, 100%, 74%)';
    input.removeAttribute('placeholder');
    errorIcon.style.opacity = '1';
    small.innerText = message;
    small.style.opacity = '1';
}

function removeError(field) {
    const small = form[field].parentNode.querySelector('small');
    const input = form[field].parentNode.querySelector('input');
    const errorIcon = form[field].parentNode.querySelector('img');
    input.style.border = null;
    errorIcon.style.opacity = '0';
    small.style.opacity = '0';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}