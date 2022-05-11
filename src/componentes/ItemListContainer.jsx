import { useEffect, useState } from 'react'
import productos from '../data/data'
import ItemList from './ItemList'

const items = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    },2000)
})


function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        items
        .then(resp => {
            setProductos(resp)
        })
        .finally(() => setLoading(false))
    }, [])
    
    return(
        <div className="bienvenida" >
            <p>{greeting}</p>
            {loading ? ( <h2>Cargando...</h2>) :  (<ItemList productos= {productos} /> ) }
        </div>
    )
}

export default ItemListContainer