const getLS = () => {
    const cartStringLS = localStorage.getItem("cart");
    if (cartStringLS) {
        return JSON.parse(cartStringLS);
    }
    return [];
}

const setLS = (cart) => {
    // console.log(cart);
    const CartItemsId = cart.map((item) => item.id);
    localStorage.setItem("cart", JSON.stringify(CartItemsId));
}

// console.log(getLS())
// setLS(["a", "b", "c"])

export { getLS, setLS }