let usersData = [{username: "Admin", password: "123"}];

let userName = document.querySelector('#username');
let userPass = document.querySelector('#password');
let loginForm = document.querySelector('#login-form'); // Assuming you have a form element with id 'login-form'
let resultMessage = document.querySelector('#result-message'); // Assuming you have an element to display the result

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const enteredUsername = userName.value;
    const enteredPassword = userPass.value;

    const user = usersData.find(item => item.username === enteredUsername && item.password === enteredPassword);

    if (user) {
        resultMessage.textContent = "Welcome";
    } else {
        resultMessage.textContent = "User Failed";
    }
});
