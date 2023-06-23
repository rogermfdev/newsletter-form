
    document.addEventListener('DOMContentLoaded', function() {
        const emailValue = localStorage.getItem('emailValue');
        const emailConfirmation = document.getElementById('email-confirmation');
        if (emailConfirmation && emailValue) {
            emailConfirmation.textContent = emailValue;
        }
    });
 