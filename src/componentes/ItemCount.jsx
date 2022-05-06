import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
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

    function agregadoAlCarrito() {
        onAdd(cantidad)
    }



    return (
        <div>
            <div className="boton" > 
                <button className="botonS" onClick={contadorS} > + </button>
                <h3> {cantidad} </h3>
                <button className="botonR" onClick={contadorR} > - </button>
                <button className="btnAddProductos" onClick={agregadoAlCarrito} >Agregar productos</button>
            </div>
        </div>

    )
}