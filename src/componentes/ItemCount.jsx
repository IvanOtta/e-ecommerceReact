import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd, handleInput }) {
    const [quantity, setQuantity] = useState(initial)

    function contadorS() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    function contadorR() {
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
                <button className="botonR" onClick={contadorR} > - </button>
                <h2> {quantity} </h2>
                <button className="botonS" onClick={contadorS} > + </button>
                <button className="btnAddProductos" onClick={addToCart} >Agregar Producto</button>
            </div>
        </div>

    )
}