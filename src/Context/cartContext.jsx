import { useState, useContext, createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  
  function addToCart(item) {
    let i = cartList.findIndex((prod) => prod.id === item.id);

    if (i !== -1) {
      const quant1 = cartList[i].cant;

      cartList[i].cant = quant1 + item.cant;

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

  const cantidadTotal = () => {
    return cartList.reduce((counter, prod) => (counter += prod.cant), 0);
  };
  const precioTotal = cartList.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.cant,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        clearItem,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
