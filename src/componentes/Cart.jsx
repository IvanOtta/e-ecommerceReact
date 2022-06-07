import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import {BsFillTrashFill} from 'react-icons/bs'
import {RiArrowGoBackFill} from 'react-icons/ri'
import {CgDanger} from 'react-icons/cg'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { useState } from "react";
import "../css/cart.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const { cartList, clearCart, clearItem, precioTotal } = useCartContext();
  const [purchaseId, setId] = useState('')
  async function generateOrder() {
    const orden = {}
    orden.buyer = { name : 'Ivan', email: 'ivan@gmail.com', phone : '232323' }
    // orden.total = precioTotal()

    orden.items = cartList.map(cartItem  => {
      const id = cartItem.id
      const nombre = cartItem.name
      // const precio = cartItem.price * cartItem.cant
      
      return {id, nombre}
    })
    
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then((res) => setId(res.id))
    .finally(() => clearCart())


    const queryCollectionStock = collection(db, 'items')

    const queryActualizarStock = query(queryCollectionStock, where(documentId(), 'in', cartList.map(it => it.id)))
    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock = cartList.find(item => item.id === res.id).cant

    })))
    .finally(() => console.log('actualizado'))

    batch.commit()
  }

  
  return (
    <div className="cart-container">
      {cartList.length === 0 ? '' : <h2 className="cartTitle"> Finalizá tu Compra </h2>  }
      <div className="cart">
            {cartList.map((product) => (
          <li className="cartItem">
            <Link to={`/detalle${product.id}`}>
              <img className="img-cart" src={product.image}/>
            </Link>
            <p> {product.name} </p>
            <p> Precio: ${product.price} </p>
            <p> Cantidad: {product.cant} </p>
               <span onClick={() => clearItem(product.id)} > <BsFillTrashFill className="trash"/> </span> 
          </li>
         ))}
         {cartList.length ? (
           <div className="total-delete-btn">
            <h3 className="totalprice">Total: <span className="price"> ${precioTotal} </span></h3> 
            <button className="delete-button btn btn-outline-danger" onClick={clearCart}>
              Vaciar Carrito
            </button>
          <Link to={'/'} >
            <button className="btn btn-outline-info">Seguir Comprando</button>
          </Link>
          {/* <Link to={'/contacto'} > */}
          <button onClick = {generateOrder} className="btn btn-outline-success">
            Realizar Compra
          </button>
          {/* </Link> */}
          </div>) : (
          <div className="carritoVacio">
            <div className="alert-cart-empty">
            <CgDanger color={"red"} fontSize={'2rem'}/>
            <p style={{fontFamily: 'roboto'}}>No hay productos en tu carrito</p>
            </div>
            <Link to={"/"} className='backToHome'>
              <RiArrowGoBackFill/>
              <p>Volver a la tienda</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
