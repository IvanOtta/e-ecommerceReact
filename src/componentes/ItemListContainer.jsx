import { useEffect, useState } from 'react'
import productos from '../data/data'
import ItemList from './ItemList'
import { Ring } from '@uiball/loaders'
import ItemDetail from './ItemDetail'

<Ring
    size={40}
    lineWeight={5}
    // speed={1}
    // color="black"
/>

const items = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})




function ItemListContainer({ greeting }) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        items
            .then(resp => {
                setProductos(resp)
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="bienvenida" >
            <p>{greeting}</p>
            {loading ? (<Ring color= {"red"}/>) : (<ItemList productos= {productos} />)}
        </div>
    )
}

export default ItemListContainer