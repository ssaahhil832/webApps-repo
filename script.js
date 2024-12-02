// script.js
document.querySelector('.signup-btn').addEventListener('click', () => {
  alert('Sign Up feature coming soon!');
});

document.querySelector('.login-btn').addEventListener('click', () => {
  alert('Log In feature coming soon!');
});
// script.js
document.getElementById('signup-btn').addEventListener('click', () => {
    window.location.href = 'signin.html'; // Redirect to Sign Up page
});

document.getElementById('login-btn').addEventListener('click', () => {
    window.location.href = 'signin.html'; // Redirect to Log In page
});