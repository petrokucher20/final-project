function registerUser(event) {
    event.preventDefault();
    const user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    localStorage.setItem('userProfile', JSON.stringify(user));
    alert(`Вітаємо, ${user.username}! Профіль створено.`);
    window.location.href = 'index.html';
}