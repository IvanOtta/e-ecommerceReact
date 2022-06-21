import Swal from 'sweetalert2'
import {useState} from 'react'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import { useCartContext } from '../Context/cartContext'
import '../css/checkPurchase.css'



export default function Form () {
const { clearCart, cartList } = useCartContext()
const [purchaseId, setId] = useState('')

async function generateOrder() {
    const order = {}
    order.buyer = { name : data.name, email: data.email, address : data.address, date: new Date()}

    order.items = cartList.map(cartItem  => {
      const id = cartItem.id
      const nameBuyer = cartItem.name
      const price = cartItem.price * cartItem.qnty 
      
      return {id, nameBuyer, price}
    })
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then((res) => setId(res.id))
    .finally(() => clearCart())

    const queryCollectionStock = collection(db, 'items')

        const queryUpdateStock = query(
            queryCollectionStock,  
            where( documentId() , 'in', cartList.map(it => it.id) )   
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).qnty
        }) ))

        batch.commit()


    
}


const [data, setData] = useState({
    name: '',
    lastName: '',
    address: '',
    email: '',
    email2: '',
})
const handleInputChange = (e) => {
    setData({
        ...data, [e.target.name] : e.target.value
    })
}

const sendData = (e) => {
    e.preventDefault()
}



const [button, setButton] = useState(false)

const buttons = () => {
    setButton(true)
}





function alerta(){
    Swal.fire(
        `Muchas Gracias por tu Compra ${data.name} ${data.lastName} 🥳!`,
        `Te lo enviaremos a <strong>${data.address}</strong> 
        ID de su compra es: <span claassName= "idPurchase"> <strong>${purchaseId} </strong> </span>`,
        'success',
    )
}

    return(
        <div className='container-data'>

            <h1 style={{fontFamily: 'roboto', fontSize: '2rem', borderBottom: '4px red dotted'}}> Para Terminar Ingresá tus Datos</h1>
            <form className='form' onSubmit={sendData}>

            <input type="text" autoComplete='off' name="name" onChange={handleInputChange} placeholder="Ingresa tu nombre" required/>
            <input type="text" autoComplete='off' name="lastName" onChange={handleInputChange}   placeholder="Ingresá tu apellido" required/>
            <input type="text" autoComplete='off' name='address' onChange={handleInputChange}  placeholder="Ingresá tu dirección" required/>
            <input type="email" autoComplete='off' name='email' onChange={handleInputChange} placeholder="Ingresá tu correo" required/>
            <input type="email" autoComplete='off' name='email2' onChange={handleInputChange} placeholder="Repite el correo" required/>
            <input className='btn btn-success' id='buttonBuy' type="submit" disabled={data.email === data.email2 && data.email2 === data.email? '': 'disabled' } onClick= {buttons} name='send' value='Finalizar Compra'/> 
            </form>
            {button === true ? 
            (<button className='btn btn-primary' onClick={generateOrder}> Generar Orden de Compra </button>) 
            : 
            ('') }
            {purchaseId !== '' ? <button  style={{margin: '15px', padding: '10px'}} className='btn btn-outline-info' onClick={alerta}>Ver ID de compra</button>  : '' }
        </div>
    )
}