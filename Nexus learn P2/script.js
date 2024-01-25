function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (formType === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else if (formType === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send login request to the backend
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    };
    xhr.open("POST", "http://localhost/restaurant-website/auth.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`login=true&username=${username}&password=${password}`);
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Send signup request to the backend
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    };
    xhr.open("POST", "http://localhost/restaurant-website/auth.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(`signup=true&username=${username}&password=${password}`);
}
