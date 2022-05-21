import { useEffect, useState } from 'react'
import productos from '../data/data'
import ItemList from './ItemList'
import { Ring } from '@uiball/loaders'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

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
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            items
                .then(resp => setProductos(resp.filter((prods) => prods.categoria === id)))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        } 
        else{
            items
                .then(resp => setProductos(resp))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false)) 
        }
    }, [id])

    console.log(id)
    return (
        <div className="bienvenida" >
            <p>{greeting}</p>
            {loading ? (<Ring color= {"red"}/>) : (<ItemList productos= {productos} />)}
        </div>
    )
}

export default ItemListContainer