let cart = JSON.parse(localStorage.getItem('cart')) || [];
const user = JSON.parse(localStorage.getItem('userProfile'));
const greetingEl = document.getElementById('user-greeting');

if (greetingEl && user && user.username) {
greetingEl.innerHTML = `Вітаємо, ${user.username}! <button onclick="logoutUser()" style="margin-left: 1rem; padding: 0.3rem 1rem; font-size: 0.9rem;">Вийти</button>`;
}

function logoutUser() {
localStorage.removeItem('userProfile');
location.reload();
}

function addToCart(productName, price) {
cart.push({ name: productName, price: price });
localStorage.setItem('cart', JSON.stringify(cart));
showAlert(productName);
updateCart();
}

function showAlert(name) {
const alertBox = document.getElementById('cart-alert');
if (alertBox) {
    alertBox.innerText = `"${name}" додано до кошика!`;
    alertBox.style.display = 'block';
    setTimeout(() => alertBox.style.display = 'none', 3000);
}
}

function updateCart() {
const list = document.getElementById('cart-items');
const total = document.getElementById('total-price');
if (!list || !total) return;
list.innerHTML = '';
let sum = 0;
cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ₴${item.price}`;
    list.appendChild(li);
    sum += item.price;
});
total.innerText = sum;
}

function checkout() {
if (!user || !user.username) {
    alert("Щоб оформити замовлення, спочатку зареєструйтесь або увійдіть у профіль.");
    window.location.href = 'reg.html';
    return;
}

if (cart.length === 0) {
    alert("Ваш кошик порожній!");
    return;
}

let orderSummary = cart.map(item => `- ${item.name}: ₴${item.price}`).join('\n');
orderSummary += `\n\nЗагальна сума: ₴${cart.reduce((sum, item) => sum + item.price, 0)}`;
alert("Дякуємо за замовлення!\n\n" + orderSummary);
cart = [];
localStorage.removeItem('cart');
updateCart();
}

document.addEventListener('DOMContentLoaded', updateCart);

document.addEventListener('DOMContentLoaded', () => {
const user = JSON.parse(localStorage.getItem('userProfile'));
const authLinks = document.getElementById('auth-links');

if (user && user.username) {
    authLinks.innerHTML = `👤 ${user.username} <button onclick="logoutUser()" style="margin-left: 1rem;">Вийти</button>`;
}
});

function logoutUser() {
localStorage.removeItem('userProfile');
location.reload();
}
