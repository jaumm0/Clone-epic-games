document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('input[name="Email"]');
    var passwordField = document.querySelector('input[name="password"]');
    var emailError = email.nextElementSibling;
    var passwordError = passwordField.nextElementSibling;

    var valid = true;

    if (!email.value) {
        email.classList.add('invalid');
        emailError.classList.add('show');
        valid = false;
    } else {
        email.classList.remove('invalid');
        emailError.classList.remove('show');
    }

    if (!passwordField.value) {
        passwordField.classList.add('invalid');
        passwordError.classList.add('show');
        valid = false;
    } else {
        passwordField.classList.remove('invalid');
        passwordError.classList.remove('show');
    }

    if (valid) {
        // Form is valid, submit the form or handle the login process
        console.log('Formulário válido!');
    }
});
