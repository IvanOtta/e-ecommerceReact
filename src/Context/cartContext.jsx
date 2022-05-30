import { useState,useContext, createContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    function isInCart(id) {
        return cartList.some(el => el.id === id)
    }

    function addToCart(item) {
        if(isInCart(item.id)) {
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].cantidad += item.cantidad
            setCartList(newCartList)
        } else {
            setCartList([
                ...cartList,
                item]);
        }
    }

    function clearCart() {
        setCartList([]);
    }

    const clearItem = (id) => {
        const newCart = [...cartList]
        let index = newCart.filter(item => item.id === id)
        newCart.splice(index, 1)
        setCartList([...newCart])
    }

    const cantidadTotal = () => {
        return cartList.reduce((counter, prod) => counter += prod.cant, 0)
    }
    const precioTotal = cartList.reduce(
        (acc, item) => acc + (item.price) * item.cant,
        0
      );

    
    

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            clearItem,
            cantidadTotal,
            precioTotal
        }}>    
            {children}
        </CartContext.Provider>
    )
}