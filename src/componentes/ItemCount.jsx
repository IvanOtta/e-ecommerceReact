import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd, handleInput }) {
    const [quantity, setQuantity] = useState(initial)

    function counterI() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    function counterD() {
        if (quantity > 1) {
            setQuantity(quantity - initial)
        }
    }

    function addToCart() {
        onAdd(quantity)
        handleInput()
    }



    return (
        <div>
            <div className="boton" > 
                <button className="buttonD" onClick={counterD} > - </button>
                <h2> {quantity} </h2>
                <button className="buttonI" onClick={counterI} > + </button>
                <button className="btnAddProducts" onClick={addToCart} >Agregar Producto</button>
            </div>
        </div>

    )
}