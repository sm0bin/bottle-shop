const getLS = () => {
    const cartStringLS = localStorage.getItem("cart");
    if (cartStringLS) {
        return JSON.parse(cartStringLS);
    }
    return [];
}

const setLS = (cart) => {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// console.log(getLS())
// setLS(["a", "b", "c"])

export { getLS, setLS }