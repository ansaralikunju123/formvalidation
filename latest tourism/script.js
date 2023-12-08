function validateLogin() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    var error1 = document.getElementById('err1');
    var error2 = document.getElementById('err2');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (emailRegex.test(loginEmail)) {
        error1.innerText = 'Email is valid';
        error1.style.color = 'green';
    } else {
        error1.innerText = 'Email is not valid';
        error1.style.color = 'red';
        return false;
    }

    // Password validation (you can add your own rules)
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(loginPassword)) {
        error2.innerText = 'password is valid';
        error2.style.color = 'green';
    } else {
        error2.innerText = 'password is not valid';
        error2.style.color = 'red';
        return false;
    }
  

    // Return true only if both email and password are valid
    return true;
}
