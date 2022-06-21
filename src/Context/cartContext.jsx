import { useState, useContext, createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  
  function addToCart(item) {
    let i = cartList.findIndex((prod) => prod.id === item.id);

    if (i !== -1) {
      const quant1 = cartList[i].qnty;

      cartList[i].qnty = quant1 + item.qnty;

      setCartList([...cartList]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  function clearCart() {
    setCartList([]);
  }

  const clearItem = (id) => {
    const newCart = [...cartList];
    let index = newCart.filter((item) => item.id === id);
    newCart.splice(index, 1);
    setCartList([...newCart]);
  };

  const totalQuantity = () => {
    return cartList.reduce((counter, prod) => (counter += prod.qnty), 0);
  };
  const totalPrice = cartList.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.qnty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        clearItem,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
