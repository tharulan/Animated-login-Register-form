const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

document.addEventListener("DOMContentLoaded", function () {
    // Selecting the email and password input fields
    var emailInput = document.querySelector('input[type="email"]');
    var passwordInput = document.querySelector('input[type="password"]');

    // Function to validate email format
    function validateEmail(email) {
        // You can use a more sophisticated email validation regex if needed
        var emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function validatePassword(password) {
        // Set your desired password length requirement
        return password.length >= 6;
    }

    // Event listener for email input
    emailInput.addEventListener("input", function () {
        var email = emailInput.value.trim();
        var emailValid = validateEmail(email);

        if (emailValid || email.length === 0) {
            // Remove any previous error class or message
            emailInput.classList.remove("error");
        } else {
            // Add error class and display error message
            emailInput.classList.add("error");
        }
    });

    // Event listener for password input
    passwordInput.addEventListener("input", function () {
        var password = passwordInput.value;
        var passwordValid = validatePassword(password);

        if (passwordValid || password.length === 0) {
            // Remove any previous error class or message
            passwordInput.classList.remove("error");
        } else {
            // Add error class and display error message
            passwordInput.classList.add("error");
        }
    });
});
