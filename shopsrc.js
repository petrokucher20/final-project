function checkout() {
    if (cart.length === 0) {
    alert("Ваш кошик порожній!");
    return;
    }
    localStorage.removeItem('cart');
    indow.location.href = 'thankyou.html';
}