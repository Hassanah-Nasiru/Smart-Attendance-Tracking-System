document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform your signup logic here
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    alert("Sign Up Successful!");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform your login logic here
    console.log(`Email: ${email}, Password: ${password}`);
    alert("Login Successful!");
});