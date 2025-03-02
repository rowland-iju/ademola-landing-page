// Add interactivity if needed
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  
    // Example: Redirect to a dashboard page
    // window.location.href = '/dashboard';
  });