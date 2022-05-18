import { useEffect, useState } from "react";
import { getData } from "../data/data";
import ItemDetail from "./ItemDetail";
import { Ring } from '@uiball/loaders'
import {useParams} from 'react-router-dom'
<Ring
    size={40}
    lineWeight={5}
    // speed={1}
    // color="black"
/>


function ItemDetailContainer() {
  const  [loading, setLoading] = useState(true)
  const [producto, setProduct] = useState({});
  const {id} = useParams()

  useEffect(() => {
    getData(id)  
      .then(res=> setProduct(res))
      .catch((err)=> console.log(err))
      .finally(()=>setLoading(false))
  }, []);

  console.log(id)
  console.log(producto)

  return (
    <div>
      {loading ? (<Ring color= {"red"}/>) : (<ItemDetail producto= {producto} />)}
    </div>
  );
}
export default ItemDetailContainer;
