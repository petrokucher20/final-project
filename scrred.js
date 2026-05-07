//1. Перехоплення події (event.preventDefault())
function registerUser(event) {
    event.preventDefault();

    //2. Збір даних з полів
    const user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    //3. Збереження у LocalStorage
    localStorage.setItem('userProfile', JSON.stringify(user));

    //4. Зворотний зв'язок та редирект
    alert(`Вітаємо, ${user.username}! Профіль створено.`);
    window.location.href = 'index.html';
}