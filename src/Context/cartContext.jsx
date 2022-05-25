import { useState,useContext, createContext } from 'react';

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

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
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }
    
    

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            clearItem
        }}>    
            {children}
        </CartContext.Provider>
    )
}