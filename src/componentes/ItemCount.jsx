import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd, handleInput }) {
    const [cantidad, setCantidad] = useState(initial)

    function contadorS() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    function contadorR() {
        if (cantidad > 1) {
            setCantidad(cantidad - initial)
        }
    }

    function addToCart() {
        onAdd(cantidad)
        handleInput()
    }



    return (
        <div>
            <div className="boton" > 
                <button className="botonR" onClick={contadorR} > - </button>
                <h2> {cantidad} </h2>
                <button className="botonS" onClick={contadorS} > + </button>
                <button className="btnAddProductos" onClick={addToCart} >Agregar Producto</button>
            </div>
        </div>

    )
}