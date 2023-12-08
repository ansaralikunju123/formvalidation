document.getElementById('btn1').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for now
  validatesignup();
});

function validatesignup() {
    // Retrieve form values
    var email = document.getElementById('exampleInputEmail1').value;
    var phone = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var confirmPassword = document.getElementById('exampleInputPassword2').value;
    var passwordStrength = document.getElementById('passwordStrength');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    // Regular expressions
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^(\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // Email validation
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address';
    } else {
        emailError.textContent = '';
    }

    // Phone number validation
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Invalid phone number (10 digits expected)';
    } else {
        phoneError.textContent = '';
    }

    // Password strength validation
    var hasNumber = /\d/.test(password);
    var hasLower = /[a-z]/.test(password);
    var hasUpper = /[A-Z]/.test(password);

    if (password.length < 8) {
        passwordStrength.textContent = 'Weak';
        passwordStrength.className = 'password-strength text-danger';
    } else if (password.length < 12) {
        if (hasNumber && (hasLower || hasUpper)) {
            passwordStrength.textContent = 'Medium';
            passwordStrength.className = 'password-strength text-warning';
        } else {
            passwordStrength.textContent = 'Poor';
            passwordStrength.className = 'password-strength text-danger';
        }
    } else {
        if (hasNumber && hasLower && hasUpper) {
            passwordStrength.textContent = 'Strong';
            passwordStrength.className = 'password-strength text-success';
        } else {
            passwordStrength.textContent = 'Medium';
            passwordStrength.className = 'password-strength text-warning';
        }
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.textContent = '';
    }
}
