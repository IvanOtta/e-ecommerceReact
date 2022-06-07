import { clear } from '@testing-library/user-event/dist/clear'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import {useState} from 'react'
import { useCartContext } from '../Context/cartContext'
import '../css/checkPurchase.css'



export default function Form () {
const { clearCart, cartList } = useCartContext()
const [purchaseId, setId] = useState('')

async function generateOrder() {
    const orden = {}
    orden.buyer = { name : data.name, email: data.email, address : data.address}

    orden.items = cartList.map(cartItem  => {
      const id = cartItem.id
      const nombre = cartItem.name
      
      return {id, nombre}
    })
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then((res) => setId(res.id))
    .finally(() => clearCart())
    console.log(orden)
}


const [data, setData] = useState({
    name: '',
    lastName: '',
    email: '',
})
const handleInputChange = (e) => {
    setData({
        ...data, [e.target.name] : e.target.value
    })
}

const sendData = (e) => {
    e.preventDefault()
    clearCart()
}

function orderID() {
    let id = document.querySelector("#id-order")
    id.innerHTML = "Orden de Compra: "  + purchaseId;
}

    return(
        <div className='container-data'>
            <form className='form' onSubmit={sendData} >

            <input type="text" autoComplete='off' name="name" onChange={handleInputChange} placeholder="Ingresa tu nombre" required/>
            <input type="text" autoComplete='off' name="lastName" onChange={handleInputChange}   placeholder="Ingresa tu apellido" required/>
            <input type="text" autoComplete='off' name='address' onChange={handleInputChange}  placeholder="Domicilio" required/>
            <input type="email" autoComplete='off' name='email' onChange={handleInputChange} placeholder="Ingresa tu email" required/>
            <input className='btn btn-success' type="submit" name='send' value='Finalizar Compra'/>
            </form>


            <button className='btn btn-primary' onClick={generateOrder}> Generar Orden de Compra </button>  
            <button className='btn btn-outline-info' onClick={orderID}>Ver ID de compra</button> 

            
            
            <div id='id-order'>  </div>
        </div>
    )
}