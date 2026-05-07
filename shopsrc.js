//1. Перевірка кошика
function checkout() {
    if (cart.length === 0) {
    alert("Ваш кошик порожній!");
    return;
    }

    //2. Очищення даних
    localStorage.removeItem('cart');
    //3. Перехід на іншу сторінку
    window.location.href = 'thankyou.html';
}